import fs from "fs-extra";
import path from "path";
import SpawnCommand from "../utils/spawnCommand";
import { Templates } from "../utils/templates";
import { buildLogger } from "../utils/logger";

export default async function Generate(
  workDir: string = process.env.INIT_CWD,
  program
) {
  const opts: {
    force: boolean;
  } = program.opts();

  const logger = buildLogger("Generating new Grouparoo Project");
  logger.info(`path: ${workDir}`);

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
      SQLITE_DB_PATH: `sqlite://${path.join(
        workDir,
        "grouparoo_development.sqlite"
      )}`,
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

  await SpawnCommand(
    "npm",
    ["install"],
    workDir,
    logger,
    "Installing dependencies",
    "Dependencies Installed"
  );

  logger.succeed("Grouparoo project created!");
  console.log(
    "- Ensure that Postgres and Redis are running according to the values in .env or your environment"
  );
  console.log(
    `- ${
      workDir !== process.cwd() ? `Navigate to ${workDir} and ` : ""
    }type "npm start" to start the Grouparoo application.`
  );
}
