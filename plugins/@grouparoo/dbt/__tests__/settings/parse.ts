import { helper } from "@grouparoo/spec-helper";
import path from "path";
import fs from "fs";
import os from "os";
import { dbtProfile } from "../../src/settings/parse";
import { dbtSettingsResponse } from "../../src/settings/types";

let previousCwd = null;
const defaultDirFullPath = path.resolve(
  path.join(__dirname, "..", "projects", "default")
);

const projectsPath = path.resolve(
  path.join(path.join(__dirname, "..", "projects"))
);
const postgresDirFullPath = path.join(projectsPath, "postgres");

const homeDir = os.homedir();
const userProfilePath = path.resolve(
  path.join(homeDir, ".dbt", "profiles.yml")
);
const backupProfilePath = path.resolve(
  path.join(homeDir, ".dbt", "profiles.backup.yml")
);

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

describe("dbt/profile", () => {
  beforeAll(() => {
    previousCwd = process.cwd();
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
    const invalidNameDirFullPath = path.join(projectsPath, "invalid_name");
    const invalidTargetDirFullPath = path.join(projectsPath, "invalid_target");

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
        profileDirRelativePath: "../../postgres",
      });
      checkPostgres(result);
    });

    it("can use env variable to find profile", async () => {
      process.env.DBT_PROFILES_DIR = postgresDirFullPath;
      const result = await dbtProfile({
        // finds relative in parent
        // uses env variable for profile
      });
      checkPostgres(result);
    });

    it("will find it in ~/.dbt/profiles.yml", async () => {
      fs.copyFileSync(
        path.join(postgresDirFullPath, "profiles.yml"),
        userProfilePath
      );
      const result = await dbtProfile({
        // finds relative in parent
        // looks in default place for profile
      });
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

  describe("redshift", () => {
    const profileDirFullPath = path.join(projectsPath, "redshift");

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
});
