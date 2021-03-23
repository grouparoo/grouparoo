import { connect } from "../../src/lib/connect";
import path from "path";
import fs from "fs";
import { DataResponse } from "@grouparoo/app-templates/dist/source/shared/types";
import dotenv from "dotenv";
import { SimpleAppOptions } from "@grouparoo/core";

export const usersCollectionName = `users_${process.env.JEST_WORKER_ID || 1}`;
export const purchasesCollectionName = `purchases_${
  process.env.JEST_WORKER_ID || 1
}`;
export const locationsCollectionName = `locations_${
  process.env.JEST_WORKER_ID || 1
}`;

const appId = "app_7818903039-mongodbj90-90-3k";

const dirPath = path.resolve(path.join(__dirname, ".."));
const defaultPath = path.join(dirPath, ".env.example");
const realPath = path.join(dirPath, ".env");

function readEnv(filePath) {
  return dotenv.parse(fs.readFileSync(filePath));
}
export function loadAppOptions(): SimpleAppOptions {
  let envFile;
  if (fs.existsSync(realPath)) {
    envFile = realPath;
  } else {
    envFile = defaultPath;
  }
  const parsed = readEnv(envFile);
  return {
    uri: parsed.MONGO_URI,
    database: parsed.MONGO_DATABASE_NAME,
  };
}

export const appOptions = loadAppOptions();

export const sourceOptions = {
  fields: "name,createdAt",
};

const allCollections = [
  usersCollectionName,
  purchasesCollectionName,
  locationsCollectionName,
];

const collectionsOptions = {
  [usersCollectionName]: {
    validationLevel: "off",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["id"],
        properties: {
          id: {
            bsonType: "int",
          },
          first_name: {
            bsonType: "string",
          },
          last_name: {
            bsonType: "string",
          },
          email: {
            bsonType: "string",
          },
          gender: {
            bsonType: "string",
          },
          ip_address: {
            bsonType: "string",
          },
          ios_app: {
            bsonType: "bool",
          },
          android_app: {
            bsonType: "bool",
          },
          vip: {
            bsonType: "bool",
          },
          ltv: {
            bsonType: "double",
          },
          date: {
            bsonType: "date",
          },
          stamp: {
            bsonType: "date",
          },
        },
      },
    },
  },
  [purchasesCollectionName]: {
    validationLevel: "off",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["profile_id"],
        properties: {
          id: {
            bsonType: "int",
          },
          profile_id: {
            bsonType: "int",
          },
          purchase: {
            bsonType: "string",
          },
          amount: {
            bsonType: "double",
          },
          date: {
            bsonType: "date",
          },
          stamp: {
            bsonType: "date",
          },
        },
      },
    },
  },
  [locationsCollectionName]: {
    validationLevel: "off",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["profile_id"],
        properties: {
          id: {
            bsonType: "string",
          },
          type: {
            bsonType: "string",
          },
          properties: {
            bsonType: "object",
          },
          geometry: {
            bsonType: "object",
          },
        },
      },
    },
  },
};

let client;

export async function getClient() {
  if (client) {
    return client;
  }
  client = await connect({
    appOptions,
    app: null,
    appId,
  });
  return client;
}

export async function endClient() {
  if (client) {
    await client.client.close();
    client = null;
  }
}

export function getConfig() {
  return {
    appOptions,
    sourceOptions,
    appId,
    usersTableName: usersCollectionName,
    purchasesTableName: purchasesCollectionName,
    locationsTableName: locationsCollectionName,
  };
}

async function dropTables() {
  for (const collectionName of allCollections) {
    try {
      await client.db.collection(collectionName).drop();
    } catch (err) {
      // ignores in case the collection doesn't exist.
    }
  }
}

async function createTables() {
  await dropTables();
  for (const tableName of allCollections) {
    await client.db.createCollection(tableName, collectionsOptions[tableName]);
  }
}

async function fillTable(collectionName, fileName) {
  const filePath = path.resolve(path.join(__dirname, "..", "data", fileName));
  const rows = fs.readFileSync(filePath, { encoding: "utf8", flag: "r" });
  const docs = parseCsvToObject(rows, collectionName);
  for (const doc of docs) {
    try {
      await client.db.collection(collectionName).insertOne(doc);
    } catch (err) {
      console.log(err);
    }
  }
}

async function fillTableJson(collectionName, fileName) {
  const filePath = path.resolve(path.join(__dirname, "..", "data", fileName));
  const file = fs.readFileSync(filePath, { encoding: "utf8", flag: "r" });
  const locations = JSON.parse(file);
  for (const doc of locations) {
    try {
      doc.properties.updated = new Date(doc.properties.updated);
      await client.db.collection(collectionName).insertOne(doc);
    } catch (err) {
      console.log(err);
    }
  }
}

export async function populate() {
  await createTables();
  await fillTable(usersCollectionName, "profiles.csv");
  await fillTable(purchasesCollectionName, "purchases.csv");
  await fillTableJson(locationsCollectionName, "locations.json");
}

function parseCsvToObject(csv, collectionName) {
  const lines = csv.split("\n");
  const result = [];
  const headers = lines[0].split(",");
  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    if (String(lines[i]).trim() !== "") {
      const currentLine = lines[i].split(",");
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = castValue(collectionName, headers[j], currentLine[j]);
      }
      result.push(obj);
    }
  }
  return result; //JSON
}

export function castValue(collectionName, field, value): DataResponse {
  if (value === null || value === undefined) {
    return null;
  }

  const type =
    collectionsOptions[collectionName]?.validator?.$jsonSchema?.properties[
      field
    ];

  if (!type) {
    return null;
  }

  switch (type.bsonType) {
    case "string":
      return value;
    case "bool":
      return value === "true";
    case "int":
      return parseInt(value);
    case "double":
      return parseFloat(value);
    case "date":
      return new Date(value);
    case "timestamp":
      return new Date(value).toISOString();
    default:
      return null;
  }
}

export async function beforeData(): Promise<{
  client: any;
}> {
  await getClient();
  await populate();
  return { client };
}

export async function afterData() {
  await dropTables();
  await endClient();
}
