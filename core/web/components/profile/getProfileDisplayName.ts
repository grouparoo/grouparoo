import { ProfileAPIData } from "../../utils/apiData";

export default function getProfileDisplayName(profile: ProfileAPIData) {
  const propertiesArray = [];
  let displayName = profile.guid;

  for (const key in profile.properties) {
    if (profile.properties[key].identifying) {
      displayName = profile.properties[key].values.join(", ");
    }
  }

  return displayName;
}
