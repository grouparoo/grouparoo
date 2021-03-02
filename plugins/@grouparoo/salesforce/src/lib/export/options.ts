import {
  DestinationOptionsMethodResponse,
  SimpleAppOptions,
  SimpleDestinationOptions,
} from "@grouparoo/core";
import { connect } from "../connect";
import { describeObject, SalesforceCacheData } from "../objects";
import { getSupportedSalesforceTypes } from "./mapping";
import { BatchSyncModeData } from "@grouparoo/app-templates/dist/destination/batch";

export interface WhichOptions {
  profile?: boolean;
  group?: boolean;
  membership?: boolean;
  reference?: boolean;
}
interface SalesforceDestinationOptions {
  (argument: {
    appId: string;
    appOptions: SimpleAppOptions;
    destinationOptions: SimpleDestinationOptions;
    which: WhichOptions;
  }): Promise<DestinationOptionsMethodResponse>;
}
export const getDestinationOptions: SalesforceDestinationOptions = async ({
  appId,
  appOptions,
  destinationOptions,
  which,
}) => {
  const cacheData: SalesforceCacheData = { appId, appOptions };
  const out: DestinationOptionsMethodResponse = {};

  Object.assign(out, getSyncModes());

  const conn = await connect(appOptions);
  if (which.profile) {
    Object.assign(
      out,
      await getProfileOptions(conn, cacheData, destinationOptions)
    );
  }
  if (which.group) {
    Object.assign(
      out,
      await getGroupOptions(conn, cacheData, destinationOptions)
    );
  }
  if (which.membership) {
    Object.assign(
      out,
      await getMembershipOptions(conn, cacheData, destinationOptions)
    );
  }
  if (which.reference) {
    Object.assign(
      out,
      await getReferenceOptions(conn, cacheData, destinationOptions)
    );
  }
  return out;
};

function getSyncModes() {
  const out: DestinationOptionsMethodResponse = {
    syncMode: { type: "list", options: [], descriptions: [] },
  };

  for (const mode in BatchSyncModeData) {
    out.syncMode.options.push(mode);
    out.syncMode.descriptions.push(BatchSyncModeData[mode].description);
  }

  return out;
}

async function getProfileOptions(
  conn: any,
  cacheData: SalesforceCacheData,
  destinationOptions: SimpleDestinationOptions
) {
  const out: DestinationOptionsMethodResponse = {
    profileObject: { type: "typeahead", options: [] },
    profileMatchField: { type: "pending", options: [] },
  };

  const specialObjects = [
    "Contact",
    "Lead",
    "Individual",
    "Name",
    "NetworkMember",
    "MessagingEndUser",
    "Account",
  ];
  const specialFields = ["Email"];

  const objects = await getObjectNames(conn, specialObjects, true);
  out.profileObject.options = objects;

  const name = destinationOptions.profileObject?.toString();
  if (name && objects.includes(name)) {
    // look up its fields
    const supportedTypes = getSupportedSalesforceTypes();
    const fields = await getObjectMatchNames(
      conn,
      cacheData,
      name,
      true,
      specialFields,
      supportedTypes
    );
    out.profileMatchField.type = "typeahead";
    out.profileMatchField.options = fields;
    if (!fields.includes(destinationOptions.profileMatchField)) {
      destinationOptions.profileMatchField = null;
    }
  } else {
    destinationOptions.profileObject = null;
    destinationOptions.profileMatchField = null;
  }

  return out;
}

async function getGroupOptions(
  conn: any,
  cacheData: SalesforceCacheData,
  destinationOptions: SimpleDestinationOptions
) {
  const out: DestinationOptionsMethodResponse = {
    groupObject: { type: "typeahead", options: [] },
    groupNameField: { type: "pending", options: [] },
  };

  const specialObjects = [
    "GrouparooGroup",
    "Campaign",
    "Topic",
    "TagDefinition",
  ];
  const specialFields = ["Name"];

  const objects = await getObjectNames(conn, specialObjects, false);
  out.groupObject.options = objects;

  const name = destinationOptions.groupObject?.toString();
  if (name && objects.includes(name)) {
    // look up its fields
    const supportedTypes = getSupportedSalesforceTypes(["string"]);
    const fields = await getObjectMatchNames(
      conn,
      cacheData,
      name,
      false,
      specialFields,
      supportedTypes
    );
    out.groupNameField.type = "typeahead";
    out.groupNameField.options = fields;
    if (!fields.includes(destinationOptions.groupNameField)) {
      destinationOptions.groupNameField = null;
    }
  } else {
    destinationOptions.groupObject = null;
    destinationOptions.groupNameField = null;
  }

  return out;
}

