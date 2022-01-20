import { useState } from "react";
import { Card } from "react-bootstrap";
import LoadingButton from "../LoadingButton";
import { Actions } from "../../utils/apiData";
import { successHandler } from "../../eventHandlers";
import { useApi } from "../../contexts/api";

export default function ImportAndUpdateRecord() {
  const [loading, setLoading] = useState(false);
  const { client } = useApi();

  async function importAndUpdate() {
    if (window.confirm("Are you sure?")) {
      setLoading(true);
      const response: Actions.RecordsImportAndUpdate = await client.action(
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
