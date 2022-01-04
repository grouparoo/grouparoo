import { Import } from "../../models/Import";
import { Run } from "../../models/Run";
import { RecordOps } from "./record";
import { CLS } from "../../modules/cls";
import { Op } from "sequelize";
import { config } from "actionhero";
import { Schedule } from "../../models/Schedule";
import { Source } from "../../models/Source";

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

    if (imports.length > 0) {
      await Import.update(
        { startedAt: new Date() },
        {
          where: { id: { [Op.in]: imports.map((i) => i.id) } },
        }
      );
    }

    const runIds: string[] = [];
    for (const i in imports) {
      const _import = imports[i];
      await CLS.enqueueTask("import:associateRecord", {
        importId: _import.id,
      });

      if (
        _import.creatorType === "run" &&
        !runIds.includes(_import.creatorId)
      ) {
        runIds.push(_import.creatorId);
      }
    }

    if (runIds.length > 0) {
      await Run.update(
        { state: "running", completedAt: null },
        { where: { state: "complete", id: { [Op.in]: runIds } } }
      );
    }

    return imports;
  }

  export async function associateRecord(_import: Import) {
    let run: Run;
    let schedule: Schedule;
    let source: Source;

    run = await Run.findOne({
      where: { id: _import.creatorId, creatorType: "schedule" },
    });
    if (run && run.creatorType === "schedule")
      schedule = await Schedule.findOne({ where: { id: run.creatorId } });
    if (schedule)
      source = await Source.findOne({ where: { id: schedule.sourceId } });

    // will throw if there are no unique record properties
    const { record, isNew } =
      await RecordOps.findOrCreateByUniqueRecordProperties(
        _import.data,
        source
      );

    const oldRecordProperties = await record.simplifiedProperties();
    const oldGroups = await record.$get("groups");

    _import.state = "pending";
    _import.createdRecord = isNew;
    _import.recordId = record.id;
    _import.recordAssociatedAt = new Date();

    _import.oldRecordProperties =
      Object.keys(_import.oldRecordProperties).length === 0
        ? oldRecordProperties
        : {};

    _import.oldGroupIds = oldGroups.map((group) => group.id);

    await _import.save();

    return { record, isNew };
  }
}
