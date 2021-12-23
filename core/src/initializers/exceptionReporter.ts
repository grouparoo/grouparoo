import { Initializer, ExceptionReporter, api, log } from "actionhero";
import {
  DatabaseError,
  ValidationError,
  UniqueConstraintError,
} from "sequelize";

export class GrouparooExceptionReporter extends Initializer {
  constructor() {
    super();
    this.loadPriority = 1;
    this.name = "grouparooExceptionReporter";
  }

  async initialize() {
    // log the SQL statement which cause the error if we have a Sequelize Error
    const grouparooExceptionReporter: ExceptionReporter = (error: Error) => {
      if (
        error instanceof DatabaseError ||
        error instanceof ValidationError ||
        error instanceof UniqueConstraintError
      ) {
        // @ts-ignore
        const sql: string = error["sql"];
        // @ts-ignore
        const parameters: string[] = error["parameters"];
        log("Problematic SQL statement", "warning", { sql, parameters });
      }
    };

    api.exceptionHandlers.reporters.push(grouparooExceptionReporter);
  }
}
