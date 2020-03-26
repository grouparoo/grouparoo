import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AddTeamForm from "../forms/team/add";
import ErrorAlert from "../alerts/error";

export default function (props) {
  const { errorHandler } = props;
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button variant="warning" size="sm" onClick={() => setVisible(true)}>
        Add Team
      </Button>

      <Modal show={visible} onHide={() => setVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ErrorAlert errorHandler={errorHandler} />
          <AddTeamForm onClose={() => setVisible(false)} {...props} />
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
