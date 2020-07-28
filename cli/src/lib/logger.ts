import Chalk from "chalk";

export default class Logger {
  debug(message: string) {
    this.print(Chalk.dim(`- ${message}`));
  }

  info(message: string) {
    this.print(Chalk.reset(message));
  }

  warn(message: string) {
    this.print(Chalk.yellow(message));
  }

  error(message: string) {
    this.print(Chalk.bold.red(message));
  }

  success(message: string) {
    this.print(Chalk.bgGreen.bold(message));
  }

  headline(message: string) {
    this.print(Chalk.bgBlue(message));
  }

  private print(formattedMessage: string) {
    console.log(formattedMessage);
  }
}
