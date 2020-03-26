import { useState, useEffect } from "react";
import { Row, Col, Alert } from "react-bootstrap";

export default function ({ errorHandler }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [secondsToShow] = useState(1000 * 4);
  const [show, setShow] = useState(false);
  let timer: NodeJS.Timeout;

  useEffect(() => {
    errorHandler.subscribe("error-alert", subscription.bind(this));

    return () => {
      clearTimeout(timer);
      errorHandler.unsubscribe("error-alert", subscription.bind(this));
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
    <Row>
      <Col>
        <Alert
          show={show}
          onClose={() => setShow(false)}
          dismissible
          variant="danger"
        >
          {errorMessage}
        </Alert>
      </Col>
    </Row>
  );
}
