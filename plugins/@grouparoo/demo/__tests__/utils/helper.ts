import path from "path";

process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/postgres": {
    path: path.join(__dirname, "..", "..", "..", "postgres"),
  },
  "@grouparoo/calculated-property": {
    path: path.join(__dirname, "..", "..", "..", "calculated-property"),
  },
});

import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";

async function truncate() {
  const tables = [
    "users",
    "admins",
    "purchases",
    "accounts",
    "plans",
    "payments",
  ];
  for (const table of tables) {
    await api.sequelize.query(`DROP TABLE IF EXISTS demo.${table}`);
  }
  await api.sequelize.query(`DROP SCHEMA IF EXISTS demo`);
}

async function beforeDemo() {
  await api.resque.queue.connection.redis.flushdb();
  await truncate();
}

export function hooks() {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(beforeDemo);
}
