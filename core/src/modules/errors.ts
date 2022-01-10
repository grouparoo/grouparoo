export namespace Errors {
  export const ERROR_LEVELS = ["error", "info"] as const;
  export type ErrorLevel = typeof ERROR_LEVELS[number];

  export class InfoError extends Error {
    errorLevel: ErrorLevel;

    constructor(message: string) {
      super(message);
      this.errorLevel = "info";
    }
  }

  export class AuthenticationError extends Error {
    code: string;

    constructor(message: string, code = "AUTHENTICATION_ERROR") {
      super(message);
      this.code = code;
    }
  }

  export class AuthorizationError extends Error {
    code: string;

    constructor(mode: string, topic: string, code = "AUTHORIZATION_ERROR") {
      const message = `Not authorized for mode "${mode}" on topic "${topic}"`;
      super(message);
      this.code = code;
    }
  }
}
