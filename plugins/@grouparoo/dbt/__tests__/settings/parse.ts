import path from "path";
import fs from "fs";
import os from "os";
import { dbtRecord } from "../../src/settings/parse";
import { dbtSettingsResponse } from "../../src/settings/types";

let previousCwd = null;
const projectsPath = path.resolve(
  path.join(path.join(__dirname, "..", "projects"))
);
const defaultDirFullPath = path.join(projectsPath, "default");

const recordsPath = path.resolve(
  path.join(path.join(__dirname, "..", "records"))
);
const postgresDirFullPath = path.join(recordsPath, "postgres");

const homeDir = os.homedir();
const dbtDir = path.join(homeDir, ".dbt");
const userRecordPath = path.join(dbtDir, "records.yml");
const backupRecordPath = path.join(dbtDir, "records.backup.yml");

function checkPostgres(result: dbtSettingsResponse) {
  const { type, options } = result;
  expect(type).toEqual("postgres");
  expect(options).toEqual({
    host: "127.0.0.1",
    port: 5432,
    database: "dbt_db",
    user: "myuser",
    password: "mypass",
    schema: "dbt_schema",
  });
}

function ensureDbt() {
  if (!fs.existsSync(dbtDir)) {
    fs.mkdirSync(dbtDir);
  }
}
function backupRecord() {
  // if this system already has a ~/record.yml, back it up
  if (fs.existsSync(userRecordPath)) {
    fs.renameSync(userRecordPath, backupRecordPath);
  }
}
function restoreRecord() {
  // put it back
  if (fs.existsSync(backupRecordPath)) {
    fs.renameSync(backupRecordPath, userRecordPath);
  }
}
function deleteRecord() {
  // put it back
  if (fs.existsSync(userRecordPath)) {
    fs.rmSync(userRecordPath);
  }
}

function replaceInFile(filePath, replaceValue, withValue) {
  const contents = fs.readFileSync(filePath).toString();
  const result = contents.replace(replaceValue, withValue);
  fs.writeFileSync(filePath, result);
}

