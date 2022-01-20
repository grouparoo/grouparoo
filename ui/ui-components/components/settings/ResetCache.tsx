import { useState } from "react";
import { Card } from "react-bootstrap";
import { useApi } from "../../contexts/api";
import { successHandler } from "../../eventHandlers";
import { Actions } from "../../utils/apiData";
import LoadingButton from "../LoadingButton";

export default function ResetCache() {
  const { client } = useApi();
  const [loading, setLoading] = useState(false);

  async function reset() {
    if (!window.confirm("Are you sure?")) return;

    setLoading(true);
    const response: Actions.ResetCache = await client.request(
      "delete",
      `/reset/cache`
    );
    if (response?.success) {
      successHandler.set({ message: `Cache Reset!` });
    }
    setLoading(false);
  }

  return (
    <Card border="warning">
      <Card.Body>
        <Card.Title>Reset Cache</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Empty the Redis and Resque Cache for your Grouparoo Cluster.
          <br />
          <br />
          <small>
            This will clear the redis cache and rest all resque stats and locks.
            This action should cause no data loss, but may result in slower
            responses for a short time.
          </small>
        </Card.Subtitle>

        <br />

        <Card.Text>
          <LoadingButton
            onClick={reset}
            size="sm"
            variant="outline-warning"
            loading={loading}
          >
            Reset Cache
          </LoadingButton>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
