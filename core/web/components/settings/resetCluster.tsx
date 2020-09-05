import { useApi } from "../../hooks/useApi";
import { Button, Card } from "react-bootstrap";

export default function ResetCluster(props) {
  const { errorHandler, successHandler } = props;
  const { execApi } = useApi(props, errorHandler);

  async function resetCluster() {
    if (!window.confirm("Are you sure?")) return;
    if (window.prompt("Type 'destroy' to proceed") !== "destroy") {
      return errorHandler.set({ error: "not proceeding" });
    }

    const response = await execApi("delete", `/cluster`);
    if (response?.success) {
      successHandler.set({ message: `Cluster Reset!` });
    }
  }

  return (
    <Card border="danger">
      <Card.Body>
        <Card.Title>Reset Cluster</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Erase your Grouparoo Cluster.
          <br />
          <br />
          <small>
            This will erase all of your Apps, Sources, Destinations, Profile
            Properties, Profile Property Rules, Groups and related data. The
            only data that will be kept will be your Teams and Team Members.
            This action will not remove data from your Destinations.
          </small>
        </Card.Subtitle>

        <br />

        <Card.Text>
          <Button onClick={resetCluster} size="sm" variant="outline-danger">
            Reset Cluster
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
