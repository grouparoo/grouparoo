import {
  ExportProfileProperties,
  ExportProfilePropertiesWithType,
} from "../../models/Export";
import { ProfilePropertyOps } from "../../modules/ops/profileProperty";
import { Export } from "../../models/Export";
import { Destination } from "../../models/Destination";
import { api, task } from "actionhero";
import { Op, Transaction } from "sequelize";

export namespace ExportOps {
  /** Count up the exports in each state, optionally filtered for a profile or destination */
  export async function totals(
    where: { profileGuid?: string; destinationGuid?: string } = {}
  ) {
    const totals = { all: 0, created: 0, started: 0, completed: 0, error: 0 };

    totals.all = await Export.count({ where });

    totals.created = await Export.count({
      where: Object.assign({}, where, {
        startedAt: { [Op.eq]: null },
        [Op.and]: {
          completedAt: { [Op.eq]: null },
          errorMessage: { [Op.eq]: null },
        },
      }),
    });

    totals.started = await Export.count({
      where: Object.assign({}, where, {
        startedAt: { [Op.ne]: null },
        [Op.and]: {
          completedAt: { [Op.eq]: null },
          errorMessage: { [Op.eq]: null },
        },
      }),
    });

    totals.completed = await Export.count({
      where: Object.assign({}, where, {
        startedAt: { [Op.ne]: null },
        completedAt: { [Op.ne]: null },
        errorMessage: { [Op.eq]: null },
      }),
    });

    totals.error = await Export.count({
      where: Object.assign({}, where, {
        errorMessage: { [Op.ne]: null },
      }),
    });

    return totals;
  }

  /**
   * Given an export with stringified old/new profile properties, this method will re-'inflate' them, ie turning date strings back to date objects.
   * To be used in the getter, this method cannot be async.
   */
  export function deserializeExportProfileProperties(
    serializedStringifiedProperties: string
  ): ExportProfileProperties {
    const response = {};
    const serializedProperties: ExportProfilePropertiesWithType = serializedStringifiedProperties
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
            ProfilePropertyOps.getValue(rv, type)
          );
        } else {
          response[key] = ProfilePropertyOps.getValue(rawValue, type);
        }
      }
    }

    return response;
  }

  export async function processPendingExportsForDestination(
    destination: Destination,
    limit = 100
  ) {
    const app = await destination.$get("app");
    const { pluginConnection } = await destination.getPlugin();

    let _exports: Export[];

    const transaction: Transaction = await api.sequelize.transaction({});

    try {
      _exports = await Export.findAll({
        where: {
          startedAt: null,
          destinationGuid: destination.guid,
        },
        order: [["createdAt", "asc"]],
        limit,
        transaction,
      });

      const updateResponse = await Export.update(
        { startedAt: new Date() },
        {
          where: {
            guid: { [Op.in]: _exports.map((e) => e.guid) },
            startedAt: null,
          },
          transaction,
          returning: true,
        }
      );

      transaction.commit();

      // For postgres only: we can update our result set with the rows that were updated, filtering out those which are no longer startedAt=null
      // in SQLite this isn't possible, but contention is far less likely
      if (updateResponse[1]) _exports = updateResponse[1];
    } catch (error) {
      await transaction.rollback();
      throw error;
    }

    if (_exports.length > 0) {
      if (pluginConnection.methods.exportProfiles) {
        // the plugin has a batch exportProfiles method
        await task.enqueue(
          "export:sendBatch",
          {
            destinationGuid: destination.guid,
            exportGuids: _exports.map((e) => e.guid),
          },
          `exports:${app.type}`
        );
      } else {
        // the plugin has a per-profile exportProfile method
        await Promise.all(
          _exports.map((_export) =>
            task.enqueue(
              "export:send",
              {
                destinationGuid: destination.guid,
                exportGuid: _export.guid,
              },
              `exports:${app.type}`
            )
          )
        );
      }
    }

    return _exports.length;
  }
}
