import { IClient } from "../../src/lib/client/interfaces/iClient";

export async function getRecordByName(
  client: IClient,
  tableIdOrName: string,
  name
) {
  const records = await client.listRecordsByField(tableIdOrName, "Name", [
    name,
  ]);
  if (records.length === 0) {
    return null;
  }
  if (records.length > 1) {
    throw new Error(`More than one (${records.length}) result: ${name}`);
  }
  return records[0];
}
export async function getRecordById(
  client: IClient,
  tableIdOrName: string,
  recId
) {
  try {
    return await client.getRecordById(tableIdOrName, recId);
  } catch (err) {
    if (err.message.indexOf("Record not found") >= 0) {
      return null;
    }
    throw err;
  }
}

export async function cleanUp(
  client: IClient,
  tableIdOrName: string,
  suppressErrors: boolean
) {
  try {
    const records = await client.listRecords(tableIdOrName);
    const ids = records.map((r) => r.id);
    if (ids.length === 0) {
      return;
    }
    await client.deleteRecords(tableIdOrName, ids);
  } catch (err) {
    if (!suppressErrors) {
      throw err;
    }
  }
}
