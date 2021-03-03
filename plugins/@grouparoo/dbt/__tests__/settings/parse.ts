import path from "path";
import fs from "fs";
import os from "os";
import { dbtProfile } from "../../src/settings/parse";
import { dbtSettingsResponse } from "../../src/settings/types";

let previousCwd = null;
const projectsPath = path.resolve(
  path.join(path.join(__dirname, "..", "projects"))
);
const defaultDirFullPath = path.join(projectsPath, "default");

const profilesPath = path.resolve(
  path.join(path.join(__dirname, "..", "profiles"))
);
const postgresDirFullPath = path.join(profilesPath, "postgres");

const homeDir = os.homedir();
const dbtDir = path.join(homeDir, ".dbt");
const userProfilePath = path.join(dbtDir, "profiles.yml");
const backupProfilePath = path.join(dbtDir, "profiles.backup.yml");

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
function backupProfile() {
  // if this system already has a ~/profile.yml, back it up
  if (fs.existsSync(userProfilePath)) {
    fs.renameSync(userProfilePath, backupProfilePath);
  }
}
function restoreProfile() {
  // put it back
  if (fs.existsSync(backupProfilePath)) {
    fs.renameSync(backupProfilePath, userProfilePath);
  }
}
function deleteProfile() {
  // put it back
  if (fs.existsSync(userProfilePath)) {
    fs.rmSync(userProfilePath);
  }
}

function replaceInFile(filePath, replaceValue, withValue) {
  const contents = fs.readFileSync(filePath).toString();
  const result = contents.replace(replaceValue, withValue);
  fs.writeFileSync(filePath, result);
}

