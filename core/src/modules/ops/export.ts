import { Op, WhereOptions } from "sequelize";
import {
  ExportRecordProperties,
  ExportRecordPropertiesWithType,
} from "../../models/Export";
import { RecordPropertyOps } from "../../modules/ops/recordProperty";
import { Export, ExportStates } from "../../models/Export";
import { Destination } from "../../models/Destination";
import { CLS } from "../../modules/cls";
import { Option } from "../../models/Option";

export namespace ExportOps {
  const defaultExportProcessingDelay = 1000 * 60 * 5;

  /** Count up the exports in each state, optionally filtered for a record or destination */
  export async function totals(
    where: { recordId?: string; destinationId?: string } = {}
  ) {
    const totals: { [k in typeof ExportStates[number]]: number } = {
      draft: 0,
      pending: 0,
      processing: 0,
      canceled: 0,
      failed: 0,
      complete: 0,
    };

    for (const state of ExportStates) {
      totals[state] = await Export.count({
        where: Object.assign({}, where, { state }),
      });
    }

    return totals;
  }

  /**
   * Given an export with stringified old/new record properties, this method will re-'inflate' them, ie turning date strings back to date objects.
   * To be used in the getter, this method cannot be async.
   */
  export function deserializeExportRecordProperties(
    serializedStringifiedProperties: string
  ): ExportRecordProperties {
    const response: ExportRecordProperties = {};
    const serializedProperties: ExportRecordPropertiesWithType =
      serializedStringifiedProperties
        ? JSON.parse(serializedStringifiedProperties)
        : {};

    for (const key in serializedProperties) {
      const type = serializedProperties[key]?.type;
      const rawValue = serializedProperties[key]?.rawValue;

      if (!type) {
        // legacy formatting
        response[key] = serializedProperties[key];
      } else {
        // current formatting
        if (Array.isArray(rawValue)) {
          response[key] = rawValue.map((rv) =>
            RecordPropertyOps.getValue(rv, type)
          );
        } else {
          response[key] = RecordPropertyOps.getValue(rawValue, type);
        }
      }
    }

    return response;
  }

  export async function processPendingExportsForDestination(
    destination: Destination,
    limit = 100,
    delayMs = defaultExportProcessingDelay
  ) {
    if (!delayMs || delayMs < defaultExportProcessingDelay) {
      delayMs = defaultExportProcessingDelay;
    }

    const app = await destination.$get("app", {
      scope: null,
      include: [Option],
    });
    const { pluginConnection } = await destination.getPlugin();

    let _exports: Export[];

    _exports = await Export.findAll({
      where: {
        state: "pending",
        destinationId: destination.id,
        sendAt: { [Op.lte]: new Date() },
        startedAt: {
          [Op.or]: [null, { [Op.lt]: new Date().getTime() - delayMs }],
        },
      },
      limit,
    });

    if (_exports.length > 0) {
      const updateResponse = await Export.update(
        { startedAt: new Date() },
        {
          where: { id: { [Op.in]: _exports.map((e) => e.id) } },
        }
      );

      // For postgres only: we can update our result set with the rows that were updated, filtering out those which are no longer startedAt=null
      // in SQLite this isn't possible, but contention is far less likely
      if (updateResponse[1]) _exports = updateResponse[1];

      if (pluginConnection.methods.exportRecords) {
        // the plugin has a batch exportRecords method
        await CLS.enqueueTask(
          "export:sendBatch",
          {
            destinationId: destination.id,
            exportIds: _exports.map((e) => e.id),
          },
          `exports:${app.type}`
        );
      } else {
        // the plugin has a per-record exportRecord method
        for (const _export of _exports) {
          await CLS.enqueueTask(
            "export:send",
            {
              destinationId: destination.id,
              exportId: _export.id,
            },
            `exports:${app.type}`
          );
        }
      }
    }

    return _exports.length;
  }

  /**
   * Finds failed exports within a time range and sets them back to pending
   */
  export async function retryFailedExports(
    startDate: Date,
    endDate: Date,
    destination?: Destination,
    saveExports = true
  ) {
    const where: WhereOptions<Export> = {
      state: "failed",
      createdAt: {
        [Op.gte]: startDate,
        [Op.lte]: endDate,
      },
    };

    if (destination) where.destinationId = destination.id;

    if (saveExports) {
      const [count] = await Export.update(
        {
          state: "pending",
          sendAt: new Date(),
          startedAt: null,
          errorMessage: null,
          errorLevel: null,
          retryCount: 0,
        },
        { where }
      );

      return count;
    }

    return Export.count({ where });
  }
}
