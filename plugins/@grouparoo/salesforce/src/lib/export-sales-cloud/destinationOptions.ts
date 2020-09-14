import {
  DestinationOptionsMethod,
  DestinationOptionsMethodResponse,
} from "@grouparoo/core";
import { connect } from "../connect";

export const destinationOptions: DestinationOptionsMethod = async ({
  appOptions,
  destinationOptions,
}) => {
  const out: DestinationOptionsMethodResponse = {
    profileObject: { type: "typeahead", options: [] },
    profileFieldMatch: { type: "pending", options: [] },
  };

  const conn = await connect(appOptions);
  const objectNames = await getProfileObjectNames(conn);
  out.profileObject.options = objectNames;

  if (destinationOptions.profileObject) {
    // look up its fields
    const fields = await getProfileMatchNames(
      conn,
      destinationOptions.profileObject
    );
    out.profileFieldMatch.type = "list";
    out.profileFieldMatch.options = fields;
  }

  return out;
};

async function getProfileMatchNames(conn, objectName) {
  const out = [];
  const response = await conn.sobject(objectName).describe();
  for (const field of response.fields) {
    // TODO: might want field.createable and field.updateable checks here
    // basically do that if 'Id' doesn't work.
    if (field.idLookup) {
      out.push(field.name);
    }
  }
  return out;
}

async function getProfileObjectNames(conn) {
  const out = [];
  const objects = {};
  const response = await conn.describeGlobal();

  for (const object of response.sobjects) {
    if (!object.createable) {
      continue;
    }
    if (!object.updateable) {
      continue;
    }
    if (!object.deletable) {
      continue;
    }
    if (!object.queryable) {
      continue;
    }

    objects[object.name] = object;
  }

  const special = [
    "Contact",
    "Lead",
    "Individual",
    "Name",
    "NetworkMember",
    "MessagingEndUser",
    "Account",
  ];

  for (const name of special) {
    const object = objects[name];
    if (!object) {
      continue;
    }
    out.push(name);
  }
  const names = Object.keys(objects).sort();
  for (const name of names) {
    if (special.includes(name)) {
      continue;
    }
    out.push(name);
  }
  return out;
}
