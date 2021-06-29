import { useState, useEffect } from "react";
import { useRealtimeStream } from "@grouparoo/ui-components/hooks/useRealtimeStream";
import { formatTimestamp } from "@grouparoo/ui-components/utils/formatTimestamp";
import AnsiToHTML from "ansi-to-html";

type Message = { timestamp?: number; type?: string; message: string };

const converter = new AnsiToHTML();
const limit = 1000;

export function CLIStream(props) {
  const [messages, setMessages] = useState<Message[]>([
    { message: "Output Stream..." },
    { message: "" },
  ]);
  const [latestTimestamp, setLatestTimestamp] = useState(0);

  useEffect(() => {
    const listElement = document.getElementById("cli-stream");
    listElement.scrollTop = listElement.scrollHeight;
  }, [latestTimestamp]);

  // websocket
  useRealtimeStream("system:cli", "cli-stream", handleMessage);

  function handleMessage(message: Message) {
    if (message?.message === "") return;

    setMessages((messages) => {
      while (messages.length > limit) messages.shift();
      messages.push(message);
      return messages;
    });

    setLatestTimestamp(message.timestamp);
  }

  return (
    <>
      <div
        id="cli-stream"
        style={{
          backgroundColor: "black",
          color: "white",
          height: 400,
          overflow: "auto",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: 10,
          }}
        >
          {messages.map((message, idx) => (
            <li key={`message-${idx}`}>
              <span className="text-light">
                {formatTimestamp(message.timestamp)}
              </span>
              <span
                dangerouslySetInnerHTML={{
                  __html: converter.toHtml(message.message),
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
