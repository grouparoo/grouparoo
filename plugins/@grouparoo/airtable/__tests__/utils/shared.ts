import { IClient } from "../../src/lib/client/interfaces/iClient";

export async function getRecordByName(client: IClient, tableId: string, name) {
  const records = await client.listRecordsByField(tableId, "Name", [name]);
  if (records.length === 0) {
    return null;
  }
  if (records.length > 1) {
    throw new Error(`More than one (${records.length}) result: ${name}`);
  }
  return records[0];
}
export async function getRecordById(client: IClient, tableId: string, recId) {
  try {
    return await client.getRecordById(tableId, recId);
  } catch (err) {
    if (err.message.indexOf("Record not found") >= 0) {
      return null;
    }
    throw err;
  }
}

export async function cleanUp(
  client: IClient,
  tableId: string,
  suppressErrors: boolean
) {
  try {
    const records = await client.listRecords(tableId);
    const ids = records.map((r) => r.id);
    if (ids.length === 0) {
      return;
    }
    await client.deleteRecords(tableId, ids);
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}