describe("dbt/profile", () => {
  beforeAll(() => {
    previousCwd = process.cwd();
    ensureDbt();
    backupProfile();
  });
  afterEach(() => {
    delete process.env.DBT_PROFILES_DIR;
    deleteProfile();
  });
  afterAll(() => {
    // be sure to put it back
    process.chdir(previousCwd);
    restoreProfile();
  });
  describe("when in random directory", () => {
    beforeAll(() => {
      // shouldn't matter
      process.chdir(previousCwd);
    });

    it("reads full paths", async () => {
      const result = await dbtProfile({
        projectDirFullPath: defaultDirFullPath,
        profileDirFullPath: postgresDirFullPath,
      });
      checkPostgres(result);
    });

    it("does not need profile path when specifying profile name and path", async () => {
      const result = await dbtProfile({
        profile: "test_grouparoo_profile",
        profileDirFullPath: postgresDirFullPath,
      });
      checkPostgres(result);
    });

    it("does not need profile path when specifying profile name with default location", async () => {
      fs.copyFileSync(
        path.join(postgresDirFullPath, "profiles.yml"),
        userProfilePath
      );
      const result = await dbtProfile({
        profile: "test_grouparoo_profile",
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
      const result = await dbtProfile({
        projectDirRelativePath: "projects/default",
        profileDirFullPath: postgresDirFullPath, // still needs full one since not given
      });
      checkPostgres(result);
    });

    it("fails if it can't find the project directory", async () => {
      await expect(
        dbtProfile({
          profileDirFullPath: postgresDirFullPath,
        })
      ).rejects.toThrow(/Unknown dbt project directory/);
    });

    it("fails if incorrect relative directory", async () => {
      await expect(
        dbtProfile({
          projectDirRelativePath: "x/default",
          profileDirFullPath: postgresDirFullPath,
        })
      ).rejects.toThrow(/does not exist/);
    });
  });

  describe("when in project directory", () => {
    beforeAll(() => {
      process.chdir(defaultDirFullPath);
    });

    it("reads setup", async () => {
      const result = await dbtProfile({
        // finds relative in this dir
        profileDirFullPath: postgresDirFullPath, // still needs full one since not given
      });
      checkPostgres(result);
    });
  });

  describe("when in subdir of project directory", () => {
    const subDir = path.resolve(path.join(defaultDirFullPath, "sub"));
    const invalidNameDirFullPath = path.join(profilesPath, "invalid_name");
    const invalidTargetDirFullPath = path.join(profilesPath, "invalid_target");

    beforeAll(() => {
      process.chdir(subDir);
    });

    it("reads setup", async () => {
      const result = await dbtProfile({
        // finds relative in parent
        profileDirFullPath: postgresDirFullPath, // still needs full one since not given
      });
      checkPostgres(result);
    });

    it("reads setup from relative", async () => {
      const result = await dbtProfile({
        projectDirRelativePath: "../",
        profileDirFullPath: postgresDirFullPath, // still needs full one since not given
      });
      checkPostgres(result);
    });

    it("can use relative path to find profile", async () => {
      const result = await dbtProfile({
        // finds relative in parent
        profileDirRelativePath: "../../../profiles/postgres",
      });
      checkPostgres(result);
    });

    it("can use env variable to find profile", async () => {
      process.env.DBT_PROFILES_DIR = postgresDirFullPath;
      // finds relative in parent
      // uses env variable for profile
      const result = await dbtProfile();
      checkPostgres(result);
    });

    it("will find it in ~/.dbt/profiles.yml", async () => {
      fs.copyFileSync(
        path.join(postgresDirFullPath, "profiles.yml"),
        userProfilePath
      );

      // finds relative in parent
      // looks in default place for profile
      const result = await dbtProfile({});
      checkPostgres(result);
    });

    it("fails if invalid profile name", async () => {
      fs.copyFileSync(
        path.join(invalidNameDirFullPath, "profiles.yml"),
        userProfilePath
      );
      await expect(
        dbtProfile({
          // finds relative in parent
          // looks in default place for profile
        })
      ).rejects.toThrow(/Unknown profile \(test_grouparoo_profile\) in yml/);
    });

    it("can specify profile name", async () => {
      fs.copyFileSync(
        path.join(invalidNameDirFullPath, "profiles.yml"),
        userProfilePath
      );
      const result = await dbtProfile({
        // finds relative in parent
        // looks in default place for profile
        profile: "like_postgres_but_bad_name_here",
      });
      checkPostgres(result);
    });

    it("fails if invalid target name", async () => {
      fs.copyFileSync(
        path.join(invalidTargetDirFullPath, "profiles.yml"),
        userProfilePath
      );
      await expect(
        dbtProfile({
          // finds relative in parent
          // looks in default place for profile
        })
      ).rejects.toThrow(/Target dev does not exist in profile/);
    });

    it("can specify target name", async () => {
      fs.copyFileSync(
        path.join(invalidTargetDirFullPath, "profiles.yml"),
        userProfilePath
      );
      const result = await dbtProfile({
        // finds relative in parent
        // looks in default place for profile
        target: "custom_target",
      });
      checkPostgres(result);
    });

    it("fails if can't find profile is there", async () => {
      await expect(
        dbtProfile({
          // finds relative in parent
          // won't find it
        })
      ).rejects.toThrow(/Unknown dbt profile directory/);
    });
  });

  describe("bigquery", () => {
    const profileDirFullPath = path.join(profilesPath, "bigquery");
    const keyfilePath = path.join(profilesPath, "bigquery", "my-keyfile.json");
    const profileYml = path.join(profilesPath, "bigquery", "profiles.yml");
    const backupYml = path.join(
      profilesPath,
      "bigquery",
      "profiles.backup.yml"
    );

    beforeAll(() => {
      // backup yml
      fs.copyFileSync(profileYml, backupYml);
      // edit for keyfile name
      replaceInFile(
        profileYml,
        "[/path/to/bigquery/keyfile.json]",
        keyfilePath
      );
    });

    afterAll(() => {
      fs.renameSync(backupYml, profileYml);
    });

    it("can not handle oauth-secrets", async () => {
      await expect(
        dbtProfile({
          profileDirFullPath,
          target: "oauth-secrets",
          profile: "test_grouparoo_profile",
        })
      ).rejects.toThrow(
        /Unsupported \(by Grouparoo\) bigquery connection method: oauth-secrets/
      );
    });

    it("can not handle oauth", async () => {
      await expect(
        dbtProfile({
          profileDirFullPath,
          target: "oauth",
          profile: "test_grouparoo_profile",
        })
      ).rejects.toThrow(
        /Unsupported \(by Grouparoo\) bigquery connection method: oauth/
      );
    });

    it("parses service-account", async () => {
      const result = await dbtProfile({
        profileDirFullPath,
        target: "service-account",
        profile: "test_grouparoo_profile",
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
      const result = await dbtProfile({
        profileDirFullPath,
        target: "service-account-json",
        profile: "test_grouparoo_profile",
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
    const profileDirFullPath = path.join(profilesPath, "postgres");
    it("parses profile", async () => {
      const result = await dbtProfile({
        profileDirFullPath,
        target: "dev",
        profile: "test_grouparoo_profile",
      });
      checkPostgres(result);
    });
  });

  describe("redshift", () => {
    const profileDirFullPath = path.join(profilesPath, "redshift");

    it("parses password", async () => {
      const result = await dbtProfile({
        profileDirFullPath,
        target: "password",
        profile: "test_grouparoo_profile",
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
        dbtProfile({
          profileDirFullPath,
          target: "iam",
          profile: "test_grouparoo_profile",
        })
      ).rejects.toThrow(
        /Unsupported \(by Grouparoo\) redshift connection method: iam/
      );
    });
  });

  describe("snowflake", () => {
    const profileDirFullPath = path.join(profilesPath, "snowflake");
    it("parses password", async () => {
      const result = await dbtProfile({
        profileDirFullPath,
        target: "password",
        profile: "test_grouparoo_profile",
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
        dbtProfile({
          profileDirFullPath,
          target: "key_pair",
          profile: "test_grouparoo_profile",
        })
      ).rejects.toThrow(
        /Grouparoo only supports password authentication for dbt snowflake/
      );
    });

    it("can not handle key sso", async () => {
      await expect(
        dbtProfile({
          profileDirFullPath,
          target: "sso",
          profile: "test_grouparoo_profile",
        })
      ).rejects.toThrow(
        /Grouparoo only supports password authentication for dbt snowflake/
      );
    });
  });

  describe("unknown", () => {
    const profileDirFullPath = path.join(profilesPath, "unknown");
    it("throws an error", async () => {
      await expect(
        dbtProfile({
          profileDirFullPath,
          target: "unknown",
          profile: "test_grouparoo_profile",
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
      const profileDirFullPath = path.join(profilesPath, "unsupported");
      it("is not supported", async () => {
        await expect(
          dbtProfile({
            profileDirFullPath,
            target: dbtType,
            profile: "test_grouparoo_profile",
          })
        ).rejects.toThrow(
          `Unsupported (by Grouparoo) dbt connection type: ${dbtType}`
        );
      });
    });
  }
});
