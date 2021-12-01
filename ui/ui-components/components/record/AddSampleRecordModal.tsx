import { Modal, ModalProps } from "react-bootstrap";
import { ApiHook } from "../../hooks/useApi";
import { Models } from "../../utils/apiData";
import AddSampleRecordForm from "./AddSampleRecordForm";

interface Props extends Pick<ModalProps, "show" | "onHide"> {
  execApi: ApiHook["execApi"];
  properties: Models.PropertyType[];
}

const AddSampleRecordModal: React.FC<Props> = ({
  properties,
  show,
  onHide,
  execApi,
}) => {
  const onFormSubmitComplete = (record) => {
    if (record) {
      onHide();
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title as="h6">Add Sample Record</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddSampleRecordForm
          properties={properties}
          execApi={execApi}
          onSubmitComplete={onFormSubmitComplete}
        />
      </Modal.Body>
    </Modal>
  );
};

export default AddSampleRecordModal;
