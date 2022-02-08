import { matchersWithOptions } from "jest-json-schema";
import glob from "glob";
import fs from "fs";
import path from "path";
import { allPackageFiles } from "../tools/shared/packages";
import childProcess from "child_process";

describe("monorepo content validation", () => {
  test("the monorepo does not contain banned words", async () => {
    const checkBannedWords = await new Promise<void>((res, reject) => {
      childProcess.exec(
        "./wordCheck",
        { cwd: path.resolve(__dirname) },
        (error, _stuff, stderr) => {
          if (error || stderr) {
            return reject(error || stderr);
          }
          return res();
        }
      );
    });
    expect(checkBannedWords).resolves;
  });
});

describe("package.json validation", () => {
  const packageFiles: string[] = allPackageFiles(glob);
  const genericSchema = require("./schemaGeneric.json");
  const publicSchema = require("./schemaPublic.json");
  const restrictedSchema = require("./schemaRestricted");

  expect.extend(
    matchersWithOptions({
      schemas: [genericSchema, publicSchema, restrictedSchema],
    })
  );

  //used for license checker, but should be generated ahead of time with a fully populated list
  const excludedPackages = [
    "@newrelic/aws-sdk@1.1.3",
    "@newrelic/koa@3.0.0",
    "@newrelic/native-metrics@5.1.0",
    "@newrelic/native-metrics@5.2.0",
    "@newrelic/superagent@2.0.1",
    "emitter-component@1.1.1",
    "facebook-nodejs-business-sdk@12.0.1",
  ];

  packageFiles.forEach((pkgFile) => {
    const pkgJson = JSON.parse(fs.readFileSync(pkgFile, "utf-8"));
    const nameAndVersion = `${pkgJson.name}@${pkgJson.version}`;
    excludedPackages.push(nameAndVersion);
  });

  const pkgFile =
    "/Users/teal/workspace/grouparoo/grouparoo/plugins/@grouparoo/customerio/package.json";
  describe.each(packageFiles)(`%s`, (pkgFile) => {
    const pkgJson = JSON.parse(fs.readFileSync(pkgFile, "utf-8"));
    test("it follows Grouparoo's package json schema rules", () => {
      /**
       * Schema checks:
       * - That Author, name, description, version, license, and private exist
       * - No dependencies contain a version number with a ~ or ^
       * - Values match expected types
       */
      const schema =
        pkgFile.includes("apps") ||
        pkgFile.includes("tools") ||
        pkgJson.name === "@grouparoo/grouparoo"
          ? genericSchema
          : pkgJson.name === "@grouparoo/ui-enterprise"
          ? restrictedSchema
          : publicSchema;

      expect(pkgJson).toMatchSchema(schema);
    });

    test("Dependencies use a permitted license", (done) => {
      const allowedLicenses = [
        "MPL-2.0",
        "MIT",
        "Artistic-2.0",
        "Apache",
        "ISC",
        "BSD",
        "BSD*",
        "BSD-3-Clause",
        "BSD-2-Clause",
        "CC0-1.0",
        "CC-BY-3.0",
        "CC-BY-4.0",
        "Unlicense",
        "WTFPL",
      ];

      childProcess.exec(
        `./node_modules/.bin/license-checker --excludePackages '${excludedPackages.join(
          ";"
        )}'  --start '${path.dirname(
          pkgFile
        )}' --onlyAllow '${allowedLicenses.join(";")}'`,
        { cwd: path.resolve(__dirname + "/../") },

        (err, stdout, stderr) => {
          done(stderr);
        }
      );
    });
  });

  test("packages match across the monorepo", (done) => {
    childProcess.exec(
      `./node_modules/.bin/syncpack list-mismatches`,
      { cwd: path.resolve(__dirname + "/../") },
      (err, stdout) => {
        done(stdout);
      }
    );
  });
});
