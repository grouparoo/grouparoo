import { Errors, ProcessExportedProfilesPluginMethod } from "@grouparoo/core";
import EloquaClient from "../client/client";
import { connect } from "../connect";

import { getListId, getContact, invalidate } from "./cachedMethods";
let client: EloquaClient;

export const processExportedProfiles: ProcessExportedProfilesPluginMethod =
  async ({
    appId,
    appOptions,
    remoteKey,
    exports: _exports,
    syncOperations,
  }) => {
    client = await connect(appOptions);
    const sync = await client.bulk.checkSync(remoteKey);
    if (sync.status === "error") {
      const logsResponse = await client.bulk.getSyncLogs(remoteKey);
      let errorsMessages = [];
      if (logsResponse.items.length > 0) {
        for (const log of logsResponse.items) {
          if (log["severity"] === "error") {
            errorsMessages.push(log["message"]);
          }
        }
      }
      throw new Error(
        `Something went wrong. Here are the possible causes: ${errorsMessages.join(
          " - "
        )}`
      );
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
      await postFKChange({ syncOperations, appId, exports: _exports });
      await handleLists(appId, appOptions, _exports);
      return {
        success: true,
      };
    }
  };

async function postFKChange({ syncOperations, appId, exports: _exports }) {
  let exportsToDelete = [];
  for (const contact of _exports) {
    let newValue = contact.newProfileProperties.emailAddress;
    let oldValue = contact.oldProfileProperties.emailAddress;
    newValue = newValue.toString().toLowerCase().trim();
    if (oldValue) {
      oldValue = oldValue.toString().toLowerCase().trim();
    }
    if (oldValue) {
      oldValue = oldValue.toString();
      if (newValue !== oldValue && oldValue.length > 0) {
        exportsToDelete.push(contact);
        if (syncOperations.delete) {
          const user = await client.contacts.getByEmail(oldValue);
          if (user) {
            await client.contacts.delete(user["id"]);
            await invalidate(appId);
          }
        }
      }
    }
  }
}

async function handleLists(appId, appOptions, _exports) {
  let listsToUpdate = {};

  for (const contact of _exports) {
    // add to lists
    for (const listName of contact.newGroups) {
      const listId = await getListId(client, listName, appId, appOptions, true);
      listsToUpdate = await getListUpdatePayload({
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
        listsToUpdate = await getListUpdatePayload({
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

async function getListUpdatePayload({
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
