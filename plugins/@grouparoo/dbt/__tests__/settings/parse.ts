import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { dbtProfile } from "../../src/settings/parse";

let previousCwd = null;
const defaultDirFullPath = path.resolve(
  path.join(__dirname, "..", "projects", "default")
);
describe("dbt/profile", () => {
  beforeAll(() => {
    previousCwd = process.cwd();
  });
  beforeEach(() => {
    process.env.DBT_PROFILES_DIR = null;
  });
  afterAll(() => {
    // be sure to put it back
    process.chdir(previousCwd);
    process.env.DBT_PROFILES_DIR = null;
  });
  describe("when in random directory", () => {
    beforeAll(() => {
      // shouldn't matter
      process.chdir(previousCwd);
    });

    it("reads full paths", async () => {
      const profileDirFullPath = path.resolve(
        path.join(__dirname, "..", "projects", "postgres")
      );
      const { type, options } = await dbtProfile({
        projectDirFullPath: defaultDirFullPath,
        profileDirFullPath,
      });
      expect(type).toEqual("postgres");
      expect(options).toEqual({
        host: "127.0.0.1",
        port: 5432,
        database: "dbt_db",
        user: "myuser",
        password: "mypass",
        schema: "dbt_schema",
      });
    });
  });

  describe("when in parent directory", () => {
    beforeAll(() => {
      process.chdir(path.resolve(path.join(defaultDirFullPath, "..", "..")));
    });

    it("reads setup", async () => {
      const profileDirFullPath = path.resolve(
        path.join(__dirname, "..", "projects", "postgres")
      );
      const { type, options } = await dbtProfile({
        projectDirRelativePath: "projects/default",
        profileDirFullPath, // still needs full one since not given
      });
      expect(type).toEqual("postgres");
      expect(options).toEqual({
        host: "127.0.0.1",
        port: 5432,
        database: "dbt_db",
        user: "myuser",
        password: "mypass",
        schema: "dbt_schema",
      });
    });

    it("fails if it can't find the project directory", async () => {
      const profileDirFullPath = path.resolve(
        path.join(__dirname, "..", "projects", "postgres")
      );
      await expect(
        dbtProfile({
          profileDirFullPath,
        })
      ).rejects.toThrow(/Unknown dbt project directory/);
    });

    it("fails if incorrect relative directory", async () => {
      const profileDirFullPath = path.resolve(
        path.join(__dirname, "..", "projects", "postgres")
      );
      await expect(
        dbtProfile({
          projectDirRelativePath: "x/default",
          profileDirFullPath,
        })
      ).rejects.toThrow(/does not exist/);
    });
  });

  describe("when in project directory", () => {
    beforeAll(() => {
      process.chdir(defaultDirFullPath);
    });

    it("reads setup", async () => {
      const profileDirFullPath = path.resolve(
        path.join(__dirname, "..", "projects", "postgres")
      );
      const { type, options } = await dbtProfile({
        // finds relative in this dir
        profileDirFullPath, // still needs full one since not given
      });
      expect(type).toEqual("postgres");
      expect(options).toEqual({
        host: "127.0.0.1",
        port: 5432,
        database: "dbt_db",
        user: "myuser",
        password: "mypass",
        schema: "dbt_schema",
      });
    });
  });

  describe("when in subdir of project directory", () => {
    beforeAll(() => {
      process.chdir(path.resolve(path.join(defaultDirFullPath, "sub")));
    });

    it("reads setup", async () => {
      const profileDirFullPath = path.resolve(
        path.join(__dirname, "..", "projects", "postgres")
      );
      const { type, options } = await dbtProfile({
        // finds relative in parent
        profileDirFullPath, // still needs full one since not given
      });
      expect(type).toEqual("postgres");
      expect(options).toEqual({
        host: "127.0.0.1",
        port: 5432,
        database: "dbt_db",
        user: "myuser",
        password: "mypass",
        schema: "dbt_schema",
      });
    });
  });
});
