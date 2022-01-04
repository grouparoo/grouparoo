import { VeroClient } from "../client";

export async function handleGroupChanges(
  client: VeroClient,
  oldGroups: Array<string>,
  newGroups: Array<string>,
  newRecordProperties: { [p: string]: any }
) {
  const groupsToRemove = oldGroups.filter(
    (groupName) => !newGroups.includes(groupName)
  );

  await client.updateUserTags(
    newRecordProperties["id"],
    newGroups.map((groupName) => `In Group: ${groupName}`),
    groupsToRemove.map((groupName) => `In Group: ${groupName}`)
  );
}
