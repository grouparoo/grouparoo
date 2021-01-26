import { ExportProfilePluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { addToList, removeFromList } from "./listMethods";

export const exportProfile: ExportProfilePluginMethod = async ({
  appGuid,
  appOptions,
  export: {
    toDelete,
    newProfileProperties,
    oldProfileProperties,
    newGroups,
    oldGroups,
  },
}) => {
  // if we received no mapped data... just exit
  if (Object.keys(newProfileProperties).length === 0) {
    return { success: true };
  }
  const client = await connect(appOptions);

  const email = newProfileProperties["email"]; // this is how we will identify profiles
  if (!email) {
    throw new Error(`newProfileProperties[email] is a required mapping`);
  }

  try {
    let user;
    try {
      user = await client.users.get({ email });
    } catch (error) {
      if (!error.toString().match(/Request failed with status code 404/)) {
        throw error;
      }
    }
    if (toDelete) {
      if (user) {
        await client.users.delete(user.email);
      }
    } else {
      // create the user and set properties
      const deletePropertiesPayload = {};
      const newPropertyKeys = Object.keys(newProfileProperties);
      Object.keys(oldProfileProperties)
        .filter((k) => !newPropertyKeys.includes(k))
        .forEach((k) => (deletePropertiesPayload[k] = ""));

      const dataFields = Object.assign(
        newProfileProperties,
        deletePropertiesPayload
      );
      const payload = Object.assign({ email }, { dataFields });
      await client.users.update(payload);

      // // add to lists
      // for (const i in newGroups) {
      //   const group = newGroups[i];
      //   await addToList(appGuid, appOptions, email, group);
      // }
      //
      // // remove from lists
      // for (const i in oldGroups) {
      //   const group = oldGroups[i];
      //   if (!newGroups.includes(group))
      //     await removeFromList(appGuid, appOptions, email, group);
      // }
    }

    return { success: true };
  } catch (error) {
    if (error?.response?.status === 429) {
      return { error, success: false, retryDelay: 1000 * 11 }; // the most common rate-limit error from hubspot is in 10-second intervals
    } else {
      throw error;
    }
  }
};
