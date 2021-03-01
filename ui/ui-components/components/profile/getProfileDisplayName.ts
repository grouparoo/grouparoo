import { Models } from "../../utils/apiData";

export function getProfileDisplayName(profile: Models.ProfileType) {
  let displayName = "";

  for (const key in profile.properties) {
    if (profile.properties[key].identifying) {
      displayName = profile.properties[key].values.join(", ");
    }
  }

  if (displayName === "") displayName = profile.id;

  return displayName;
}

export function getProfilePageTitle(profile: Models.ProfileType) {
  let title = "";

  for (const key in profile.properties) {
    if (profile.properties[key].identifying) {
      title = `${key} - ${profile.properties[key].values.join(", ")}`;
    }
  }

  if (title === "") title = `Profile - ${profile.id}`;

  return title;
}
