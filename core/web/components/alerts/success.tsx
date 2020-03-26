import { useState, useEffect } from "react";
import { Row, Col, Alert } from "react-bootstrap";

export default function ({ successHandler }) {
  const [message, setMessage] = useState(null);
  const [secondsToShow] = useState(1000 * 4);
  const [show, setShow] = useState(false);
  let timer: NodeJS.Timeout;

  useEffect(() => {
    successHandler.subscribe("success-alert", subscription.bind(this));

    return () => {
      clearTimeout(timer);
      successHandler.unsubscribe("success-alert", subscription.bind(this));
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
    <Row>
      <Col>
        <Alert
          show={show}
          onClose={() => setShow(false)}
          dismissible
          variant="success"
        >
          {message}
        </Alert>
      </Col>
    </Row>
  );
}
