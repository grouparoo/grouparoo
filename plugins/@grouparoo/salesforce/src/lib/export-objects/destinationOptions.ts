import {
  DestinationOptionsMethod,
  DestinationOptionsMethodResponse,
} from "@grouparoo/core";
import { connect } from "../connect";
import { describeObject } from "../objects";

export const destinationOptions: DestinationOptionsMethod = async ({
  appOptions,
  destinationOptions,
}) => {
  const out: DestinationOptionsMethodResponse = {
    profileObject: { type: "typeahead", options: [] },
    profileMatchField: { type: "pending", options: [] },
    groupObject: { type: "typeahead", options: [] },
    groupNameField: { type: "pending", options: [] },
    membershipObject: { type: "typeahead", options: [] },
    membershipProfileField: { type: "pending", options: [] },
    membershipGroupField: { type: "pending", options: [] },
  };

  const conn = await connect(appOptions);
  const objectNames = await getProfileObjectNames(conn);
  out.profileObject.options = objectNames;

  const objectName = destinationOptions.profileObject;
  if (objectName && objectNames.includes(objectName)) {
    // look up its fields
    const fields = await getProfileMatchNames(conn, objectName);
    out.profileMatchField.type = "typeahead";
    out.profileMatchField.options = fields;
  }

  const groupNames = await getGroupObjectNames(conn);
  out.groupObject.options = groupNames;

  const groupName = destinationOptions.groupObject;
  if (groupName && groupNames.includes(groupName)) {
    // look up its fields
    const fields = await getGroupMatchNames(conn, groupName);
    out.groupNameField.type = "typeahead";
    out.groupNameField.options = fields;
  }

  const membershipNames = await getMembershipObjectNames(conn);
  out.membershipObject.options = membershipNames;

  const membershipName = destinationOptions.membershipObject;
  if (membershipName && membershipNames.includes(membershipName)) {
    // look up its fields
    const fields = await getMembershipMatchNames(conn, membershipName);
    out.membershipProfileField.type = "typeahead";
    out.membershipProfileField.options = fields;

    out.membershipGroupField.type = "typeahead";
    out.membershipGroupField.options = fields;
  }

  return out;
};

async function getProfileObjectNames(conn) {
  const special = [
    "Contact",
    "Lead",
    "Individual",
    "Name",
    "NetworkMember",
    "MessagingEndUser",
    "Account",
  ];
  return getObjectNames(conn, special, true);
}
async function getProfileMatchNames(conn, objectName) {
  const special = ["Email"];
  return getObjectMatchNames(conn, objectName, true, special);
}

async function getGroupObjectNames(conn) {
  const special = ["GrouparooGroup", "Campaign", "Topic", "TagDefinition"];
  return getObjectNames(conn, special, false);
}
async function getGroupMatchNames(conn, objectName) {
  // looking for a name field
  const special = ["Name"];
  return getObjectMatchNames(conn, objectName, false, special, ["string"]);
}

async function getMembershipObjectNames(conn) {
  const special = [
    "GrouparooGroupMember",
    "CampaignMember",
    "TagDefinition",
    "TopicAssignment",
  ];
  return getObjectNames(conn, special, false);
}
async function getMembershipMatchNames(conn, objectName) {
  // looking for a name field
  const special = [];
  return getObjectMatchNames(conn, objectName, false, special, ["reference"]);
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
  console.log("DESCRIBE", objectName, response);
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
