import { useApi } from "../../hooks/useApi";
import { Button, Card } from "react-bootstrap";

export default function ClearCache(props) {
  const { errorHandler, successHandler } = props;
  const { execApi } = useApi(props, errorHandler);

  async function resetCluster() {
    if (!window.confirm("Are you sure?")) return;

    const response = await execApi("delete", `/cluster/cache`);
    if (response?.success) {
      successHandler.set({ message: `Cache Cleared!` });
    }
  }

  return (
    <Card border="warning">
      <Card.Body>
        <Card.Title>Clear Cache</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Empty the Redis Cache for your Grouparoo Cluster.
          <br />
          <br />
          <small>
            This action should cause no data loss, but may result in slower
            responses for a short time.
          </small>
        </Card.Subtitle>

        <br />

        <Card.Text>
          <Button onClick={resetCluster} size="sm" variant="outline-warning">
            Clear Cache
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
