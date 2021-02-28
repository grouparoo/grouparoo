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
  afterAll(() => {
    // be sure to put it back
    process.chdir(previousCwd);
  });
  describe("when given full paths", () => {
    beforeAll(() => {
      // shouldn't matter
      process.chdir(previousCwd);
    });
    it("read setup", async () => {
      const profileDirFullPath = path.resolve(
        path.join(__dirname, "..", "projects", "postgres")
      );
      const { type, options } = await dbtProfile({
        projectDirFullPath: defaultDirFullPath,
        profileDirFullPath: profileDirFullPath,
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
