import { Import } from "../../models/Import";
import { Run } from "../../models/Run";
import { ProfileOps } from "./profile";
import { CLS } from "../../modules/cls";
import { Op } from "sequelize";
import { config } from "actionhero";

export namespace ImportOps {
  const defaultImportProcessingDelay = 1000 * 60 * 5;

  export function retrySendAt(delayMs = defaultImportProcessingDelay) {
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
        profileId: null,
        errorMessage: null,
        startedAt: {
          [Op.or]: [null, { [Op.lt]: new Date().getTime() - delayMs }],
        },
      },
      limit,
      order: [["createdAt", "asc"]],
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
      await CLS.enqueueTask("import:associateProfile", {
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

  export async function associateProfile(_import: Import) {
    const {
      profile,
      isNew,
      // will throw if there are no unique profile properties
    } = await ProfileOps.findOrCreateByUniqueProfileProperties(_import.data);

    const oldProfileProperties = await profile.simplifiedProperties();
    const oldGroups = await profile.$get("groups");

    _import.profileId = profile.id;
    _import.profileAssociatedAt = new Date();

    _import.oldProfileProperties =
      Object.keys(_import.oldProfileProperties).length === 0
        ? oldProfileProperties
        : {};

    _import.oldGroupIds = oldGroups.map((group) => group.id);

    await _import.save();

    return { profile, isNew };
  }
}
