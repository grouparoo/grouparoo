import Ora from "ora";
import Chalk from "chalk";

export function buildLogger(headline: string) {
  console.log(`🦘 ${Chalk.underline(headline)}`);
  console.log("");

  const logger = Ora().start();
  return logger;
}
