import {
  ExportProfileProperties,
  ExportProfilePropertiesWithType,
} from "../../models/Export";
import { ProfilePropertyOps } from "../../modules/ops/profileProperty";
import { Export } from "../../models/Export";
import { Destination } from "../../models/Destination";
import { CLS } from "../../modules/cls";
import { Op } from "sequelize";

export namespace ExportOps {
  /** Count up the exports in each state, optionally filtered for a profile or destination */
  export async function totals(
    where: { profileId?: string; destinationId?: string } = {}
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
    limit = 100,
    delayMs = 1000 * 60 * 5
  ) {
    const app = await destination.$get("app");
    const { pluginConnection } = await destination.getPlugin();

    let _exports: Export[];

    _exports = await Export.findAll({
      where: {
        startedAt: {
          [Op.or]: [null, { [Op.lt]: new Date().getTime() - delayMs }],
        },
        destinationId: destination.id,
      },
      order: [["createdAt", "asc"]],
      limit,
    });

    const updateResponse = await Export.update(
      { startedAt: new Date() },
      {
        where: {
          id: { [Op.in]: _exports.map((e) => e.id) },
          startedAt: null,
        },
      }
    );

    // For postgres only: we can update our result set with the rows that were updated, filtering out those which are no longer startedAt=null
    // in SQLite this isn't possible, but contention is far less likely
    if (updateResponse[1]) _exports = updateResponse[1];

    if (_exports.length > 0) {
      if (pluginConnection.methods.exportProfiles) {
        // the plugin has a batch exportProfiles method
        await CLS.enqueueTask(
          "export:sendBatch",
          {
            destinationId: destination.id,
            exportIds: _exports.map((e) => e.id),
          },
          `exports:${app.type}`
        );
      } else {
        // the plugin has a per-profile exportProfile method
        await Promise.all(
          _exports.map((_export) =>
            CLS.enqueueTask(
              "export:send",
              {
                destinationId: destination.id,
                exportId: _export.id,
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
