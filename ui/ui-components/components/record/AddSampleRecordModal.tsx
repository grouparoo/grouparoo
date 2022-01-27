import { Modal } from "react-bootstrap";
import { Models } from "../../utils/apiData";
import AddSampleRecordForm from "./AddSampleRecordForm";

interface Props {
  modelId: string;
  show: boolean;
  onRecordCreated: (record: Models.GrouparooRecordType) => void;
  onHide: () => void;
  properties: Models.PropertyType[];
}

const AddSampleRecordModal: React.FC<Props> = ({
  modelId,
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
          modelId={modelId}
          properties={properties}
          onSubmitComplete={(record) => {
            onRecordCreated(record);
            onHide();
          }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default AddSampleRecordModal;
