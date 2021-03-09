import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { Card } from "react-bootstrap";
import LoadingButton from "../loadingButton";
import { Actions } from "../../utils/apiData";

export default function ResetData(props) {
  const { errorHandler, successHandler } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);

  async function reset() {
    if (!window.confirm("Are you sure?")) return;

    setLoading(true);
    const response: Actions.ResetData = await execApi("delete", `/reset/data`);
    if (response?.success) {
      successHandler.set({ message: `Data Reset!` });
    }
    setLoading(false);
  }

  return (
    <Card border="danger">
      <Card.Body>
        <Card.Title>Reset Data</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Remove all imported data from Grouparoo.
          <br />
          <br />
          <small>
            Imported Data includes Profiles, GroupMembers, Imports, and Exports.
            This will not remove configuration data, like Apps, Groups, Sources,
            and Properties. This action will not remove data from your
            Destinations. This will also clear the redis cache and rest all
            resque stats and locks.
          </small>
        </Card.Subtitle>

        <br />

        <Card.Text>
          <LoadingButton
            onClick={reset}
            size="sm"
            variant="outline-danger"
            disabled={loading}
          >
            Reset Data
          </LoadingButton>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
