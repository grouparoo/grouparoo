import { Initializer, ExceptionReporter, api, log, env } from "actionhero";
import {
  DatabaseError,
  ValidationError,
  UniqueConstraintError,
} from "sequelize";

export class GrouparooExceptionReporter extends Initializer {
  constructor() {
    super();
    this.name = "grouparooExceptionReporter";
  }

  async initialize() {
    // log the SQL statement which cause the error if we have a Sequelize Error
    const grouparooExceptionReporter: ExceptionReporter = (error: Error) => {
      if (!["development", "test"].includes(env)) return;
      if (
        error instanceof DatabaseError ||
        error instanceof ValidationError ||
        error instanceof UniqueConstraintError
      ) {
        const sql: string = error["sql"];
        const parameters: string[] = error["parameters"];
        log("Problematic SQL statement", "warning", { sql, parameters });
      }
    };

    api.exceptionHandlers.reporters.push(grouparooExceptionReporter);
  }
}
