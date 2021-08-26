import { MailjetClient } from "../client";

async function getListId(
  client: MailjetClient,
  listName: string
): Promise<string> {
  let list = await client.getListByName(listName);
  if (list) {
    return list.ID;
  }
  list = await client.createList(listName);
  if (list) {
    return list.ID;
  }
  return null;
}

export async function addToList(
  client: MailjetClient,
  email: string,
  listName: string
) {
  const listId = await getListId(client, listName);
  if (listId) {
    await client.addContactToList(listId, email);
  }
}

export async function removeFromList(
  client: MailjetClient,
  email: string,
  listName: string
) {
  const listId = await getListId(client, listName);
  if (listId) {
    await client.removeContactFromList(listId, email);
  }
}
