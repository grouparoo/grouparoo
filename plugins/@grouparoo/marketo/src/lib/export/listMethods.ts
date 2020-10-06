import { objectCache } from "@grouparoo/core";

export async function getListId(
  client,
  destinationGuid,
  listName: string
): Promise<number> {
  const cacheKey = `list:${listName}`;
  const cacheDurationMs = 1000 * 60 * 10; // 10 minutes
  const listId = await objectCache(
    { objectGuid: destinationGuid, cacheKey, cacheDurationMs },
    async () => {
      // not cached find it
      let marketoId = await findListByName(client, listName);
      if (marketoId) {
        return marketoId;
      }
      // otherwise, create it
      return createList(client, destinationGuid, listName);
    }
  );
  return listId;
}
async function findListByName(client, listName: string): Promise<number> {
  const path = "/asset/v1/staticList/byName.json";
  const options = { query: { name: listName } };
  const response = await client.list._connection.get(path, options);
  const results = response.result || [];
  if (results.length === 0) {
    return null;
  }
  return results[0].id;
}
async function createList(
  client,
  destinationGuid,
  listName: string
): Promise<number> {
  const path = "/asset/v1/staticLists.json";
  const data = {
    name: listName,
    folder: JSON.stringify({
      type: "Folder",
      id: await getRootFolderId(client, destinationGuid),
    }),
  };
  const response = await client.list._connection.post(path, { data });
  const results = response.result || [];
  const message = (response.errors || []).join(",");
  if (!response.success || results.length === 0) {
    throw new Error(`Error creating list: ${listName}: ${message}`);
  }
  return results[0].id;
}

async function getRootFolderId(client, destinationGuid): Promise<number> {
  // for when they get created, they can move the lists anywhere after that
  // TODO: we could consider making a subfolder called "Grouparoo"
  // but we'd have to create that and that's more work. Let's see how it goes.
  const folderName = "Group Lists";

  const cacheKey = `folder:${folderName}`;
  const cacheDurationMs = 1000 * 60 * 120; // 120 minutes
  const folderId = await objectCache(
    { objectGuid: destinationGuid, cacheKey, cacheDurationMs },
    async () => {
      // not cached find it
      const marketoId = findSystemFolderByName(client, folderName);
      if (!marketoId) {
        throw new Error(`Marketo folder not found: ${folderName}`);
      }
      return marketoId;
    }
  );
  return folderId;
}
async function findSystemFolderByName(
  client,
  folderName: string
): Promise<number> {
  const path = "/asset/v1/folder/byName.json";
  const options = { query: { name: folderName } };
  const response = await client.list._connection.get(path, options);
  const results = response.result || [];
  for (const result of results) {
    // there can be multiple, but we want the system one
    if (result.isSystem) {
      return result.folderId.id;
    }
  }
  return null;
}
