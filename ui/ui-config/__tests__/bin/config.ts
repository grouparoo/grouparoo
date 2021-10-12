import { Config } from "../../dist/bin/config";

describe("grouparoo config", () => {
  let config, testDatabaseUrl, testRedisUrl, testPort;

  beforeEach(() => {
    config = new Config();

    testDatabaseUrl = process.env.DATABASE_URL;
    testRedisUrl = process.env.REDIS_URL;
    testPort = process.env.PORT;

    delete process.env.DATABASE_URL;
    delete process.env.REDIS_URL;
    delete process.env.PORT;
  });

  afterEach(() => {
    delete process.env.GROUPAROO_RUN_MODE;
    delete process.env.NEXT_DEVELOPMENT_MODE;
    delete process.env.DATABASE_URL;
    delete process.env.CONFIG_DATABASE_URL;
    delete process.env.REDIS_URL;
    delete process.env.WORKERS;
    delete process.env.WEB_SERVER;
    delete process.env.PORT;

    process.env.DATABASE_URL = testDatabaseUrl;
    process.env.REDIS_URL = testRedisUrl;
    process.env.PORT = testPort;
  });

  test("sets the proper env vars", () => {
    // Assumes env vars are empty before preInitialize() is run to be able to
    // test what it does to the env vars.
    expect(process.env.GROUPAROO_RUN_MODE).toBeUndefined();
    expect(process.env.NEXT_DEVELOPMENT_MODE).toBeUndefined();
    expect(process.env.DATABASE_URL).toBeUndefined();
    expect(process.env.CONFIG_DATABASE_URL).toBeUndefined();
    expect(process.env.REDIS_URL).toBeUndefined();
    expect(process.env.WORKERS).toBeUndefined();
    expect(process.env.WEB_SERVER).toBeUndefined();
    expect(process.env.PORT).toBeUndefined();

    config.preInitialize();

    expect(process.env.GROUPAROO_RUN_MODE).toBe("cli:config");
    expect(process.env.NEXT_DEVELOPMENT_MODE).toBe("false");
    expect(process.env.DATABASE_URL).toBe("sqlite://memory");
    expect(process.env.CONFIG_DATABASE_URL).toBeUndefined();
    expect(process.env.REDIS_URL).toBe("redis://mock");
    expect(process.env.WORKERS).toBe("0");
    expect(process.env.WEB_SERVER).toBe("true");
    expect(process.env.PORT).toBe("3000");
  });

  test("sets DATABASE_URL from CONFIG_DATABASE_URL", () => {
    expect(process.env.DATABASE_URL).toBeUndefined();
    process.env.CONFIG_DATABASE_URL = "sqlite://grouparoo_config.sqlite";
    config.preInitialize();
    expect(process.env.DATABASE_URL).toBe("sqlite://grouparoo_config.sqlite");
  });
});
