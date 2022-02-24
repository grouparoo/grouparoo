import { Modal } from "react-bootstrap";
import { Models } from "../../utils/apiData";
import AddSampleRecordForm from "./AddSampleRecordForm";
import type { RecordType } from "./SampleRecordCard";

interface Props {
  show: boolean;
  onRecordCreated: (
    record: RecordType,
    groups: Models.GroupType[],
    destinations: Models.DestinationType[]
  ) => void;
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
          onSubmitComplete={(record, groups, destinations) => {
            onRecordCreated(record, groups, destinations);
            onHide();
          }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default AddSampleRecordModal;
