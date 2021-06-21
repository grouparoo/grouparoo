import { ProcessExportedProfilesPluginMethod } from "@grouparoo/core";
import EloquaClient from "../client/client";
import { connect } from "../connect";

import { getListId, getContact } from "./cachedMethods";
let client: EloquaClient;

export const processExportedProfiles: ProcessExportedProfilesPluginMethod =
  async ({ appId, appOptions, remoteKey, exports: _exports }) => {
    client = await connect(appOptions);
    const sync = await client.bulk.checkSync(remoteKey);

    if (sync.status === "error") {
      throw new Error("Something went wrong");
    }

    if (sync.status === "pending") {
      return {
        success: true,
        processExports: {
          profileIds: _exports.map((e) => e.profileId),
          remoteKey,
          processDelay: 1000,
        },
      };
    }

    if (sync.status === "success" || sync.status === "warning") {
      await handleLists(appId, appOptions, _exports);
      return {
        success: true,
      };
    }
  };

async function handleLists(appId, appOptions, _exports) {
  let listsToUpdate = {};

  for (const contact of _exports) {
    // add to lists
    for (const listName of contact.newGroups) {
      const listId = await getListId(client, listName, appId, appOptions, true);
      listsToUpdate = await treatListToUpdate({
        appId,
        appOptions,
        listsToUpdate,
        listId,
        listName,
        email: contact.newProfileProperties.emailAddress,
        isRemoving: false,
      });
    }
    // remove from lists
    for (const listName of contact.oldGroups) {
      if (!contact.newGroups.includes(listName)) {
        const listId = await getListId(
          client,
          listName,
          appId,
          appOptions,
          false
        );
        listsToUpdate = await treatListToUpdate({
          appId,
          appOptions,
          listsToUpdate,
          listId,
          listName,
          email: contact.newProfileProperties.emailAddress,
          isRemoving: true,
        });
      }
    }
  }
  for (const [listId, listToUpdate] of Object.entries(listsToUpdate)) {
    if (
      listToUpdate["membershipAdditions"].length > 0 ||
      listToUpdate["membershipDeletions"].length > 0
    ) {
      const response = await client.lists.update(
        parseInt(listId),
        listToUpdate
      );
    }
  }
}

async function treatListToUpdate({
  appId,
  appOptions,
  listsToUpdate,
  listId,
  listName,
  email,
  isRemoving = false,
}) {
  if (!listId) {
    return listsToUpdate;
  }
  if (!listsToUpdate[listId]) {
    listsToUpdate[listId] = {
      id: listId,
      name: listName,
      membershipAdditions: [],
      membershipDeletions: [],
    };
  }
  const addOrDeleteField = isRemoving
    ? "membershipDeletions"
    : "membershipAdditions";
  const contact = await getContact(client, email, appId, appOptions);
  if (contact) {
    listsToUpdate[listId][addOrDeleteField].push(contact.id);
  }
  return listsToUpdate;
}
