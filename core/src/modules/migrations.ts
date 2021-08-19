import { Umzug, SequelizeStorage } from "umzug";
import { Sequelize } from "sequelize";
import path from "path";

export namespace Migrations {
  export type SequelizeConfig = { [key: string]: any };
  export type MigrationLogger = (message: string, severity: string) => void;

  export async function migrate(
    sequelizeConfig: SequelizeConfig,
    sequelizeInstance: Sequelize,
    toMigrate: boolean,
    logger: MigrationLogger,
    logLevel: string
  ) {
    if (toMigrate) {
      logger("running sequelize migrations", "debug");
      const umzugs = importMigrationsFromDirectory(
        sequelizeConfig,
        sequelizeInstance,
        logger,
        logLevel
      );
      await upAll(umzugs);
    } else {
      logger("skipping sequelize migrations", "debug");
    }
  }

  export async function upAll(umzugs: Umzug[]) {
    for (const umzug of umzugs) {
      try {
        await umzug.up();
      } catch (error) {
        // TODO: THERE IS NO SEQUELIZE META TABLE?
        console.log(error);
      }
    }
  }

  export async function downAll(umzugs: Umzug[]) {
    for (const umzug of umzugs) {
      let ok = true;
      while (ok) {
        try {
          await umzug.down();
        } catch (error) {
          ok = false;
        }
      }
    }
  }

  export async function upOne(umzugs: Umzug[]) {
    for (const umzug of umzugs) {
      const pendingMigrations = await umzug.pending();
      if (pendingMigrations.length === 0) continue;
      await umzug.up(pendingMigrations[0].file);
      break;
    }
  }

  export async function downOne(umzugs: Umzug[], migrationName: string) {
    let found = false;
    for (const umzug of umzugs) {
      try {
        await umzug.down(migrationName);
        found = true;
        break;
      } catch (error) {
        if (error.message.match(/Unable to find migration/)) {
          // it's OK
        } else throw error;
      }
    }

    if (!found) {
      throw new Error(
        `could not find migration \`${migrationName}\` in the migration directories`
      );
    }
  }

  export function importMigrationsFromDirectory(
    sequelizeConfig: SequelizeConfig,
    sequelizeInstance: Sequelize,
    logger: MigrationLogger,
    logLevel: string
  ) {
    const umzugs: Umzug[] = [];
    const queryInterface = getInjectedQueryInterface(
      sequelizeConfig,
      sequelizeInstance
    );
    (Array.isArray(sequelizeConfig.migrations)
      ? sequelizeConfig.migrations
      : [sequelizeConfig.migrations]
    ).forEach((dir) => {
      const umzug = new Umzug({
        storage: new SequelizeStorage({ sequelize: sequelizeInstance }),
        migrations: {
          params: [queryInterface, sequelizeInstance.constructor],
          path: dir,
          pattern: /(\.js|\w{3,}\.ts)$/,
          nameFormatter: (filename: string) => {
            // we want to use only the base-name of the file, so the migrations are named the same in JS and TS
            return path.parse(filename).name;
          },
        },
        // logging: function () {
        //   if (arguments[0].match(/\.d\.ts does not match pattern/)) return;
        //   log.apply(
        //     null,
        //     [].concat(
        //       arguments[0],
        //       config.sequelize.migrationLogLevel || "info"
        //     )
        //   );
        // },
      });

      function logUmzugEvent(eventName) {
        return function (name, migration) {
          logger(`[migration] ${name} ${eventName}`, logLevel);
        };
      }

      umzug.on("migrating", logUmzugEvent("migrating"));
      umzug.on("migrated", logUmzugEvent("migrated"));
      umzug.on("reverting", logUmzugEvent("reverting"));
      umzug.on("reverted", logUmzugEvent("reverted"));

      umzugs.push(umzug);
    });

    return umzugs;
  }

  export function getInjectedQueryInterface(
    sequelizeConfig: SequelizeConfig,
    sequelizeInstance: Sequelize
  ) {
    const queryInterface = sequelizeInstance.getQueryInterface();
    if (
      sequelizeConfig.schema &&
      sequelizeConfig.schema !== "public" &&
      sequelizeConfig.dialect &&
      sequelizeConfig.dialect === "postgres"
    ) {
      queryInterface.addColumn = injectSchema(
        queryInterface.addColumn,
        sequelizeConfig.schema
      );
      queryInterface.removeColumn = injectSchema(
        queryInterface.removeColumn,
        sequelizeConfig.schema
      );
      queryInterface.renameColumn = injectSchema(
        queryInterface.renameColumn,
        sequelizeConfig.schema
      );
    }
    return queryInterface;
  }

  export function injectSchema(original, schema) {
    return function () {
      if (typeof arguments[0] === "string") {
        arguments[0] = { tableName: arguments[0], schema };
      } else if (!arguments[0].schema) {
        arguments[0].schema = schema;
      }
      return original.apply(this, arguments);
    };
  }
}
