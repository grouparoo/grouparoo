import { config, env, log } from "actionhero";
import { Import } from "../../models/Import";
import { Run } from "../../models/Run";
import { Source } from "../../models/Source";
import { RecordOps } from "./record";
import { Op } from "sequelize";
import { Schedule } from "../../models/Schedule";
import { SourcesCache } from "../../modules/caches/sourcesCache";
import { uniqueArrayValues } from "../arrayUtils";

export namespace ImportOps {
  const defaultImportProcessingDelay = 1000 * 60 * 5;

  export function retryStartedAt(delayMs = defaultImportProcessingDelay) {
    return new Date(new Date().getTime() - delayMs + config.tasks.timeout * 2);
  }

  export async function processPendingImportsForAssociation(
    limit = 100,
    delayMs = defaultImportProcessingDelay
  ) {
    if (!delayMs || delayMs < defaultImportProcessingDelay) {
      delayMs = defaultImportProcessingDelay;
    }

    const imports = await Import.findAll({
      where: {
        state: "associating",
        startedAt: {
          [Op.or]: [null, { [Op.lt]: new Date().getTime() - delayMs }],
        },
      },
      limit,
    });

    if (imports.length === 0) return [];

    await Import.update(
      { startedAt: new Date() },
      { where: { id: imports.map((i) => i.id) } }
    );

    const runIds = imports
      .filter((i) => i.creatorType === "run")
      .map((i) => i.creatorId)
      .filter(uniqueArrayValues);

    const sources = await SourcesCache.findAllWithCache();
    const runs = await Run.findAll({ where: { id: runIds } });
    const schedules = await Schedule.findAll({
      where: {
        id: runs
          .filter((r) => r.creatorType === "schedule")
          .map((r) => r.creatorId),
      },
    });

    const bulkCreates: {
      id: Import["id"];
      state: Import["state"];
      creatorType: Import["creatorType"];
      creatorId: Import["creatorId"];
      createdRecord: Import["createdRecord"];
      recordId: Import["recordId"];
      recordAssociatedAt: Import["recordAssociatedAt"];
      startedAt: Import["startedAt"];
      createdAt: Import["createdAt"];
      updatedAt: Import["updatedAt"];
    }[] = [];

    for (const _import of imports) {
      let source: Source;
      if (runIds.includes(_import.creatorId)) {
        const run = runs.find((r) => r.id === _import.creatorId);
        const schedule = schedules.find((s) => s.id === run.creatorId);
        source = sources.find((s) => s.id === schedule.sourceId);
      }

      try {
        const { record, isNew } =
          await RecordOps.findOrCreateByUniqueRecordProperties(
            _import.data,
            source
          );

        const now = new Date();
        bulkCreates.push({
          id: _import.id,
          state: "importing",
          creatorType: _import.creatorType,
          creatorId: _import.creatorId,
          createdRecord: isNew,
          recordId: record.id,
          recordAssociatedAt: now,
          startedAt: _import.startedAt,
          createdAt: _import.createdAt,
          updatedAt: now,
        });

        await record.addOrUpdateProperties(_import.data, undefined, true);
      } catch (error) {
        if (env !== "test") log(`[ASSOCIATE IMPORT ERROR] ${error}`, "alert");
        if (_import)
          await _import.setError(error, "processPendingImportsForAssociation");
      }
    }

    await RecordOps.markPendingByIds(bulkCreates.map((i) => i.recordId));

    await Import.bulkCreate(bulkCreates, {
      updateOnDuplicate: [
        "state",
        "createdRecord",
        "recordId",
        "recordAssociatedAt",
        "updatedAt",
      ],
    });

    return imports;
  }
}
