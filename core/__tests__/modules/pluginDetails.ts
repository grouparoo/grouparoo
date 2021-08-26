import path from "path";
import os from "os";
import fs from "fs";
import tar from "tar";
import { getConfigDir } from "../../src/modules/pluginDetails";

describe("modules/pluginDetails", () => {
  describe("#getConfigDir", () => {
    let previousConfigDir = process.env.GROUPAROO_CONFIG_DIR;
    let previousConfigArchive = process.env.GROUPAROO_CONFIG_ARCHIVE;

    beforeEach(() => {
      delete process.env.GROUPAROO_CONFIG_DIR;
      delete process.env.GROUPAROO_CONFIG_ARCHIVE;
    });

    afterAll(() => {
      process.env.GROUPAROO_CONFIG_DIR = previousConfigDir;
      process.env.GROUPAROO_CONFIG_ARCHIVE = previousConfigArchive;
    });

    test("can get the config directory from local path", async () => {
      process.env.GROUPAROO_CONFIG_DIR = "/my/config/dir";
      const configDir = await getConfigDir();
      expect(configDir).toBe("/my/config/dir");
    });

    test("configDir defaults to local project's `/config`", async () => {
      const configDir = await getConfigDir();
      expect(configDir).toMatch(/core\/config$/);
    });

    test("configDir can be disabled", async () => {
      process.env.GROUPAROO_CONFIG_DIR = "false";
      const configDir = await getConfigDir();
      expect(configDir).toBe(false);
    });

    describe("with config archive", () => {
      let archivePath: string;
      let extractedPath: string;

      beforeAll(async () => {
        const configPath = path.join(
          __dirname,
          "..",
          "..",
          "fixtures",
          "codeConfig",
          "initial"
        );
        const tmpDir = `${os.tmpdir()}/test/${
          process.env.JEST_WORKER_ID
        }/codeConfig/archive`;

        fs.mkdirSync(tmpDir, { recursive: true });

        archivePath = path.join(tmpDir, "grouparoo.tar.gz");
        tar.create(
          {
            file: archivePath,
            gzip: true,
            cwd: configPath,
            strict: true,
            sync: true,
          },
          ["."]
        );

        expect(fs.existsSync(archivePath)).toBe(true);
      });

      test("config can be loaded from an archive", async () => {
        process.env.GROUPAROO_CONFIG_ARCHIVE = archivePath;
        process.env.GROUPAROO_CONFIG_DIR = "/";

        const configDir = await getConfigDir();
        expect(configDir).toMatch(/extracted\/$/);

        extractedPath = configDir as string;
        expect(fs.existsSync(path.join(extractedPath, "config.js")));
      });

      test("getting config dir a second time does not extract again", async () => {
        process.env.GROUPAROO_CONFIG_ARCHIVE = archivePath;
        process.env.GROUPAROO_CONFIG_DIR = "/";

        const configDir = await getConfigDir();
        expect(configDir).toBe(extractedPath);
      });
    });
  });
});
