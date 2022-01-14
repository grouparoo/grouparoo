import { helper } from "@grouparoo/spec-helper";
import { config } from "actionhero";
import { Environment } from "../../src/initializers/environment";

describe("initializers/environment", () => {
  helper.grouparooTestServer({ truncate: true });
  const initialDialect = config.sequelize.dialect;
  const initialEnv = process.env.NODE_ENV;
  const initialRunMode = process.env.GROUPAROO_RUN_MODE;

  let instance: Environment = new Environment();

  afterEach(async () => {
    config.sequelize.dialect = initialDialect;
    process.env.NODE_ENV = initialEnv;
    process.env.GROUPAROO_RUN_MODE = initialRunMode;
  });

  describe("SQLite checks", () => {
    test.each(["cli:apply", "cli:start", "cli:run"])(
      "it will throw if in production with %p run mode",
      async (runMode) => {
        process.env.NODE_ENV = "production";
        process.env.GROUPAROO_RUN_MODE = runMode;
        config.sequelize.dialect = "sqlite";

        expect(instance.initialize()).rejects.toThrow(
          /SQLite is intended for development purposes only/
        );
      }
    );

    test.each(["cli:validate", "cli:config"])(
      "it will not throw if in production mode with %p run mode",
      async (runMode) => {
        process.env.NODE_ENV = "production";
        process.env.GROUPAROO_RUN_MODE = runMode;
        config.sequelize.dialect = "sqlite";

        const res = await instance.initialize();
        expect(res).toBeUndefined();
      }
    );

    test.each([
      "cli:validate",
      "cli:config",
      "cli:apply",
      "cli:start",
      "cli:run",
    ])("it will not throw if in dev mode with %p run mode", async (runMode) => {
      process.env.NODE_ENV = "development";
      process.env.GROUPAROO_RUN_MODE = runMode;
      config.sequelize.dialect = "sqlite";

      const res = await instance.initialize();
      expect(res).toBeUndefined();
    });

    test.each([
      "cli:validate",
      "cli:config",
      "cli:apply",
      "cli:start",
      "cli:run",
    ])(
      "it will not throw with postgres database in %p run mode",
      async (runMode) => {
        process.env.NODE_ENV = "production";
        process.env.GROUPAROO_RUN_MODE = runMode;
        config.sequelize.dialect = "postgres";

        const res = await instance.initialize();
        expect(res).toBeUndefined();
      }
    );
  });
});
