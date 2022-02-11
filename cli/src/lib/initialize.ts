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
  const projectName =
    path
      .join(
        path.isAbsolute(workDir) ? workDir : path.join(process.cwd(), workDir)
      )
      .split(path.sep)
      .pop() || "grouparoo-project";
  safelyCreateFile("package.json", "package.json", {
    version: localPackageJSONContents.version,
    name: projectName,
  });

  safelyCreateFile(".env", ".env", {
    SQLITE_DB_PATH: `sqlite://grouparoo_development.sqlite`,
  });

  safelyCreateFile("gitignore", ".gitignore"); // we need to call the source file something other than `.gitignore` so it's not ignored by NPM

  await NPM.install(logger, workDir);

  logger.succeed("Grouparoo project created!");

  console.info(
    " * Now that your Grouparoo project is ready, run `grouparoo --help` to see new available commands."
  );
  console.info(
    " * Ensure that Postgres and Redis are running if you have enabled them in .env or your environment."
  );
  console.info(
    " * You can now configure your Sources and Destinations via our local UI by running the `grouparoo config` command."
  );
  console.info(
    " * Visit www.grouparoo.com/docs to learn about configuring your Grouparoo application."
  );
  console.info("");
}
