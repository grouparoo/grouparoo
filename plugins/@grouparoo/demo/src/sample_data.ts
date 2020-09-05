import Database from "./util/postgres";
import { log } from "./util/shared";

const SCHEMA_NAME = "demo";

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

export async function users() {
  log(0, "Adding Sample Data: Users");
  const db = new Database(SCHEMA_NAME);
  await db.connect();
  await db.createCsvTable("users", "id", USERS, true, true);
  await db.createCsvTable("purchases", "user_id", PURCHASES, true, false);
  await db.disconnect();
}
