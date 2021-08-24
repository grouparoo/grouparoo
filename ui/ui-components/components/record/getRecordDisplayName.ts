import { Models } from "../../utils/apiData";

export function getRecordDisplayName(record: Models.GrouparooRecordType) {
  let displayName = "";

  for (const key in record.properties) {
    if (record.properties[key].identifying) {
      displayName = record.properties[key].values.join(", ");
    }
  }

  if (displayName === "") displayName = record.id;

  return displayName;
}

export function getRecordPageTitle(record: Models.GrouparooRecordType) {
  let title = "";

  for (const key in record.properties) {
    if (record.properties[key].identifying) {
      title = `${key} - ${record.properties[key].values.join(", ")}`;
    }
  }

  if (title === "") title = `Record - ${record.id}`;

  return title;
}
