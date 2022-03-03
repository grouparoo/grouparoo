import { ActionProcessor, Connection } from "actionhero";
import { Errors } from "..";

const namespace = "errors";

declare module "actionhero" {
  export interface ActionheroConfigInterface {
    [namespace]: ReturnType<typeof DEFAULT[typeof namespace]>;
  }
}

export const DEFAULT = {
  [namespace]: () => {
    return {
      _toExpand: false,

      // Should error types of "unknownAction" be included to the Exception handlers?
      reportUnknownActions: false,

      // ///////////////
      // SERIALIZERS //
      // ///////////////

      serializers: {
        servers: {
          web: GrouparooErrorSerializer,
          websocket: GrouparooErrorSerializer,
          specHelper: GrouparooErrorSerializer,
        },
        // See ActionProcessor#applyDefaultErrorLogLineFormat to see an example of how to customize
        actionProcessor:
          null as ActionProcessor<any>["applyDefaultErrorLogLineFormat"],
      },

      // ///////////
      // ACTIONS //
      // ///////////

      // When a params for an action is invalid
      invalidParams: (
        data: ActionProcessor<any>,
        validationErrors: (string | Error)[]
      ) => {
        if (validationErrors.length >= 0) return validationErrors[0];
        return "validation error";
      },

      // When a required param for an action is not provided
      missingParams: (data: ActionProcessor<any>, missingParams: string[]) => {
        return `${missingParams[0]} is a required parameter for this action`;
      },

      // user requested an unknown action
      unknownAction: () => {
        return `unknown action or invalid apiVersion`;
      },

      // action not useable by this client/server type
      unsupportedServerType: (data: ActionProcessor<any>) => {
        return `this action does not support the ${data.connection.type} connection type`;
      },

      // action failed because server is mid-shutdown
      serverShuttingDown: () => {
        return `the server is shutting down`;
      },

      // action failed because this client already has too many pending actions
      // limit defined in api.config.general.simultaneousActions
      tooManyPendingActions: () => {
        return `you have too many pending requests`;
      },

      // Decorate your response based on Error here.
      // Any action that throws an Error will pass through this method before returning
      //   an error to the client. Response can be edited here, status codes changed, etc.
      async genericError(
        data: ActionProcessor<any>,
        error: NodeJS.ErrnoException
      ) {
        return error;
      },

      // ///////////////
      // FILE SERVER //
      // ///////////////

      // The body message to accompany 404 (file not found) errors regarding flat files
      // You may want to load in the content of 404.html or similar
      fileNotFound: () => {
        return `that file is not found`;
      },

      // user didn't request a file
      fileNotProvided: () => {
        return `file is a required param to send a file`;
      },

      // something went wrong trying to read the file
      fileReadError: (connection: Connection, error: NodeJS.ErrnoException) => {
        return `error reading file: ${error?.message ?? error}`;
      },

      // ///////////////
      // CONNECTIONS //
      // ///////////////

      verbNotFound: (connection: Connection, verb: string) => {
        return `verb not found or not allowed (${verb})`;
      },

      verbNotAllowed: (connection: Connection, verb: string) => {
        return `verb not found or not allowed (${verb})`;
      },

      connectionRoomAndMessage: () => {
        return `both room and message are required`;
      },

      connectionNotInRoom: (connection: Connection, room: string) => {
        return `connection not in this room (${room})`;
      },

      connectionAlreadyInRoom: (connection: Connection, room: string) => {
        return `connection already in this room (${room})`;
      },

      connectionRoomHasBeenDeleted: () => {
        return "this room has been deleted";
      },

      connectionRoomNotExist: () => {
        return "room does not exist";
      },

      connectionRoomExists: () => {
        return "room exists";
      },

      connectionRoomRequired: () => {
        return "a room is required";
      },
    };
  },
};

export function GrouparooErrorSerializer(error: Errors.GrouparooError) {
  if (error.serialize) {
    return error.serialize();
  }

  let message = "";
  let code = error.code?.toString();
  let fields: string[] = [];
  let sql = error.sql || null;

  if (error.errors) {
    // a Sequelize Error https://sequelize.org/master/identifiers.html#errors
    const selectedError = error.errors[0];
    message = selectedError.message;

    if (!code) code = selectedError.type;
    if (error.fields)
      fields = Array.isArray(error.fields)
        ? error.fields
        : Object.keys(error.fields);
  } else if (error.message) {
    message = error.message;
  } else {
    message = `${error}`;
  }

  return { message, code, fields, sql };
}
