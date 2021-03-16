import { objectCache } from "@grouparoo/core";
import {
  getKnownPersonFieldMap,
  PipedriveCacheData,
} from "./destinationMappingOptions";

export async function getGroupFieldKey(
  client: any,
  cacheData: PipedriveCacheData,
  groupName: string
): Promise<string> {
  groupName = (groupName || "").toString().trim();

  const { appId, appOptions } = cacheData;
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getGroupFieldKey", groupName, appOptions];

  return objectCache(
    { objectId: appId, cacheKey, cacheDurationMs },
    async () => {
      return ensureFieldAndFilter(client, cacheData, groupName);
    }
  );
}

// gets called if the group field key is not cached
async function ensureFieldAndFilter(
  client: any,
  cacheData: PipedriveCacheData,
  groupName: string
): Promise<string> {
  const fieldName = makeGroupFieldName(groupName);

  // see if it's already there
  let pipedriveFieldMap = await getKnownPersonFieldMap(client, cacheData);
  let fieldKey = pipedriveFieldMap[fieldName];
  if (fieldKey) {
    return fieldKey;
  }

  // maybe it's just not cached yet
  pipedriveFieldMap = await getKnownPersonFieldMap(client, cacheData, true);
  fieldKey = pipedriveFieldMap[fieldName];
  if (fieldKey) {
    return fieldKey;
  }

  // need to create it
  const { data } = await client.PersonFieldsController.addANewPersonField({
    body: { name: fieldName, field_type: "varchar" },
  });

  // automatically create the filter too
  await client.FiltersController.addANewFilter({
    name: fieldName,
    type: "people",
    conditions: {
      glue: "and",
      conditions: [
        {
          glue: "and",
          conditions: [
            {
              object: "person",
              field_id: data.id,
              operator: "=",
              value: "true",
            },
          ],
        },
      ],
    },
  });

  return data.key;
}

function makeGroupFieldName(groupName: string) {
  return `In Group: ${groupName}`;
}
