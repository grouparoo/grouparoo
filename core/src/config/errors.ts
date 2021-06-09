export const DEFAULT = {
  errors: (config) => {
    return {
      _toExpand: false,

      // ///////////////
      // SERIALIZERS //
      // ///////////////

      serializers: {
        servers: {
          web: GrouparooErrorSerializer,
          websocket: GrouparooErrorSerializer,
          specHelper: GrouparooErrorSerializer,
        },
      },

      // ///////////
      // ACTIONS //
      // ///////////

      // When a params for an action is invalid
      invalidParams: (data, validationErrors) => {
        if (validationErrors.length >= 0) {
          return validationErrors[0];
        }
        return data.connection.localize("actionhero.errors.invalidParams");
      },

      // When a required param for an action is not provided
      missingParams: (data, missingParams) => {
        return data.connection.localize([
          "actionhero.errors.missingParams",
          { param: missingParams[0] },
        ]);
      },

      // user requested an unknown action
      unknownAction: (data) => {
        return data.connection.localize("actionhero.errors.unknownAction");
      },

      // action not useable by this client/server type
      unsupportedServerType: (data) => {
        return data.connection.localize([
          "actionhero.errors.unsupportedServerType",
          { type: data.connection.type },
        ]);
      },

      // action failed because server is mid-shutdown
      serverShuttingDown: (data) => {
        return data.connection.localize("actionhero.errors.serverShuttingDown");
      },

      // action failed because this client already has too many pending acitons
      // limit defined in config.general.simultaneousActions
      tooManyPendingActions: (data) => {
        return data.connection.localize(
          "actionhero.errors.tooManyPendingActions"
        );
      },

      // Decorate your response based on Error here.
      // Any action that throws an Error will pass through this method before returning
      //   an error to the client. Reponse can be edited here, status codes changed, etc.
      async genericError(data, error) {
        return error;
      },

      // ///////////////
      // FILE SERVER //
      // ///////////////

      // The body message to accompany 404 (file not found) errors regarding flat files
      // You may want to load in the contnet of 404.html or similar
      fileNotFound: (connection) => {
        return connection.localize(["actionhero.errors.fileNotFound"]);
      },

      // user didn't request a file
      fileNotProvided: (connection) => {
        return connection.localize("actionhero.errors.fileNotProvided");
      },

      // something went wrong trying to read the file
      fileReadError: (connection, error) => {
        return connection.localize([
          "actionhero.errors.fileReadError",
          { error: String(error) },
        ]);
      },

      // ///////////////
      // CONNECTIONS //
      // ///////////////

      verbNotFound: (connection, verb) => {
        return connection.localize([
          "actionhero.errors.verbNotFound",
          { verb: verb },
        ]);
      },

      verbNotAllowed: (connection, verb) => {
        return connection.localize([
          "actionhero.errors.verbNotAllowed",
          { verb: verb },
        ]);
      },

      connectionRoomAndMessage: (connection) => {
        return connection.localize(
          "actionhero.errors.connectionRoomAndMessage"
        );
      },

      connectionNotInRoom: (connection, room) => {
        return connection.localize([
          "actionhero.errors.connectionNotInRoom",
          { room: room },
        ]);
      },

      connectionAlreadyInRoom: (connection, room) => {
        return connection.localize([
          "actionhero.errors.connectionAlreadyInRoom",
          { room: room },
        ]);
      },

      connectionRoomHasBeenDeleted: (room) => {
        return "this room has been deleted";
      },

      connectionRoomNotExist: (room) => {
        return "room does not exist";
      },

      connectionRoomExists: (room) => {
        return "room exists";
      },

      connectionRoomRequired: (room) => {
        return "a room is required";
      },
    };
  },
};

export function GrouparooErrorSerializer(error) {
  let message = "";
  let code = error.code || undefined;
  let fields = [];

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

  return { message, code, fields };
}
