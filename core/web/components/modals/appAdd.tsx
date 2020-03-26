import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AddAppForm from "../forms/app/add";
import ErrorAlert from "../alerts/error";

export default function (props) {
  const { errorHandler } = props;
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button variant="warning" size="sm" onClick={() => setVisible(true)}>
        Add App
      </Button>

      <Modal show={visible} onHide={() => setVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add App</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ErrorAlert errorHandler={errorHandler} />
          <AddAppForm onClose={() => setVisible(false)} {...props} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setVisible(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
