import {
  Errors,
  ErrorWithProfileId,
  ProcessExportedProfilesPluginMethod,
} from "@grouparoo/core";
import EloquaClient from "../client/client";
import { connect } from "../connect";

import { getListId, getContact, invalidate } from "./cachedMethods";
import { GrouparooCLI } from "@grouparoo/core/dist/modules/cli";
import error = GrouparooCLI.logger.error;
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
    if (sync) {
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
      } else if (sync.status === "pending") {
        return {
          success: true,
          processExports: {
            profileIds: _exports.map((e) => e.profileId),
            remoteKey,
            processDelay: 1000,
          },
        };
      } else if (sync.status === "success" || sync.status === "warning") {
        let success = true;
        const errors = [];
        if (sync.status === "warning") {
          const rejectsResponse = await client.bulk.getSyncRejects(remoteKey);
          for (const item of rejectsResponse.items) {
            const rejected = <ErrorWithProfileId>new Error(item["message"]);
            rejected.profileId = getContactProfileId({
              email: item["fieldValues"].emailAddress,
              exports: _exports,
            });
            rejected.errorLevel = "info";
            errors.push(rejected);
            success = false;
          }
        }
        await postFKChange({
          syncOperations,
          appId,
          exports: _exports,
          errors,
        });
        await handleLists({ appId, appOptions, exports: _exports, errors });
        return {
          success,
          errors,
        };
      } else {
        return {
          success: true,
        };
      }
    } else {
      return {
        success: true,
        processExports: {
          profileIds: _exports.map((e) => e.profileId),
          remoteKey,
          processDelay: 1000,
        },
      };
    }
  };

async function postFKChange({
  syncOperations,
  appId,
  exports: _exports,
  errors,
}) {
  for (const contact of _exports) {
    if (errors.find((error) => error.profileId === contact.profileId)) {
      continue;
    }
    let newValue = contact.newProfileProperties.emailAddress;
    let oldValue = contact.oldProfileProperties.emailAddress;
    newValue = newValue.toString().toLowerCase().trim();
    if (oldValue) {
      oldValue = oldValue.toString().toLowerCase().trim();
    }
    if (oldValue) {
      oldValue = oldValue.toString();
      if (newValue !== oldValue && oldValue.length > 0) {
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

async function handleLists({ appId, appOptions, exports: _exports, errors }) {
  let listsToUpdate = {};

  for (const contact of _exports) {
    if (errors.find((error) => error.profileId === contact.profileId)) {
      continue;
    }
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

function getContactProfileId({ email, exports: _exports }): string {
  // look for profile by id on newProfileProperties;
  for (const profile of _exports) {
    if (profile.newProfileProperties.emailAddress === email) {
      return profile.profileId;
    }
  }
  // look for profile by id on oldProfileProperties;
  for (const profile of _exports) {
    if (profile.oldProfileProperties.emailAddress === email) {
      return profile.profileId;
    }
  }
  return null;
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