describe("dbt/record", () => {
  beforeAll(() => {
    previousCwd = process.cwd();
    ensureDbt();
    backupRecord();
  });
  afterEach(() => {
    delete process.env.DBT_PROFILES_DIR;
    deleteRecord();
  });
  afterAll(() => {
    // be sure to put it back
    process.chdir(previousCwd);
    restoreRecord();
  });
  describe("when in random directory", () => {
    beforeAll(() => {
      // shouldn't matter
      process.chdir(previousCwd);
    });

    it("reads full paths", async () => {
      const result = await dbtRecord({
        projectDirFullPath: defaultDirFullPath,
        recordDirFullPath: postgresDirFullPath,
      });
      checkPostgres(result);
    });

    it("does not need record path when specifying record name and path", async () => {
      const result = await dbtRecord({
        record: "test_grouparoo_record",
        recordDirFullPath: postgresDirFullPath,
      });
      checkPostgres(result);
    });

    it("does not need record path when specifying record name with default location", async () => {
      fs.copyFileSync(
        path.join(postgresDirFullPath, "records.yml"),
        userRecordPath
      );
      const result = await dbtRecord({
        record: "test_grouparoo_record",
      });
      checkPostgres(result);
    });
  });

  describe("when in parent directory", () => {
    const parentDir = path.resolve(path.join(defaultDirFullPath, "..", ".."));
    beforeAll(() => {
      process.chdir(parentDir);
    });

    it("reads setup from relative", async () => {
      const result = await dbtRecord({
        projectDirRelativePath: "projects/default",
        recordDirFullPath: postgresDirFullPath, // still needs full one since not given
      });
      checkPostgres(result);
    });

    it("fails if it can't find the project directory", async () => {
      await expect(
        dbtRecord({
          recordDirFullPath: postgresDirFullPath,
        })
      ).rejects.toThrow(/Unknown dbt project directory/);
    });

    it("fails if incorrect relative directory", async () => {
      await expect(
        dbtRecord({
          projectDirRelativePath: "x/default",
          recordDirFullPath: postgresDirFullPath,
        })
      ).rejects.toThrow(/does not exist/);
    });
  });

  describe("when in project directory", () => {
    beforeAll(() => {
      process.chdir(defaultDirFullPath);
    });

    it("reads setup", async () => {
      const result = await dbtRecord({
        // finds relative in this dir
        recordDirFullPath: postgresDirFullPath, // still needs full one since not given
      });
      checkPostgres(result);
    });
  });

  describe("when in subdir of project directory", () => {
    const subDir = path.resolve(path.join(defaultDirFullPath, "sub"));
    const invalidNameDirFullPath = path.join(recordsPath, "invalid_name");
    const invalidTargetDirFullPath = path.join(recordsPath, "invalid_target");

    beforeAll(() => {
      process.chdir(subDir);
    });

    it("reads setup", async () => {
      const result = await dbtRecord({
        // finds relative in parent
        recordDirFullPath: postgresDirFullPath, // still needs full one since not given
      });
      checkPostgres(result);
    });

    it("reads setup from relative", async () => {
      const result = await dbtRecord({
        projectDirRelativePath: "../",
        recordDirFullPath: postgresDirFullPath, // still needs full one since not given
      });
      checkPostgres(result);
    });

    it("can use relative path to find record", async () => {
      const result = await dbtRecord({
        // finds relative in parent
        recordDirRelativePath: "../../../records/postgres",
      });
      checkPostgres(result);
    });

    it("can use env variable to find record", async () => {
      process.env.DBT_PROFILES_DIR = postgresDirFullPath;
      // finds relative in parent
      // uses env variable for record
      const result = await dbtRecord();
      checkPostgres(result);
    });

    it("will find it in ~/.dbt/records.yml", async () => {
      fs.copyFileSync(
        path.join(postgresDirFullPath, "records.yml"),
        userRecordPath
      );

      // finds relative in parent
      // looks in default place for record
      const result = await dbtRecord({});
      checkPostgres(result);
    });

    it("fails if invalid record name", async () => {
      fs.copyFileSync(
        path.join(invalidNameDirFullPath, "records.yml"),
        userRecordPath
      );
      await expect(
        dbtRecord({
          // finds relative in parent
          // looks in default place for record
        })
      ).rejects.toThrow(/Unknown record \(test_grouparoo_record\) in yml/);
    });

    it("can specify record name", async () => {
      fs.copyFileSync(
        path.join(invalidNameDirFullPath, "records.yml"),
        userRecordPath
      );
      const result = await dbtRecord({
        // finds relative in parent
        // looks in default place for record
        record: "like_postgres_but_bad_name_here",
      });
      checkPostgres(result);
    });

    it("fails if invalid target name", async () => {
      fs.copyFileSync(
        path.join(invalidTargetDirFullPath, "records.yml"),
        userRecordPath
      );
      await expect(
        dbtRecord({
          // finds relative in parent
          // looks in default place for record
        })
      ).rejects.toThrow(/Target dev does not exist in record/);
    });

    it("can specify target name", async () => {
      fs.copyFileSync(
        path.join(invalidTargetDirFullPath, "records.yml"),
        userRecordPath
      );
      const result = await dbtRecord({
        // finds relative in parent
        // looks in default place for record
        target: "custom_target",
      });
      checkPostgres(result);
    });

    it("fails if can't find record is there", async () => {
      await expect(
        dbtRecord({
          // finds relative in parent
          // won't find it
        })
      ).rejects.toThrow(/Unknown dbt record directory/);
    });
  });

  describe("bigquery", () => {
    const recordDirFullPath = path.join(recordsPath, "bigquery");
    const keyfilePath = path.join(recordsPath, "bigquery", "my-keyfile.json");
    const recordYml = path.join(recordsPath, "bigquery", "records.yml");
    const backupYml = path.join(recordsPath, "bigquery", "records.backup.yml");

    beforeAll(() => {
      // backup yml
      fs.copyFileSync(recordYml, backupYml);
      // edit for keyfile name
      replaceInFile(recordYml, "[/path/to/bigquery/keyfile.json]", keyfilePath);
    });

    afterAll(() => {
      fs.renameSync(backupYml, recordYml);
    });

    it("can not handle oauth-secrets", async () => {
      await expect(
        dbtRecord({
          recordDirFullPath,
          target: "oauth-secrets",
          record: "test_grouparoo_record",
        })
      ).rejects.toThrow(
        /Unsupported \(by Grouparoo\) bigquery connection method: oauth-secrets/
      );
    });

    it("can not handle oauth", async () => {
      await expect(
        dbtRecord({
          recordDirFullPath,
          target: "oauth",
          record: "test_grouparoo_record",
        })
      ).rejects.toThrow(
        /Unsupported \(by Grouparoo\) bigquery connection method: oauth/
      );
    });

    it("parses service-account", async () => {
      const result = await dbtRecord({
        recordDirFullPath,
        target: "service-account",
        record: "test_grouparoo_record",
      });
      const { type, options } = result;
      expect(type).toEqual("bigquery");
      expect(options).toEqual({
        client_email: "grouparoo@my-project-name.iam.gserviceaccount.com",
        dataset: "the name of your dbt dataset",
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvgIC_etc_xpPzJXvvEhqUa\n-----END PRIVATE KEY-----\n",
        project_id: "GCP project id",
      });
    });

    it("parses service-account-json", async () => {
      const result = await dbtRecord({
        recordDirFullPath,
        target: "service-account-json",
        record: "test_grouparoo_record",
      });
      const { type, options } = result;
      expect(type).toEqual("bigquery");
      expect(options).toEqual({
        client_email: "key_email",
        dataset: "the name of your dbt dataset",
        private_key: "long_private_key",
        project_id: "GCP project id",
      });
    });
  });

  describe("postgres", () => {
    const recordDirFullPath = path.join(recordsPath, "postgres");
    it("parses record", async () => {
      const result = await dbtRecord({
        recordDirFullPath,
        target: "dev",
        record: "test_grouparoo_record",
      });
      checkPostgres(result);
    });
  });

  describe("redshift", () => {
    const recordDirFullPath = path.join(recordsPath, "redshift");

    it("parses password", async () => {
      const result = await dbtRecord({
        recordDirFullPath,
        target: "password",
        record: "test_grouparoo_record",
      });
      const { type, options } = result;
      expect(type).toEqual("redshift");
      expect(options).toEqual({
        host: "hostname.region.redshift.amazonaws.com",
        port: 5439,
        database: "analytics",
        schema: "analytics",
        user: "username",
        password: "password1",
      });
    });

    it("can not handle iam", async () => {
      await expect(
        dbtRecord({
          recordDirFullPath,
          target: "iam",
          record: "test_grouparoo_record",
        })
      ).rejects.toThrow(
        /Unsupported \(by Grouparoo\) redshift connection method: iam/
      );
    });
  });

  describe("snowflake", () => {
    const recordDirFullPath = path.join(recordsPath, "snowflake");
    it("parses password", async () => {
      const result = await dbtRecord({
        recordDirFullPath,
        target: "password",
        record: "test_grouparoo_record",
      });
      const { type, options } = result;
      expect(type).toEqual("snowflake");
      expect(options).toEqual({
        account: "account id",
        database: "database name",
        password: "password",
        schema: "dbt schema",
        username: "username",
        warehouse: "warehouse name",
      });
    });

    it("can not handle key pair", async () => {
      await expect(
        dbtRecord({
          recordDirFullPath,
          target: "key_pair",
          record: "test_grouparoo_record",
        })
      ).rejects.toThrow(
        /Grouparoo only supports password authentication for dbt snowflake/
      );
    });

    it("can not handle key sso", async () => {
      await expect(
        dbtRecord({
          recordDirFullPath,
          target: "sso",
          record: "test_grouparoo_record",
        })
      ).rejects.toThrow(
        /Grouparoo only supports password authentication for dbt snowflake/
      );
    });
  });

  describe("unknown", () => {
    const recordDirFullPath = path.join(recordsPath, "unknown");
    it("throws an error", async () => {
      await expect(
        dbtRecord({
          recordDirFullPath,
          target: "unknown",
          record: "test_grouparoo_record",
        })
      ).rejects.toThrow(`Unknown (to Grouparoo) dbt connection type: unknown`);
    });
  });

  const unsupported = [
    "sqlserver",
    "presto",
    "spark",
    "exasol",
    "oracle",
    "dremio",
    "clickhouse",
  ];
  for (const dbtType of unsupported) {
    describe(dbtType, () => {
      const recordDirFullPath = path.join(recordsPath, "unsupported");
      it("is not supported", async () => {
        await expect(
          dbtRecord({
            recordDirFullPath,
            target: dbtType,
            record: "test_grouparoo_record",
          })
        ).rejects.toThrow(
          `Unsupported (by Grouparoo) dbt connection type: ${dbtType}`
        );
      });
    });
  }
});
