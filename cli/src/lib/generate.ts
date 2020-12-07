import fs from "fs-extra";
import path from "path";
import SpawnCommand from "../utils/spawnCommand";
import { buildLogger } from "../utils/logger";

export default async function Generate(workDir: string = process.cwd()) {
  const logger = buildLogger("Generating new Grouparoo Project");
  logger.info(`path: ${workDir}`);

  if (!fs.existsSync(workDir)) {
    fs.mkdirpSync(workDir);
    logger.succeed(`Created ${workDir}`);
  }

  const packageJson = path.join(workDir, "package.json");
  if (!fs.existsSync(packageJson)) {
    fs.copyFileSync(getTemplatePath("package.json"), packageJson);
    injectVersion(packageJson);
    logger.succeed("Created package.json");
  } else {
    logger.warn("package.json already exists, not modifying");
  }

  const envFile = path.join(workDir, ".env");
  if (!fs.existsSync(envFile)) {
    fs.copyFileSync(getTemplatePath(".env"), envFile);
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

function getTemplatePath(filename: string) {
  return path.join(__dirname, "..", "..", "templates", filename);
}

function injectVersion(filename: string) {
  const localPackageJSONContents = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "..", "package.json")).toString()
  );
  const version = localPackageJSONContents.version;
  const contents = fs.readFileSync(filename).toString();
  const updatedContents = contents.replace(/~~VERSION~~/g, version);
  fs.writeFileSync(filename, updatedContents);
}
