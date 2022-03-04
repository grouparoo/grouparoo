import { Modal } from "react-bootstrap";
import { Models } from "../../utils/apiData";
import AddSampleRecordForm from "./AddSampleRecordForm";
import type { RecordType } from "./SampleRecordCard";

interface Props {
  show: boolean;
  onRecordCreated: (recordId: string) => void;
  onHide: () => void;
  properties: Models.PropertyType[];
}

const AddSampleRecordModal: React.FC<Props> = ({
  properties,
  show,
  onHide,
  onRecordCreated,
}) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title as="h6">Add Sample Record</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddSampleRecordForm
          properties={properties}
          onSubmitComplete={(recordId) => {
            onRecordCreated(recordId);
            onHide();
          }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default AddSampleRecordModal;
