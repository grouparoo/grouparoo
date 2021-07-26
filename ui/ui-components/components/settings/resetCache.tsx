import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { Card } from "react-bootstrap";
import LoadingButton from "../loadingButton";
import { Actions } from "../../utils/apiData";
import { ErrorHandler } from "../../utils/errorHandler";
import { SuccessHandler } from "../../utils/successHandler";

export default function ResetCache(props) {
  const {
    errorHandler,
    successHandler,
  }: { errorHandler: ErrorHandler; successHandler: SuccessHandler } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);

  async function reset() {
    if (!window.confirm("Are you sure?")) return;

    setLoading(true);
    const response: Actions.ResetCache = await execApi(
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
            disabled={loading}
          >
            Reset Cache
          </LoadingButton>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
