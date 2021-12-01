import { objectCache, CacheKey } from "@grouparoo/core";
import { SimpleAppOptions } from "@grouparoo/core";
import { Client } from "../connect";
import { AudienceSubtype } from "./model";

export interface FacebookCacheData {
  appId: string;
  appOptions: SimpleAppOptions;
}

export async function getAudienceId(
  client: Client,
  cacheData: FacebookCacheData,
  subtype: AudienceSubtype,
  listName: string
): Promise<string> {
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const { appId, appOptions } = cacheData;
  const cacheKey: CacheKey = ["getListId", subtype, listName, appOptions];
  const listId = await objectCache(
    { objectId: appId, cacheKey, cacheDurationMs },
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

async function findAudienceByName(
  client: Client,
  useSubtype: AudienceSubtype,
  audienceName: string
): Promise<string> {
  const adAccount = client.adAccount();
  const fields = ["id", "name", "subtype"];
  const params = { limit: 500 };

  const compareName = audienceName.toLowerCase().trim();

  let result = await adAccount.getCustomAudiences(fields, params);
  while (result) {
    for (const audience of result) {
      const { id, name, subtype } = audience;
      if (useSubtype === subtype) {
        const normalized = name.toLowerCase().trim();
        if (compareName === normalized) {
          return id;
        }
      }
    }
    if (result.hasNext()) {
      result = await result.next();
    } else {
      result = null;
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
