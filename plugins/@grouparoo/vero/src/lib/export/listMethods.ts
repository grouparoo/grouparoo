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

  if (newGroups.length === 0 && groupsToRemove.length === 0) {
    return;
  }

  await client.updateUserTags(
    newRecordProperties["id"],
    newGroups,
    groupsToRemove
  );
}
