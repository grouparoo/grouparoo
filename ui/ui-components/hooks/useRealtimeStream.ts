import { useEffect } from "react";

// we are going to attach a single websocket to `window.GROUPAROO-WEBSOCKET` so that we can re-use it.
const socketKey = "GROUPAROO-WEBSOCKET-CLIENT";

export const useRealtimeStream = (
  room: string,
  key: string,
  messageCallback: Function
) => {
  let toConnect = false;
  if (!globalThis.ActionheroWebsocketClient) return null;
  if (!globalThis[socketKey]) {
    globalThis[socketKey] = new globalThis.ActionheroWebsocketClient();
    globalThis[socketKey].messageCallbacks = {};
    toConnect = true;
  }

  const client = globalThis[socketKey];

  useEffect(() => {
    if (toConnect) {
      connect();
    } else if (client.state === "disconnected") {
      reconnect();
    }

    registerCallback();
    setTimeout(() => joinRoom(), 1); // need to break hook-chain

    return () => {
      delete client.messageCallbacks[room][key];
    };
  }, []);

  async function connect() {
    if (client.state === "connected") return;

    client.on("connected", function () {
      console.log("[websocket] connected");
    });
    client.on("disconnected", function () {
      console.log("[websocket] disconnected");
    });
    client.on("error", function (error) {
      handleError(error);
    });
    client.on("reconnect", function () {
      console.log("[websocket] reconnect");
    });
    client.on("reconnecting", function () {
      console.log("[websocket] reconnecting");
    });
    client.on("message", function (message) {
      if (message.error) handleError(message);
    });
    client.on("alert", function (message) {
      alert("[websocket] " + JSON.stringify(message));
    });
    client.on("api", function (message) {
      alert("[websocket] " + JSON.stringify(message));
    });
    client.on(
      "say",
      function ({ context, from, room: messageRoom, sentAt, message }) {
        handleMessage(context, from, messageRoom, sentAt, message);
      }
    );

    client.connect(function (error, details) {
      handleError(error);
    });
  }

  async function reconnect() {
    client.connect(function (error, details) {
      handleError(error);
    });
  }

  function handleError(error) {
    if (!error) {
      return;
    } else if (
      error.status &&
      error.status.includes("connection already in this room")
    ) {
      return;
    } else if (
      error.error &&
      error.error.message.includes("Please sign in to continue")
    ) {
      return;
    }

    console.log(
      "[websocket] error",
      error.stack ? error.stack : error.error ? error.error.message : error
    );
  }

  function handleMessage(context, from, messageRoom, sentAt, message) {
    for (const key in client.messageCallbacks[messageRoom]) {
      const cb = client.messageCallbacks[messageRoom][key];
      cb(message);
    }
  }

  function registerCallback() {
    if (!client.messageCallbacks[room]) client.messageCallbacks[room] = {};
    client.messageCallbacks[room][key] = messageCallback;
  }

  function joinRoom() {
    client.detailsView(() => {
      if (!client.rooms.includes(room)) client.roomAdd(room);
    });
  }
};

export async function disconnectWebsocket() {
  if (!globalThis.ActionheroWebsocketClient) return;
  if (!globalThis[socketKey]) return;

  const client = globalThis[socketKey];
  try {
    await client.disconnect();
  } catch (error) {
    console.error(error);
  }
}
