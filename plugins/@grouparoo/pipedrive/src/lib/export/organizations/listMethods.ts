import { objectCache } from "@grouparoo/core";
import { PipedriveClient } from "../../client";
import {
  getKnownOrganizationFieldMap,
  PipedriveCacheData,
} from "./destinationMappingOptions";

export async function getGroupFieldKey(
  client: PipedriveClient,
  cacheData: PipedriveCacheData,
  groupName: string,
  createIfNotExists?: boolean
): Promise<string> {
  groupName = groupName.trim();

  const { appId, appOptions } = cacheData;
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const cacheKey = ["getGroupFieldKey", groupName, appOptions];
  const write = createIfNotExists; // don't cache nulls
  return objectCache(
    { objectId: appId, cacheKey, cacheDurationMs, write },
    async () => {
      return ensureFieldAndFilter(
        client,
        cacheData,
        groupName,
        createIfNotExists
      );
    }
  );
}

// gets called if the group field key is not cached
async function ensureFieldAndFilter(
  client: PipedriveClient,
  cacheData: PipedriveCacheData,
  groupName: string,
  createIfNotExists: boolean
): Promise<string> {
  const fieldName = makeGroupFieldName(groupName);

  // see if it's already there
  let pipedriveFieldMap = await getKnownOrganizationFieldMap(client, cacheData);
  let fieldKey = pipedriveFieldMap[fieldName];
  if (fieldKey) {
    return fieldKey;
  }

  // maybe it's just not cached yet
  pipedriveFieldMap = await getKnownOrganizationFieldMap(
    client,
    cacheData,
    true
  );
  fieldKey = pipedriveFieldMap[fieldName];
  if (fieldKey) {
    return fieldKey;
  }

  // need to create it
  if (!createIfNotExists) return null;

  const { data } = await client.organizations.fields.create({
    name: fieldName,
    field_type: "varchar",
  });

  // automatically create the filter too
  await client.organizations.filters.create({
    name: fieldName,
    conditions: {
      glue: "and",
      conditions: [
        {
          glue: "and",
          conditions: [
            {
              object: "organization",
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

export const GROUP_FIELD_PREFIX = "In Group:";
function makeGroupFieldName(groupName: string) {
  return `${GROUP_FIELD_PREFIX} ${groupName}`;
}
