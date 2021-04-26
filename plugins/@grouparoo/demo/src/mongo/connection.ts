import { MongoClient } from "mongodb";
import { log } from "../util/shared";
import Connection from "../util/connection";

const TYPES = {
  users: {
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
          avatar: {
            bsonType: "string",
          },
          language: {
            bsonType: "string",
          },
          deactivated: {
            bsonType: "bool",
          },
          created_at: {
            bsonType: "date",
          },
          updated_at: {
            bsonType: "date",
          },
        },
      },
    },
  },
  purchases: {
    validationLevel: "off",
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["user_id"],
        properties: {
          id: {
            bsonType: "int",
          },
          user_id: {
            bsonType: "int",
          },
          item: {
            bsonType: "int",
          },
          category: {
            bsonType: "string",
          },
          price: {
            bsonType: "double",
          },
          state: {
            bsonType: "string",
          },
          created_at: {
            bsonType: "date",
          },
        },
      },
    },
  },
};

function findConfig() {
  let uri = process.env.DEMO_MONGO_URI;
  let database = process.env.DEMO_MONGO_DATABASE_NAME;
  if (!uri) {
    uri = "mongodb://localhost:27017";
  }
  if (!database) {
    database = "demo";
  }
  return { uri, database };
}

function castRow(
  collectionName,
  row
): { [key: string]: string | number | Date } {
  const keys = Object.keys(row);
  for (const key of keys) {
    row[key] = castValue(collectionName, key, row[key]);
  }
  return row;
}

function castValue(
  collectionName,
  field,
  value
): string | number | boolean | Date {
  if (value === null || value === undefined) {
    return null;
  }
  const type = TYPES[collectionName]?.validator?.$jsonSchema?.properties[field];
  if (!type) {
    throw new Error(
      `The jsonSchema is required for the proper data insertion.`
    );
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
      throw new Error(`The type ${type.bsonType} is not supported.`);
  }
}

export default class Mongo extends Connection {
  conn: { client: MongoClient; db: any };
  config: { [key: string]: any };
  constructor() {
    super();
    this.config = findConfig();
    this.conn = null;
  }

  getAppOptions() {
    return Object.assign({}, this.config);
  }

  async disconnect() {
    if (this.conn) {
      await this.conn.client.close();
      this.conn = null;
    }
  }
  async connect() {
    if (this.conn) {
      return this.conn;
    }

    const client = await new MongoClient(this.config.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).connect();
    const db = client.db(this.config.database);
    this.conn = { client, db };
    return this.conn;
  }

  async createTable(tableName: string, userId: string, keys: string[]) {
    const collectionName = tableName;
    const typeData = TYPES[collectionName];
    if (!typeData) {
      throw new Error(`Unknown tableName: ${tableName} (${collectionName})`);
    }

    const { db } = await this.connect();
    try {
      log(1, `Dropping collection ${collectionName}`);
      await db.collection(collectionName).drop();
    } catch (err) {
      // ignores in case the collection doesn't exist.
    }

    log(1, `Creating collection ${collectionName}`);
    await db.createCollection(collectionName, typeData);
  }

  async insertRow(
    tableName: string,
    keys: string[],
    row: { [key: string]: string | number | Date }
  ) {
    const collectionName = tableName;
    const { db } = await this.connect();
    const doc = castRow(collectionName, row);

    log(2, `Inserting ${tableName}: ${JSON.stringify(doc)}`);
    await db.collection(collectionName).insertOne(doc);
  }
}
