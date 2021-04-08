#!/usr/bin/env -S npx ts-node

/**
 * Run me as if I were a bash program eg: `migrator.ts up`
 */

import { Sequelize } from "sequelize-typescript";
import { Umzug, SequelizeStorage } from "umzug";
import path from "path";

const args = process.argv.slice(2);

async function main() {
  const env = process.env.NODE_ENV || "development";
  const config = path.resolve(__dirname, "src", "config", "sequelize.ts");
  const CONFIG = Object.assign({}, (await import(config))[env], {
    autoMigrate: false,
  });

  const sequelize = new Sequelize(CONFIG);

  // learn more about configuring umzug @ https://github.com/actionhero/ah-sequelize-plugin/blob/master/src/initializers/sequelize.ts
  const umzug = new Umzug({
    storage: new SequelizeStorage({ sequelize: sequelize }),
    migrations: {
      params: [sequelize.getQueryInterface(), sequelize.constructor],
      path: CONFIG.migrations[0],
      pattern: /(\.js|\w{3,}\.ts)$/,
      nameFormatter: (filename: string) => path.parse(filename).name,
    },
    logging: console.log,
  });

  if (args[0] === "up") {
    await umzug.up();
  } else if (args[0] === "down") {
    await umzug.down();
  } else {
    console.log("no arg provided or unknown arg - try `./migrator.ts up`");
  }
}

main();
