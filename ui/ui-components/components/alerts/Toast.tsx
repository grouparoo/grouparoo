import { useState, useEffect } from "react";
import { Toast } from "react-bootstrap";
import { ErrorHandler } from "../../eventHandlers/errorHandler";
import { SuccessHandler } from "../../eventHandlers/successHandler";

const secondsToShow = 1000 * 4; // show toasts for 4 seconds before hiding
const subscriptionKey = "grouparoo-toast";

export default function GrouparooToast({
  handler,
  variant,
}: {
  handler: SuccessHandler | ErrorHandler;
  variant: "success" | "danger";
}) {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    function subscription({ message }: { message: Error | string }) {
      setMessage(formatMessage(message));
      setShow(true);
    }

    handler.subscribe(
      subscriptionKey,
      (messageObject: { message: string | Error }) =>
        subscription(messageObject)
    );

    return () => {
      handler.unsubscribe(subscriptionKey);
    };
  }, []);

  if (!message) return null;

  return (
    <Toast
      show={show}
      onClose={() => setShow(false)}
      delay={secondsToShow}
      autohide
      style={{ width: 300 }}
    >
      <Toast.Header className={`bg-${variant}`}>
        <strong className="text-white mr-auto">
          {variant === "success" ? "Success" : "Error"}
        </strong>
      </Toast.Header>
      <Toast.Body className="success">{message}</Toast.Body>
    </Toast>
  );
}

function formatMessage(message: string | Error) {
  let formattedMessage = String(message);
  if (formattedMessage.startsWith("Error: ")) {
    formattedMessage = formattedMessage.replace("Error: ", "");
  }

  return formattedMessage;
}
