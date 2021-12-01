import {
  DestinationOptionsMethodResponse,
  SimpleAppOptions,
  SimpleDestinationOptions,
} from "@grouparoo/core";
import { connect } from "../connect";
import { describeObject, SalesforceCacheData } from "../objects";
import { getSupportedSalesforceTypes } from "../export/mapping";

export interface WhichOptions {
  record?: boolean;
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

  const conn = await connect(appOptions);
  if (which.record) {
    Object.assign(
      out,
      await getRecordOptions(conn, cacheData, destinationOptions)
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

async function getRecordOptions(
  conn: any,
  cacheData: SalesforceCacheData,
  destinationOptions: SimpleDestinationOptions
) {
  const out: DestinationOptionsMethodResponse = {
    recordObject: { type: "typeahead", options: [] },
    recordMatchField: { type: "pending", options: [] },
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
  out.recordObject.options = objects;

  const name = destinationOptions.recordObject?.toString();
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
    out.recordMatchField.type = "typeahead";
    out.recordMatchField.options = fields;
    if (!fields.includes(destinationOptions.recordMatchField)) {
      destinationOptions.recordMatchField = null;
    }
  } else {
    destinationOptions.recordObject = null;
    destinationOptions.recordMatchField = null;
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
    membershipRecordField: { type: "pending", options: [] },
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
    out.membershipRecordField.type = "typeahead";
    out.membershipRecordField.options = fields;
    if (!fields.includes(destinationOptions.membershipRecordField)) {
      destinationOptions.membershipRecordField = null;
    }

    out.membershipGroupField.type = "typeahead";
    out.membershipGroupField.options = fields;
    if (!fields.includes(destinationOptions.membershipGroupField)) {
      destinationOptions.membershipGroupField = null;
    }
  } else {
    destinationOptions.membershipObject = null;
    destinationOptions.membershipRecordField = null;
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
    recordReferenceField: { type: "pending", options: [] },
    recordReferenceObject: { type: "pending", options: [] },
    recordReferenceMatchField: { type: "pending", options: [] },
  };
  const recordObject = destinationOptions.recordObject?.toString();
  if (!recordObject) return out;

  // for Account, other?
  const specialFields = ["AccountNumber", "Name"];

  const nameMap = await buildFieldMap(conn, cacheData, recordObject, true, [
    "reference",
  ]);

  out.recordReferenceField.type = "typeahead";
  out.recordReferenceField.options = Object.keys(nameMap);

  const fieldName = destinationOptions.recordReferenceField?.toString();
  if (fieldName && nameMap[fieldName]) {
    const field = nameMap[fieldName];
    const relationshipObjects = field.referenceTo;

    out.recordReferenceObject.type = "typeahead";
    out.recordReferenceObject.options = relationshipObjects;

    const refName = destinationOptions.recordReferenceObject?.toString();
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

      out.recordReferenceMatchField.type = "typeahead";
      out.recordReferenceMatchField.options = refFields;
      if (!refFields.includes(destinationOptions.recordReferenceMatchField)) {
        destinationOptions.recordReferenceMatchField = null;
      }
    } else {
      destinationOptions.recordReferenceObject = null;
      destinationOptions.recordReferenceMatchField = null;
    }
  } else {
    destinationOptions.recordReferenceField = null;
    destinationOptions.recordReferenceObject = null;
    destinationOptions.recordReferenceMatchField = null;
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

export async function getObjectMatchNames(
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
