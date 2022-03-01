import { WhereOptions } from "sequelize/types";

export namespace Errors {
  export const ERROR_LEVELS = ["error", "info"] as const;
  export type ErrorLevel = typeof ERROR_LEVELS[number];

  export class GrouparooError extends Error {
    code: string | number;
    sql?: string;
    errors?: GrouparooError[];
    fields?: string[];
    type?: string;
    serialize?: () => Record<string, string>;
  }

  export class InfoError extends GrouparooError {
    errorLevel: ErrorLevel;

    constructor(message: string) {
      super(message);
      this.errorLevel = "info";
    }
  }

  export class AuthenticationError extends GrouparooError {
    code: string;

    constructor(message: string, code = "AUTHENTICATION_ERROR") {
      super(message);
      this.code = code;
      delete this.stack;
    }
  }

  export class AuthorizationError extends GrouparooError {
    code: string;

    constructor(mode: string, topic: string, code = "AUTHORIZATION_ERROR") {
      const message = `Not authorized for mode "${mode}" on topic "${topic}"`;
      super(message);
      this.code = code;
      delete this.stack;
    }
  }

  export class UniqueError extends GrouparooError {
    constructor(
      public message: string,
      public model: string,
      public fields: string[],
      public whereOpts: WhereOptions,
      public code: string = "unique violation"
    ) {
      super();
    }

    serialize = () => {
      return Object.entries(this).reduce<Record<string, string>>(
        (aggregator, [k, v]) => {
          aggregator[k] = v;
          return aggregator;
        },
        {}
      );
    };
  }
}
