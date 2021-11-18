import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { SuccessHandler } from "../../utils/successHandler";

export default function SuccessAlert({
  successHandler,
}: {
  successHandler: SuccessHandler;
}) {
  const [message, setMessage] = useState("");
  const [secondsToShow] = useState(1000 * 4);
  const [show, setShow] = useState(false);
  let timer: NodeJS.Timeout;

  useEffect(() => {
    successHandler.subscribe("success-alert", subscription.bind(this));

    return () => {
      clearTimeout(timer);
      successHandler.unsubscribe("success-alert");
    };
  }, []);

  function subscription({ message }) {
    setMessage(String(message));
    setShow(true);
    timer = setTimeout(() => setShow(false), secondsToShow);
  }

  if (!message) {
    return null;
  }

  return (
    <Alert
      style={{
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 18,
        textAlign: "center",
      }}
      show={show}
      onClose={() => setShow(false)}
      variant="success"
      className="text-break"
    >
      {message}
    </Alert>
  );
}
