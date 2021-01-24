import { Import } from "../../models/Import";
import { ProfileOps } from "./profile";

export namespace ImportOps {
  export async function associateProfile(_import: Import) {
    const {
      profile,
      isNew,
      // will throw if there are no unique profile properties
    } = await ProfileOps.findOrCreateByUniqueProfileProperties(_import.data);

    const oldProfileProperties = await profile.simplifiedProperties();
    const oldGroups = await profile.$get("groups");

    _import.profileGuid = profile.guid;
    _import.profileAssociatedAt = new Date();

    _import.oldProfileProperties =
      Object.keys(_import.oldProfileProperties).length === 0
        ? oldProfileProperties
        : {};

    _import.oldGroupGuids = oldGroups.map((group) => group.guid);

    await _import.save();

    return { profile, isNew };
  }
}
