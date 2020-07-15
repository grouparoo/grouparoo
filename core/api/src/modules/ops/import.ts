import { Import } from "../../models/Import";
import { ProfileOps } from "./profile";

export namespace ImportOps {
  export async function associateProfile(_import: Import) {
    const {
      profile,
      isNew,
      // will throw if there are no unique profile properties
    } = await ProfileOps.findOrCreateByUniqueProfileProperties(_import.data);

    _import.profileGuid = profile.guid;
    _import.profileAssociatedAt = new Date();
    await _import.save();

    return { profile, isNew };
  }
}
