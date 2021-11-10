import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";
import { ErrorHandler } from "../../utils/errorHandler";

export default function ErrorAlert({
  errorHandler,
}: {
  errorHandler: ErrorHandler;
}) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [secondsToShow] = useState(1000 * 4);
  const [show, setShow] = useState(false);
  let timer: NodeJS.Timeout;

  useEffect(() => {
    errorHandler.subscribe("error-alert", subscription.bind(this));

    return () => {
      clearTimeout(timer);
      errorHandler.unsubscribe("error-alert");
    };
  }, []);

  function subscription({ error }) {
    setErrorMessage(String(error));
    setShow(true);
    timer = setTimeout(() => setShow(false), secondsToShow);
  }

  if (!errorMessage) {
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
      variant="danger"
    >
      {errorMessage}
    </Alert>
  );
}
