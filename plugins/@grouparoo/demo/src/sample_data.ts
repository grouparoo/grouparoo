import Database from "./util/postgres";
import { log, init } from "./util/shared";
import { runAction } from "./util/runAction";
import {
  makePropertyRuleIdentifying,
  createPropertyRule,
  ensureBootstrapPropertyRule,
  RuleDefinition,
} from "./util/propertyRules";
import { App, Source, Schedule } from "@grouparoo/core";

export const SCHEMA_NAME = "demo";
export const USER_ID_PROPERTY_NAME = "userId";

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

const USER_ID_PROPERTY_RULE: RuleDefinition = {
  key: USER_ID_PROPERTY_NAME,
  type: "integer",
  unique: true,
  identifying: true,
  options: { column: "id", "aggregation method": "exact" },
};

const USER_RULES: Array<RuleDefinition> = [
  {
    key: "firstName",
    type: "string",
    options: { column: "first_name", "aggregation method": "exact" },
  },
  {
    key: "lastName",
    type: "string",
    options: { column: "last_name", "aggregation method": "exact" },
  },
  {
    key: "email",
    type: "email",
    options: { column: "email", "aggregation method": "exact" },
    unique: true,
  },
  {
    key: "language",
    type: "string",
    options: { column: "language", "aggregation method": "exact" },
  },
  {
    key: "deactivated",
    type: "boolean",
    options: { column: "deactivated", "aggregation method": "exact" },
  },
];

const PURCHASES = {
  id: "INT NOT NULL PRIMARY KEY",
  user_id: "INT NOT NULL",
  item: "VARCHAR(191) NOT NULL",
  category: "VARCHAR(191) NOT NULL",
  price: "DECIMAL",
  state: "VARCHAR(191)",
};

const PURCHASE_FILTERS = [{ key: "state", op: "equals", match: "successful" }];
const PURCHASE_RULES: Array<RuleDefinition> = [
  {
    key: "LTV",
    type: "float",
    options: { column: "price", "aggregation method": "sum" },
    filters: PURCHASE_FILTERS,
  },
  {
    key: "purchaseCount",
    type: "integer",
    options: {
      column: "id",
      "aggregation method": "count",
    },
    filters: PURCHASE_FILTERS,
  },
  {
    key: "lastPurchaseCategory",
    type: "string",
    options: {
      column: "category",
      "aggregation method": "most recent value",
      "sort column": "created_at",
    },
    filters: PURCHASE_FILTERS,
  },
  {
    key: "lastPurchaseDate",
    type: "date",
    options: {
      column: "created_at",
      "aggregation method": "most recent value",
      "sort column": "created_at",
    },
    filters: PURCHASE_FILTERS,
  },
];

interface DataOptions {
  scale?: number;
}
export async function users(options: DataOptions = {}) {
  await createCsvTable("users", "id", USERS, true, true, options);
  await createSource("users", "id");
  await createPropertyRules("users", USER_RULES);
  await setEmailAsIdentifying("users");
  await createAndRunSchedule("users", "updated_at");
}

export async function purchases(options: DataOptions = {}) {
  await createCsvTable("purchases", "user_id", PURCHASES, true, false, options);
  await createSource("purchases", "user_id");
  await createPropertyRules("purchases", PURCHASE_RULES);
}

async function createAndRunSchedule(tableName: string, columnName: string) {
  const source = await findSource(tableName);
  const where = { sourceGuid: source.guid };
  const found = await Schedule.scope(null).findOne({ where });
  const params = {
    name: `${source.name} schedule`,
    state: "ready",
    recurring: true,
    options: { column: columnName },
    recurringFrequency: 5 * 60 * 1000, // five minutes
    sourceGuid: source.guid,
  };

  if (found) {
    await runAction("schedule:destroy", { guid: found.guid });
  }

  await runAction("schedule:create", params);

  const made = await Schedule.scope(null).findOne({ where });
  if (!made) {
    throw new Error(`Schedule not created (${tableName})`);
  }

  await runAction("schedule:run", { guid: made.guid });
}

async function createCsvTable(
  tableName: string,
  userId: string,
  types: any,
  createdAt: boolean,
  updatedAt: boolean,
  options: DataOptions = {}
) {
  log(0, `Adding Sample Data: ${tableName}`);
  const db = new Database(SCHEMA_NAME);
  await db.connect();
  await db.createCsvTable(
    tableName,
    userId,
    types,
    createdAt,
    updatedAt,
    options.scale
  );
  await db.disconnect();
}

async function findTableSource(app, tableName) {
  const where = {
    appGuid: app.guid,
    type: "postgres-table-import",
  };
  const sources = await Source.scope(null).findAll({ where });
  for (const source of sources) {
    const options = await source.getOptions();
    if (options.table === tableName) {
      return source;
    }
  }
  return null;
}

async function findSource(tableName: string) {
  const app = await getApp();
  const found = await findTableSource(app, tableName);
  if (!found) {
    throw new Error(`Source not found (${tableName})`);
  }
  return found;
}

async function createSource(tableName: string, userId: string) {
  const app = await getApp();
  return getSource(app, tableName, userId);
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
    await ensureBootstrapPropertyRule(made, USER_ID_PROPERTY_RULE);
  }
  const update = {
    guid: made.guid,
    state: "ready",
    mapping: {},
  };
  update.mapping[userId] = USER_ID_PROPERTY_NAME; // "user_id" => "userId"
  await runAction("source:edit", update);

  await made.reload();
  return made;
}

export async function createPropertyRules(
  tableName: string,
  rules: Array<RuleDefinition>
) {
  const source = await findSource(tableName);
  for (const rule of rules) {
    await createPropertyRule(source, rule);
  }
}

async function setEmailAsIdentifying(tableName: string) {
  const source = await findSource(tableName);
  await makePropertyRuleIdentifying(source, "email");
}

async function getApp() {
  const where = {
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

  const found = await App.scope(null).findOne({ where });
  if (found) {
    // make sure it's up to date
    await runAction("app:edit", Object.assign(params, { guid: found.guid }));
  } else {
    // otherwise make it
    await runAction("app:create", params);
  }

  const made = await App.scope(null).findOne({ where });
  if (!made) {
    throw new Error("Postgres app not created!");
  }
  return made;
}

export async function getPurchases(limit = null) {
  const out = [];
  const db = new Database(SCHEMA_NAME);
  const tableName = "purchases";
  const sqlTable = `${db.config.schema}."${tableName}"`;
  let sql = `SELECT * FROM ${sqlTable} ORDER BY created_at DESC`;
  if (limit) {
    sql += ` LIMIT ${limit}`;
  }
  const results = await db.query(3, sql);
  for (const row of results.rows) {
    out.push(row);
  }
  return out;
}

export async function getPurchaseCategories() {
  const out = [];
  const db = new Database(SCHEMA_NAME);
  const tableName = "purchases";
  const sqlTable = `${db.config.schema}."${tableName}"`;
  const sql = `SELECT category FROM ${sqlTable} WHERE category IS NOT NULL GROUP BY category`;
  const results = await db.query(3, sql);
  for (const row of results.rows) {
    out.push(row.category);
  }
  return out;
}
