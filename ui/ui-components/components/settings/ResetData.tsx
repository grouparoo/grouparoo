import { useState } from "react";
import { Card } from "react-bootstrap";
import { useApi } from "../../contexts/api";
import { successHandler } from "../../eventHandlers";
import { Actions } from "../../utils/apiData";
import LoadingButton from "../LoadingButton";

export default function ResetData() {
  const { client } = useApi();
  const [loading, setLoading] = useState(false);

  async function reset() {
    if (!window.confirm("Are you sure?")) return;

    setLoading(true);
    const response: Actions.ResetData = await client.request(
      "delete",
      `/reset/data`
    );
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
            Imported Data includes Records, GroupMembers, Imports, and Exports.
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
            loading={loading}
          >
            Reset Data
          </LoadingButton>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
