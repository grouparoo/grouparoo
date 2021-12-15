import { UseApi } from "../../hooks/useApi";
import { useState } from "react";
import { Card } from "react-bootstrap";
import LoadingButton from "../LoadingButton";
import { Actions } from "../../utils/apiData";
import { ErrorHandler } from "../../utils/errorHandler";
import { SuccessHandler } from "../../utils/successHandler";

export default function ResetCluster(props) {
  const {
    errorHandler,
    successHandler,
  }: { errorHandler: ErrorHandler; successHandler: SuccessHandler } = props;
  const [loading, setLoading] = useState(false);
  const { execApi } = UseApi(props, errorHandler);

  async function reset() {
    if (!window.confirm("Are you sure?")) return;
    if (window.prompt("Type 'destroy' to proceed") !== "destroy") {
      return errorHandler.set({ message: "not proceeding" });
    }

    setLoading(true);
    const response: Actions.ResetCluster = await execApi(
      "delete",
      `/reset/cluster`
    );
    if (response?.success) {
      successHandler.set({ message: `Cluster Reset!` });
    }
    setLoading(false);
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
            This will erase all of your Apps, Sources, Destinations, Record
            Properties, Properties, Groups and related data. The only data that
            will be kept will be your Settings, Teams, Team Members, and
            ApiKeys. This action will not remove data from your Destinations.
          </small>
        </Card.Subtitle>

        <br />

        <Card.Text>
          <LoadingButton
            onClick={reset}
            loading={loading}
            size="sm"
            variant="outline-danger"
          >
            Reset Cluster
          </LoadingButton>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
