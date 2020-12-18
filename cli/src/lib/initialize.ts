import fs from "fs-extra";
import path from "path";
import { Templates } from "../utils/templates";
import { buildLogger } from "../utils/logger";
import { ensurePath } from "../utils/ensurePath";
import { NPM } from "../utils/npm";

export default async function Initialize(workDir: string, program) {
  const logger = buildLogger("Generating new Grouparoo Project");

  if (!workDir) {
    logger.fail("path is required");
    process.exit(1);
  }

  const opts: {
    force: boolean;
  } = program.opts();

  fs.mkdirpSync(workDir);
  ensurePath(workDir, logger);

  if (!fs.existsSync(workDir)) {
    fs.mkdirpSync(workDir);
    logger.succeed(`Created ${workDir}`);
  }

  const packageJson = path.join(workDir, "package.json");
  if (!fs.existsSync(packageJson) || opts.force) {
    const localPackageJSONContents = JSON.parse(
      fs
        .readFileSync(path.join(__dirname, "..", "..", "package.json"))
        .toString()
    );
    const replacements = { version: localPackageJSONContents.version };
    fs.copyFileSync(Templates.getTemplatePath("package.json"), packageJson);
    Templates.replacePlaceholders(packageJson, replacements);
    logger.succeed("Created package.json");
  } else {
    logger.warn("package.json already exists, not modifying");
  }

  const envFile = path.join(workDir, ".env");
  if (!fs.existsSync(envFile) || opts.force) {
    const replacements = {
      SQLITE_DB_PATH: `sqlite://grouparoo_development.sqlite`,
    };
    fs.copyFileSync(Templates.getTemplatePath(".env"), envFile);
    Templates.replacePlaceholders(envFile, replacements);
    logger.succeed("Created .env");
    logger.warn(
      "Please check the options in .env to ensure that they pertain to your environment"
    );
  } else {
    logger.warn(".env already exists, not modifying");
  }

  await NPM.install(logger, workDir);

  logger.succeed("Grouparoo project created!");

  console.log("");
  console.log(
    "- Ensure that Postgres and Redis are running if you have enabled them in .env or your environment"
  );
  console.log(`- type "npm start" to start the Grouparoo application.`);
}
