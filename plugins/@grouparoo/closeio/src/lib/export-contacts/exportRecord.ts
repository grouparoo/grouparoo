import { Errors, ExportRecordPluginMethod } from "@grouparoo/core";
import { connect } from "../connect";
import { CloseioCacheData } from "../common/destinationMappingOptions";
import {
  getExportRecordWithErrorHandling,
  makePayload,
} from "../common/exportRecord";

export const exportContactRecord: ExportRecordPluginMethod = (arg) => {
  return getExportRecordWithErrorHandling(handleContactChanges)(arg);
};

const handleContactChanges: ExportRecordPluginMethod = async ({
  appId,
  appOptions,
  syncOperations,
  export: {
    newRecordProperties,
    oldRecordProperties,
    newGroups,
    oldGroups,
    toDelete,
  },
}) => {
  if (Object.keys(newRecordProperties).length === 0) {
    return { success: true };
  }

  if (!newRecordProperties["Email"]) {
    throw new Error(`newRecordProperties[Email] is a required mapping`);
  }

  if (!newRecordProperties["Lead"]) {
    throw new Error(`newRecordProperties[Lead] is a required mapping`);
  }

  const client = await connect(appOptions);
  const cacheData: CloseioCacheData = { appId, appOptions };

  const newEmail = newRecordProperties["Email"];
  const oldEmail = oldRecordProperties["Email"];

  const newFoundId = await client.findContactIdByEmail(newEmail);

  let oldFoundId = null;
  if (oldEmail && oldEmail !== newEmail) {
    oldFoundId = await client.findContactIdByEmail(oldEmail);
  }

  const foundId = newFoundId || oldFoundId;
  if (toDelete) {
    if (!syncOperations.delete) {
      throw new Errors.InfoError(
        "Destination sync mode does not delete records."
      );
    }

    if (foundId) {
      await client.closeio.contact.delete(foundId);
    }

    return { success: true };
  }

  if (
    foundId &&
    oldEmail == newEmail &&
    oldRecordProperties["Lead"] !== newRecordProperties["Lead"]
  ) {
    throw new Errors.InfoError("Can not change the lead once it is set.");
  }

  const payload = await makePayload(
    client,
    "contact",
    cacheData,
    oldRecordProperties,
    newRecordProperties,
    oldGroups,
    newGroups
  );

  if (payload["lead_id"]) {
    if (foundId) {
      payload["lead_id"] = undefined;
    } else {
      const leadName = payload["lead_id"];

      const leadId = await client.findLeadIdByName(leadName);
      if (leadId) {
        payload["lead_id"] = leadId;
      } else {
        if (!syncOperations.create) {
          throw new Errors.InfoError(
            "Destination sync mode does not create new records."
          );
        }

        const lead = await client.closeio.lead.create({
          name: leadName,
        });
        payload["lead_id"] = lead.id;
      }
    }
  }

  if (foundId) {
    // Update existing Contact
    if (!syncOperations.update) {
      throw new Errors.InfoError(
        "Destination sync mode does not update existing records."
      );
    }

    await client.closeio.contact.update(foundId, payload);
  } else {
    if (!syncOperations.create) {
      throw new Errors.InfoError(
        "Destination sync mode does not create new records."
      );
    }

    // Create new Contact
    await client.closeio.contact.create(payload);
  }

  return { success: true };
};
