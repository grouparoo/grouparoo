import { UseApi } from "../../hooks/useApi";
import { useState } from "react";
import { Card } from "react-bootstrap";
import LoadingButton from "../LoadingButton";
import { Actions } from "../../utils/apiData";
import { ErrorHandler } from "../../utils/errorHandler";
import { SuccessHandler } from "../../utils/successHandler";

export default function ImportAndUpdateRecord(props) {
  const {
    errorHandler,
    successHandler,
  }: { errorHandler: ErrorHandler; successHandler: SuccessHandler } = props;
  const [loading, setLoading] = useState(false);
  const { execApi } = UseApi(props, errorHandler);

  async function importAndUpdate() {
    if (window.confirm("Are you sure?")) {
      setLoading(true);
      const response: Actions.RecordsImportAndUpdate = await execApi(
        "put",
        `/records/importAndUpdate`
      );
      if (response?.run) {
        successHandler.set({ message: `Run ${response.run.id} enqueued` });
      }
      setLoading(false);
    }
  }

  return (
    <Card border="warning">
      <Card.Body>
        <Card.Title>Import and Export all Records</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          (Re)import all records for all properties that can be determined from
          a source.
        </Card.Subtitle>

        <br />

        <Card.Text>
          <LoadingButton
            onClick={importAndUpdate}
            loading={loading}
            size="sm"
            variant="outline-warning"
          >
            Import and Update all Records
          </LoadingButton>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
