import { Import } from "../../models/Import";
import { ProfileOps } from "./profile";
import { ProfilePropertyType } from "./profile";

function simplifyProfileProperties(complexProperties: ProfilePropertyType) {
  const simpleProperties = {};
  for (let key in complexProperties) {
    simpleProperties[key] = complexProperties[key].values;
  }

  return simpleProperties;
}

export namespace ImportOps {
  export async function associateProfile(_import: Import) {
    const {
      profile,
      isNew,
      // will throw if there are no unique profile properties
    } = await ProfileOps.findOrCreateByUniqueProfileProperties(_import.data);

    const oldProfileProperties = await profile.properties();
    const olgGroups = await profile.$get("groups");

    _import.profileGuid = profile.guid;
    _import.profileAssociatedAt = new Date();

    _import.oldProfileProperties =
      Object.keys(_import.oldProfileProperties).length === 0
        ? simplifyProfileProperties(oldProfileProperties)
        : {};

    _import.oldGroupGuids = olgGroups.map((group) => group.guid);

    await _import.save();

    return { profile, isNew };
  }
}
