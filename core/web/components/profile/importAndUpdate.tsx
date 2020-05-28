import { Button } from "react-bootstrap";
import { useApi } from "../../hooks/useApi";

export default function (props) {
  const { errorHandler, successHandler } = props;
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
    <Button onClick={importAndUpdate} variant="secondary">
      Import and Update all Profiles
    </Button>
  );
}
