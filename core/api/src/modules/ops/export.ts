import {
  ExportProfileProperties,
  ExportProfilePropertiesWithType,
} from "../../models/Export";
import { ProfilePropertyOps } from "../../modules/ops/profileProperty";
import { plugin } from "../../modules/plugin";
import { Export } from "../../models/Export";
import { Destination } from "../../models/Destination";
import { api, task } from "actionhero";
import { Op } from "sequelize";

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
    limit?: number
  ) {
    if (!limit) {
      limit = parseInt(
        (await plugin.readSetting("core", "exports-profile-batch-size")).value
      );
    }
    const app = await destination.$get("app");
    const { pluginConnection } = await destination.getPlugin();

    // We use Export#startedAt to denote that this export needs to be worked.  We can update and claim them in one go.
    // This requires a custom query.
    const query = `
UPDATE "exports"
SET "startedAt" = NOW()
WHERE guid IN (
  SELECT guid FROM "exports"
  WHERE "startedAt" IS NULL
  AND "destinationGuid" = '${destination.guid}'
  ORDER BY "createdAt" DESC
  LIMIT ${limit}
)
AND "startedAt" IS NULL
AND "destinationGuid" = '${destination.guid}'
RETURNING *
;
  `;

    const _exports: Export[] = await api.sequelize.query(query, {
      model: Export,
      mapToModel: true,
    });

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
