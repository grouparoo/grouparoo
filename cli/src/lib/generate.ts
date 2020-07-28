import fs from "fs-extra";
import path from "path";
import SpawnCommand from "./spawnCommand";
import Logger from "./logger";

export default async function Generate(workDir: string = process.cwd()) {
  const log = new Logger();

  log.headline("Generating new Grouparoo Project");
  log.debug(`path: ${workDir}`);

  if (!fs.existsSync(workDir)) {
    log.info(`${workDir} does not exist, creating`);
    fs.mkdirpSync(workDir);
  }

  const packageJson = path.join(workDir, "package.json");
  if (!fs.existsSync(packageJson)) {
    log.info("Creating package.json");
    fs.copyFileSync(getTemplatePath("package.json"), packageJson);
  } else {
    log.warn("package.json already exists, not modifying");
  }

  const envFile = path.join(workDir, ".env");
  if (!fs.existsSync(envFile)) {
    log.info("Creating .env");
    fs.copyFileSync(getTemplatePath(".env"), envFile);
    log.info(
      "Please check the options in .env to ensure that they pertain to your environment"
    );
  } else {
    log.warn(".env already exists, not modifying");
  }

  log.info("Installing dependencies...");
  await SpawnCommand("npm", ["install"], workDir, log);

  log.success("Grouparoo project created!");
  log.info(
    "- Ensure that Postgres and Redis are running according to the values in .env or your environment"
  );
  log.info(
    `- ${
      workDir !== process.cwd() ? `Navigate to ${workDir} and ` : ""
    }type "npm start" to start the Grouparoo application.`
  );
}

function getTemplatePath(filename: string) {
  return path.join(__dirname, "..", "..", "templates", filename);
}
