import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment, useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import RunEdit from "../../components/forms/run/edit";
import { useApi } from "./../../hooks/useApi";

export default function (props) {
  const [run, setRun] = useState({ guid: "" });
  const { execApi } = useApi(props.errorHandler);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response = await execApi(
      "get",
      `/api/${props.apiVersion}/run/${props.query.guid}`
    );
    if (response?.run) {
      setRun(response.run);
    }
  }

  return (
    <TabbedContainer
      name={run.guid}
      errorHandler={props.errorHandler}
      apiVersion={props.apiVersion}
      type="run"
      defaultTab="edit"
      query={props.query}
    >
      <Fragment key="edit">
        <Card border="success">
          <Card.Body>
            <RunEdit {...props} />
          </Card.Body>
        </Card>
      </Fragment>
    </TabbedContainer>
  );
}
