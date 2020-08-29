import { ProfileAPIData } from "../../utils/apiData";

export default function getProfileDisplayName(profile: ProfileAPIData) {
  let displayName = "";

  for (const key in profile.properties) {
    if (profile.properties[key].identifying) {
      displayName = profile.properties[key].values.join(", ");
    }
  }

  if (displayName === "") displayName = profile.guid;

  return displayName;
}
