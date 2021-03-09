import fs from "fs-extra";
import path from "path";
import ora from "ora";
import { Templates } from "../utils/templates";
import { buildLogger } from "../utils/logger";
import { ensurePath } from "../utils/ensurePath";
import { NPM } from "../utils/npm";

export default async function Initialize(
  workDir: string,
  opts: { force: boolean }
) {
  const logger = buildLogger("Generating new Grouparoo Project");

  function safelyCreateFile(name: string, workDir: string, replacements = {}) {
    const destination = path.join(workDir, name);
    if (!fs.existsSync(destination) || opts.force) {
      fs.copyFileSync(Templates.getTemplatePath(name), destination);
      Templates.replacePlaceholders(destination, replacements);
      logger.succeed(`Created ${destination}`);
    } else {
      logger.warn(`${destination} already exists, not modifying`);
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
  safelyCreateFile("package.json", workDir, {
    version: localPackageJSONContents.version,
  });

  safelyCreateFile(".env", workDir, {
    SQLITE_DB_PATH: `sqlite://grouparoo_development.sqlite`,
  });

  safelyCreateFile(".gitignore", workDir);

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
