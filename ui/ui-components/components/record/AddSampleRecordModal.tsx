import { Modal } from "react-bootstrap";
import { ApiHook } from "../../hooks/useApi";
import { Models } from "../../utils/apiData";
import AddSampleRecordForm from "./AddSampleRecordForm";

interface Props {
  show: boolean;
  onRecordCreated: (record: Models.GrouparooRecordType) => void;
  onHide: () => void;
  execApi: ApiHook["execApi"];
  properties: Models.PropertyType[];
}

const AddSampleRecordModal: React.FC<Props> = ({
  properties,
  show,
  onHide,
  onRecordCreated,
  execApi,
}) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title as="h6">Add Sample Record</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddSampleRecordForm
          properties={properties}
          execApi={execApi}
          onSubmitComplete={(record) => {
            if (record) {
              onRecordCreated(record);
              onHide();
            }
          }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default AddSampleRecordModal;
