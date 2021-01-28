import { Models } from "../../utils/apiData";

export default function getProfileDisplayName(profile: Models.ProfileType) {
  let displayName = "";

  for (const key in profile.properties) {
    if (profile.properties[key].identifying) {
      displayName = profile.properties[key].values.join(", ");
    }
  }

  if (displayName === "") displayName = profile.guid;

  return displayName;
}
