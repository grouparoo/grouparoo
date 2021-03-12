import fs from "fs-extra";
import path from "path";
import { Templates } from "../utils/templates";
import { buildLogger } from "../utils/logger";
import { ensurePath } from "../utils/ensurePath";
import { NPM } from "../utils/npm";

export default async function Initialize(
  workDir: string,
  opts: { force: boolean }
) {
  const logger = buildLogger("Generating new Grouparoo Project");

  function safelyCreateFile(
    source: string,
    destination: string,
    replacements = {}
  ) {
    const fullSourcePath = Templates.getTemplatePath(source);
    const fullDestinationPath = path.join(workDir, destination);

    if (!fs.existsSync(fullDestinationPath) || opts.force) {
      fs.copyFileSync(fullSourcePath, fullDestinationPath);
      Templates.replacePlaceholders(fullDestinationPath, replacements);
      logger.succeed(`Created ${fullDestinationPath}`);
    } else {
      logger.warn(`${fullDestinationPath} already exists, not modifying`);
    }
  }

  if (!workDir) {
    logger.fail("path is required");
    process.exit(1);
  }

  fs.mkdirpSync(workDir);
  ensurePath(workDir, logger);

  if (!fs.existsSync(workDir)) {
    fs.mkdirpSync(workDir);
    logger.succeed(`Created ${workDir}`);
  }

  const localPackageJSONContents = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "..", "package.json")).toString()
  );
  safelyCreateFile("package.json", "package.json", {
    version: localPackageJSONContents.version,
  });

  safelyCreateFile(".env", ".env", {
    SQLITE_DB_PATH: `sqlite://grouparoo_development.sqlite`,
  });

  safelyCreateFile("gitignore", ".gitignore"); // we need to call the source file something other than `.gitignore` so it's not ignored by NPM

  /**
   * Copy Code Config README templates into the work directory. This also
   * results in a skeleton structure representing the directories in which Code
   * Config files will be generated.
   */
  const templates = Templates.getConfigTemplates();
  templates.map(({ absoluteFilePath, relativeFilePath }) => {
    const destDir = path.join(workDir, path.dirname(relativeFilePath)); // Create directory for file if it doesn't exist.
    if (!fs.existsSync(destDir)) fs.mkdirpSync(destDir);
    const destFilePath = path.join(workDir, relativeFilePath); // Copy the file into the working project's config directory.
    if (!fs.existsSync(destFilePath)) {
      fs.copyFileSync(absoluteFilePath, destFilePath);
    }
  });
  logger.succeed("Created directories for config objects.");

  await NPM.install(logger, workDir);

  logger.succeed("Grouparoo project created!");

  console.info(
    " * Now that your Grouparoo project is ready, run `grouparoo --help` to see new available commands"
  );
  console.info(
    " * You can add plugins to to this project to connect to new Sources and Destinations and add additional commands with the `grouparoo install` command."
  );
  console.info(
    " * Ensure that Postgres and Redis are running if you have enabled them in .env or your environment"
  );
  console.info(
    " * Visit www.grouparoo.com/docs to learn about configuring your Grouparoo application."
  );
  console.info("");
}
