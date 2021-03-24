import { Import } from "../../models/Import";
import { Run } from "../../models/Run";
import { ProfileOps } from "./profile";
import { CLS } from "../../modules/cls";
import { Op } from "sequelize";

export namespace ImportOps {
  export async function processPendingImportsForAssociation(
    limit = 100,
    delayMs = 1000 * 60 * 5
  ) {
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

    await Import.update(
      { startedAt: new Date() },
      {
        where: { id: { [Op.in]: imports.map((i) => i.id) }, startedAt: null },
      }
    );

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
