import {
  DestinationOptionsMethodResponse,
  SimpleAppOptions,
  SimpleDestinationOptions,
} from "@grouparoo/core";
import { connect } from "../connect";
import { describeObject } from "../objects";

export interface WhichOptions {
  profile?: boolean;
  group?: boolean;
  membership?: boolean;
}
interface SalesforceDestinationOptions {
  (argument: {
    appOptions: SimpleAppOptions;
    destinationOptions: SimpleDestinationOptions;
    which: WhichOptions;
  }): Promise<DestinationOptionsMethodResponse>;
}
export const getDestinationOptions: SalesforceDestinationOptions = async ({
  appOptions,
  destinationOptions,
  which,
}) => {
  const out: DestinationOptionsMethodResponse = {};

  const conn = await connect(appOptions);
  if (which.profile) {
    Object.assign(out, await getProfileOptions(conn, destinationOptions));
  }
  if (which.group) {
    Object.assign(out, await getGroupOptions(conn, destinationOptions));
  }
  if (which.membership) {
    Object.assign(out, await getMembershipOptions(conn, destinationOptions));
  }

  return out;
};

async function getProfileOptions(
  conn: any,
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

  const name = destinationOptions.profileObject;
  if (name && objects.includes(name)) {
    // look up its fields
    const fields = await getObjectMatchNames(conn, name, true, specialFields);
    out.profileMatchField.type = "typeahead";
    out.profileMatchField.options = fields;
  }

  return out;
}

async function getGroupOptions(
  conn: any,
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

  const name = destinationOptions.groupObject;
  if (name && objects.includes(name)) {
    // look up its fields
    const fields = await getObjectMatchNames(conn, name, false, specialFields, [
      "string",
    ]);
    out.groupNameField.type = "typeahead";
    out.groupNameField.options = fields;
  }

  return out;
}

async function getMembershipOptions(
  conn: any,
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
    // TODO: lots of tag ones here
  ];
  const specialFields = [];

  const objects = await getObjectNames(conn, specialObjects, false);
  out.membershipObject.options = objects;

  const name = destinationOptions.membershipObject;
  if (name && objects.includes(name)) {
    // look up its fields
    const fields = await getObjectMatchNames(conn, name, false, specialFields, [
      "reference",
    ]);
    out.membershipProfileField.type = "typeahead";
    out.membershipProfileField.options = fields;

    out.membershipGroupField.type = "typeahead";
    out.membershipGroupField.options = fields;
  }
  return out;
}

async function getObjectMatchNames(
  conn: any,
  objectName: string,
  updateable: boolean,
  special: string[] = [],
  types: string[] = null
) {
  const names = {};
  const first = [];
  const response = await describeObject(conn, objectName, true);
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
    if (field.idLookup || field.externalId) {
      first.push(field.name);
    }
    names[field.name] = true;
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