async function getMembershipOptions(
  conn: any,
  cacheData: SalesforceCacheData,
  destinationOptions: SimpleDestinationOptions
) {
  const out: DestinationOptionsMethodResponse = {
    membershipObject: { type: "typeahead", options: [] },
    membershipProfileField: { type: "pending", options: [] },
    membershipGroupField: { type: "pending", options: [] },
  };

  const specialObjects = [
    "GrouparooGroupMember",
    "CampaignMember",
    "TopicAssignment",
    "AccountTag",
    "AssetTag",
    "CampaignTag",
    "CaseTag",
    "ContactTag",
    "ContractTag",
    "DocumentTag",
    "EventTag",
    "LeadTag",
    "NoteTag",
    "OpportunityTag",
    "SolutionTag",
    "TaskTag",
  ];
  const specialFields = [];

  const objects = await getObjectNames(conn, specialObjects, false);
  out.membershipObject.options = objects;

  const name = destinationOptions.membershipObject?.toString();
  if (name && objects.includes(name)) {
    // look up its fields
    const fields = await getObjectMatchNames(
      conn,
      cacheData,
      name,
      false,
      specialFields,
      ["reference"]
    );
    out.membershipProfileField.type = "typeahead";
    out.membershipProfileField.options = fields;
    if (!fields.includes(destinationOptions.membershipProfileField)) {
      destinationOptions.membershipProfileField = null;
    }

    out.membershipGroupField.type = "typeahead";
    out.membershipGroupField.options = fields;
    if (!fields.includes(destinationOptions.membershipGroupField)) {
      destinationOptions.membershipGroupField = null;
    }
  } else {
    destinationOptions.membershipObject = null;
    destinationOptions.membershipProfileField = null;
    destinationOptions.membershipGroupField = null;
  }
  return out;
}

async function getReferenceOptions(
  conn: any,
  cacheData: SalesforceCacheData,
  destinationOptions: SimpleDestinationOptions
) {
  const out: DestinationOptionsMethodResponse = {
    profileReferenceField: { type: "pending", options: [] },
    profileReferenceObject: { type: "pending", options: [] },
    profileReferenceMatchField: { type: "pending", options: [] },
  };
  const profileObject = destinationOptions.profileObject?.toString();
  if (!profileObject) return out;

  // for Account, other?
  const specialFields = ["AccountNumber", "Name"];

  const nameMap = await buildFieldMap(conn, cacheData, profileObject, true, [
    "reference",
  ]);

  out.profileReferenceField.type = "typeahead";
  out.profileReferenceField.options = Object.keys(nameMap);

  const fieldName = destinationOptions.profileReferenceField?.toString();
  if (fieldName && nameMap[fieldName]) {
    const field = nameMap[fieldName];
    const relationshipObjects = field.referenceTo;

    out.profileReferenceObject.type = "typeahead";
    out.profileReferenceObject.options = relationshipObjects;

    const refName = destinationOptions.profileReferenceObject?.toString();
    if (refName && relationshipObjects.includes(refName)) {
      const supportedTypes = getSupportedSalesforceTypes();
      const refFields = await getObjectMatchNames(
        conn,
        cacheData,
        refName,
        true,
        specialFields,
        supportedTypes
      );

      out.profileReferenceMatchField.type = "typeahead";
      out.profileReferenceMatchField.options = refFields;
      if (!refFields.includes(destinationOptions.profileReferenceMatchField)) {
        destinationOptions.profileReferenceMatchField = null;
      }
    } else {
      destinationOptions.profileReferenceObject = null;
      destinationOptions.profileReferenceMatchField = null;
    }
  } else {
    destinationOptions.profileReferenceField = null;
    destinationOptions.profileReferenceObject = null;
    destinationOptions.profileReferenceMatchField = null;
  }

  return out;
}

async function buildFieldMap(
  conn: any,
  cacheData: SalesforceCacheData,
  objectName: string,
  updateable: boolean,
  types: string[] = null
): Promise<{ [name: string]: any }> {
  const names = {};
  const response = await describeObject(conn, cacheData, objectName, true);
  for (const field of response.fields) {
    if (!field.createable) {
      continue;
    }
    if (updateable && !field.updateable) {
      continue;
    }
    if (types && !types.includes(field.type)) {
      continue;
    }
    names[field.name] = field;
  }

  return names;
}

async function getObjectMatchNames(
  conn: any,
  cacheData: SalesforceCacheData,
  objectName: string,
  updateable: boolean,
  special: string[] = [],
  types: string[] = null
) {
  const names = await buildFieldMap(
    conn,
    cacheData,
    objectName,
    updateable,
    types
  );
  const first = [];
  for (const name in names) {
    const field = names[name];
    if (field.idLookup || field.externalId) {
      first.push(name);
    }
  }
  return uniqueArray(special, first, names);
}

async function getObjectNames(
  conn: any,
  special: string[] = [],
  updateable: boolean
) {
  const first = [];
  const names = {};
  const response = await conn.describeGlobal();

  for (const object of response.sobjects) {
    if (!object.createable) {
      continue;
    }
    if (updateable && !object.updateable) {
      continue;
    }
    if (!object.deletable) {
      continue;
    }
    if (!object.queryable) {
      continue;
    }

    names[object.name] = true;
  }
  return uniqueArray(special, first, names);
}

function uniqueArray(special, first, nameMap) {
  let out = [];
  for (const name of special) {
    if (nameMap[name]) {
      out.push(name);
    }
  }
  const all = out.concat(first).concat(Object.keys(nameMap).sort());
  return [...new Set(all)];
}
