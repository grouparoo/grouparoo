import { useApi } from "../../hooks/useApi";
import { useState } from "react";
import { Card } from "react-bootstrap";
import LoadingButton from "../loadingButton";
import { Actions } from "../../utils/apiData";
import { ErrorHandler } from "../../utils/errorHandler";
import { SuccessHandler } from "../../utils/successHandler";

export default function ImportAndUpdateProfile(props) {
  const {
    errorHandler,
    successHandler,
  }: { errorHandler: ErrorHandler; successHandler: SuccessHandler } = props;
  const [loading, setLoading] = useState(false);
  const { execApi } = useApi(props, errorHandler);

  async function importAndUpdate() {
    if (window.confirm("Are you sure?")) {
      setLoading(true);
      const response: Actions.ProfilesImportAndUpdate = await execApi(
        "put",
        `/profiles/importAndUpdate`
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
