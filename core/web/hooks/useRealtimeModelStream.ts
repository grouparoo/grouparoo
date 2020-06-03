import { useState, useEffect } from "react";

export const useRealtimeModelStream = (
  modelName: string,
  messageCallback: Function
) => {
  // @ts-ignore
  const [client] = useState(new ActionheroWebsocketClient());
  const [room] = useState(`model:${modelName}`);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    connect();

    return () => {
      setEnabled(false);
      disconnect();
    };
  }, []);

  async function connect() {
    if (client.state === "connected") {
      return;
    }

    client.on("connected", function () {
      console.log("[websocket] connected");
    });
    client.on("disconnected", function () {
      console.log("[websocket] disconnected");
    });
    client.on("error", function (error) {
      console.log("[websocket] error", error.stack);
    });
    client.on("reconnect", function () {
      console.log("[websocket] reconnect");
    });
    client.on("reconnecting", function () {
      console.log("[websocket] reconnecting");
    });
    client.on("message", function (message) {
      if (message.error) {
        console.error("[websocket] - error", message);
      }
    });
    client.on("alert", function (message) {
      alert("[websocket] " + JSON.stringify(message));
    });
    client.on("api", function (message) {
      alert("[websocket] " + JSON.stringify(message));
    });
    client.on("say", function ({
      context,
      from,
      room: messageRoom,
      sentAt,
      message,
    }) {
      if (messageRoom === room && enabled) messageCallback(message);
    });

    client.connect(function (error, details) {
      if (error) {
        console.error(error);
      } else {
        client.roomAdd(room);
      }
    });
  }

  async function disconnect() {
    client.disconnect();
  }
};
