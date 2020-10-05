import { useApi } from "../../hooks/useApi";
import { useState } from "react";
import { Card } from "react-bootstrap";
import LoadingButton from "../loadingButton";

export default function ImportAndUpdateProfile(props) {
  const { errorHandler, successHandler } = props;
  const [loading, setLoading] = useState(false);
  const { execApi } = useApi(props, errorHandler);

  async function importAndUpdate() {
    if (window.confirm("Are you sure?")) {
      const response = await execApi("put", `/profiles/importAndUpdate`);
      if (response?.run) {
        successHandler.set({ message: `Run ${response.run.guid} enqueued` });
      }
    }
  }

  return (
    <Card border="warning">
      <Card.Body>
        <Card.Title>Import and Export all Profiles</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          (Re)import all profiles for all properties that can be determined from
          a source.
        </Card.Subtitle>

        <br />

        <Card.Text>
          <LoadingButton
            onClick={importAndUpdate}
            disabled={loading}
            size="sm"
            variant="outline-warning"
          >
            Import and Update all Profiles
          </LoadingButton>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
