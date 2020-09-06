import Database from "./util/postgres";
import { log, init } from "./util/shared";
import { runAction } from "./util/runAction";
import { App, Source, ProfilePropertyRule } from "@grouparoo/core";
import { Op } from "sequelize";

export const SCHEMA_NAME = "demo";

const USERS = {
  id: "INT NOT NULL PRIMARY KEY",
  first_name: "VARCHAR(191) NOT NULL",
  last_name: "VARCHAR(191) NOT NULL",
  email: "VARCHAR(191) NOT NULL",
  gender: "VARCHAR(191)",
  ip_address: "VARCHAR(191)",
  avatar: "VARCHAR(191)",
  language: "VARCHAR(191)",
  deactivated: "BOOLEAN",
};

const PURCHASES = {
  id: "INT NOT NULL PRIMARY KEY",
  user_id: "INT NOT NULL",
  item: "VARCHAR(191) NOT NULL",
  category: "VARCHAR(191) NOT NULL",
  price: "DECIMAL",
  state: "VARCHAR(191)",
};

interface SampleDataOptions {
  source?: boolean;
}
export async function users(options: SampleDataOptions = {}) {
  await createCsvTable("users", "id", USERS, true, true, options);
}

export async function purchases(options: SampleDataOptions = {}) {
  await createCsvTable("purchases", "user_id", PURCHASES, true, false, options);
}

async function createCsvTable(
  tableName: string,
  userId: string,
  types: any,
  createdAt: boolean,
  updatedAt: boolean,
  options: SampleDataOptions
) {
  log(0, `Adding Sample Data: ${tableName}`);
  const db = new Database(SCHEMA_NAME);
  await db.connect();
  await db.createCsvTable(tableName, userId, types, createdAt, updatedAt);
  await db.disconnect();

  if (options.source) {
    const source = await createSource(tableName, userId);
  }
}

async function createSource(tableName: string, userId: string) {
  const app = await getApp();
  return getSource(app, tableName, userId);
}

async function findTableSource(app, tableName) {
  const where = {
    state: { [Op.not]: null },
    appGuid: app.guid,
    type: "postgres-table-import",
  };
  const sources = await Source.findAll({ where });
  console.log("sources", where, sources);
  for (const source of sources) {
    const options = await source.getOptions();
    console.log("options", options);
    if (options.table === tableName) {
      return source;
    }
  }
  return null;
}

async function ensureUserIdPropertyRule(source: Source, userId: string) {
  const where = {
    state: { [Op.not]: null },
    sourceGuid: source.guid,
    key: "userId",
    unique: true,
    type: "integer",
  };

  const found = await ProfilePropertyRule.findOne({ where });
  if (found) {
    const params = {
      key: where.key,
      type: where.type,
      unique: where.unique,
      isArray: false,
      identifying: true,
      // state: "ready", doesn't find draft
      guid: found.guid,
      sourceGuid: where.sourceGuid,
      options: { column: userId, "aggregation method": "exact" },
      filters: [],
    };
    await runAction("profilePropertyRule:edit", params);
  } else {
    // need to bootstrap it
    const params = {
      guid: where.sourceGuid,
      key: where.key,
      type: where.type,
      mappedColumn: userId,
    };
    await runAction("source:bootstrapUniqueProfilePropertyRule", params);
  }

  const made = await ProfilePropertyRule.findOne({ where });
  if (!made) {
    throw new Error("unique userId not made app not created!");
  }
  return made;
}

async function getSource(app: App, tableName: string, userId: string) {
  const params = {
    appGuid: app.guid,
    name: `Product ${tableName}`,
    type: "postgres-table-import",
    options: {
      table: tableName,
    },
  };

  const found = await findTableSource(app, tableName);
  if (found) {
    // update
    await runAction("source:edit", Object.assign(params, { guid: found.guid }));
  } else {
    await runAction("source:create", params);
  }

  const made = await findTableSource(app, tableName);
  if (!made) {
    throw new Error(`Source not created (${tableName})!`);
  }
  if (tableName === "users") {
    await ensureUserIdPropertyRule(made, userId);
  }
  const update = {
    guid: made.guid,
    state: "ready",
    mapping: {},
  };
  update.mapping[userId] = "userId"; // "user_id" => "userId"
  await runAction("source:edit", update);

  await made.reload();
  return made;
}

async function getApp() {
  const where = {
    state: { [Op.not]: null },
    name: "Demo Database",
    type: "postgres",
  };

  const db = new Database(SCHEMA_NAME);
  const { host, port, database, schema, user, password } = db.getConfig();
  const appOptions = { host, port, database, schema, user, password };
  for (const key in appOptions) {
    appOptions[key] = (appOptions[key] || "").toString();
  }

  const params = {
    name: where.name,
    type: where.type,
    state: "ready",
    options: appOptions,
  };

  const found = await App.findOne({ where });
  if (found) {
    // make sure it's up to date
    await runAction("app:edit", Object.assign(params, { guid: found.guid }));
  } else {
    // otherwise make it
    await runAction("app:create", params);
  }

  const made = await App.findOne({ where });
  if (!made) {
    throw new Error("Postgres app not created!");
  }
  return made;
}
