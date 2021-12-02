import { Models } from "../../utils/apiData";

export function getRecordDisplayName(record: Models.GrouparooRecordType) {
  let displayName = `Record: ${record.id}`;

  for (const [key, property] of Object.entries(record.properties)) {
    if (property.isPrimaryKey) {
      displayName = `${key}: ${property.values.join(", ")}`;
      break;
    }
  }

  return displayName;
}
