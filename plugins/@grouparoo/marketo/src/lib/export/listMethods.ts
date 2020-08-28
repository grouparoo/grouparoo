import { cache } from "./../cache";

export async function getListId(client, listName: string): Promise<number> {
  const cacheKey = `grouparoo:marketo:list-${listName}`;
  const cacheDuration = 1000 * 60 * 30; // 30 minutes
  const lockKey = `grouparoo:marketo:list-${listName}-lock`;
  const listId = await cache({ cacheKey, lockKey, cacheDuration }, async () => {
    // not cached find it
    let marketoId = await findListByName(client, listName);
    if (marketoId) {
      return marketoId;
    }
    // otherwise, create it
    return createList(client, listName);
  });
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
async function createList(client, listName: string): Promise<number> {
  const path = "/asset/v1/staticLists.json";
  const data = {
    name: listName,
    folder: JSON.stringify({
      type: "Folder",
      id: await getRootFolderId(client),
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

async function getRootFolderId(client): Promise<number> {
  // for when they get created, they can move the lists anywhere after that
  // TODO: we could consider making a subfolder called "Grouparoo"
  const folderName = "Group Lists";

  const cacheKey = `grouparoo:marketo:folder-${folderName}`;
  const cacheDuration = 1000 * 60 * 120; // 120 minutes
  const lockKey = `grouparoo:marketo:folder-${folderName}-lock`;
  const folderId = await cache(
    { cacheKey, lockKey, cacheDuration },
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
