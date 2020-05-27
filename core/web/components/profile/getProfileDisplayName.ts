import { ProfileAPIData } from "../../utils/apiData";

export default function getProfileDisplayName(profile: ProfileAPIData) {
  const propertiesArray = [];
  for (const k in profile.properties) {
    const hash = profile.properties[k];
    hash["key"] = k;
    propertiesArray.push(hash);
  }

  let name = profile.guid;
  const uniqueProperties = propertiesArray.filter((prp) => prp.unique);
  if (uniqueProperties.length > 0) {
    const emails = uniqueProperties.filter((prp) => prp.type === "email");
    if (emails[0]) {
      name = emails[0].value || "Anonymous Profile";
    } else {
      name = uniqueProperties[0].value || "Anonymous Profile";
    }
  }

  return name;
}
