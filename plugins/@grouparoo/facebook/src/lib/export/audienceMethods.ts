import { objectCache, CacheKey } from "@grouparoo/core";
import { SimpleAppOptions } from "@grouparoo/core";
import { Client } from "../connect";
import { AudienceSubtype } from "./model";

export interface FacebookCacheData {
  appGuid: string;
  appOptions: SimpleAppOptions;
}

export async function getAudienceId(
  client: Client,
  cacheData: FacebookCacheData,
  subtype: AudienceSubtype,
  listName: string
): Promise<string> {
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const { appGuid, appOptions } = cacheData;
  const cacheKey: CacheKey = ["getListId", subtype, listName, appOptions];
  const listId = await objectCache(
    { objectGuid: appGuid, cacheKey, cacheDurationMs },
    async () => {
      // not cached find it
      let facebookId = await findAudienceByName(client, subtype, listName);
      if (facebookId) {
        return facebookId;
      }
      // otherwise, create it
      return createAudience(client, subtype, listName);
    }
  );
  return listId;
}

async function getAllAudiences(client: Client) {
  // could do extra caching here id needed
  const adAccount = client.adAccount();
  const fields = ["id", "name", "subtype"];
  const params = {};
  const result = await adAccount.getCustomAudiences(fields, params);
  const out = [];
  for (const audience of result) {
    const { id, name, subtype } = audience;
    out.push({ id, name, subtype });
  }
  return out;
}
async function findAudienceByName(
  client: Client,
  subtype: AudienceSubtype,
  audienceName: string
): Promise<string> {
  const audiences = await getAllAudiences(client);
  for (const audience of audiences) {
    if (audienceName === audience.name && subtype === audience.subtype) {
      return audience.id;
    }
  }
  return null;
}

async function createAudience(
  client: Client,
  subtype: AudienceSubtype,
  name: string
): Promise<string> {
  const adAccount = client.adAccount();
  const fields = [];
  const params = {
    name,
    subtype,
    description: "Created from Grouparoo",
    customer_file_source: "USER_PROVIDED_ONLY",
  };
  const audience = await adAccount.createCustomAudience(fields, params);
  return audience.id;
}
