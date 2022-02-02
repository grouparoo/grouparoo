import { matchers } from "jest-json-schema";
import glob from "glob";
import path from "path";
import fs from "fs";
import { allPackageFiles } from "../tools/shared/packages";

describe("package.json validations", () => {
  expect.extend(matchers);

  const packageFiles: String[] = allPackageFiles(glob);
  const genericSchema = require("./genericSchema.json");
  const pluginSchema = require("./pluginSchema.json");
  packageFiles.forEach((pkgFile) => {
    //@ts-ignore
    const pkgJson = JSON.parse(fs.readFileSync(pkgFile));
    describe(`${pkgFile}`, () => {
      test("it follows Grouparoo's package json schema rules", () => {
        /**
         * Tests for:
         * - Author, name, description, version, license, and private exist
         * - No dependencies contain a version number with a ~ or ^
         * - Values match expected types
         */
        const schema = pkgFile.includes("plugins")
          ? pluginSchema
          : genericSchema;

        expect(pkgJson).toMatchSchema(genericSchema);
      });
      //2 and 3 can probably use the schema validation too!
      test.todo("it requires the correct actionhero version");
      test.todo("it requires the correct grouparoo version");
      test.todo("if it's a plugin, it uses the plugin schema");
    });
  });
});
