import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import AppEditForm from "../../components/forms/app/edit";
import { useApi } from "../../hooks/useApi";

export default function (props) {
  const [app, setApp] = useState({ name: "" });
  const { execApi } = useApi(props.errorHandler);

  useEffect(() => {
    load();

    props.appHandler.subscribe("tabs", () => {
      load();
    });

    return () => {
      props.appHandler.unsubscribe("tabs");
    };
  }, []);

  async function load() {
    const response = await execApi(
      "get",
      `/api/${props.apiVersion}/app/${props.query.guid}`
    );
    if (response?.app) {
      setApp(response.app);
    }
  }

  return (
    <TabbedContainer
      name={app.name}
      errorHandler={props.errorHandler}
      apiVersion={props.apiVersion}
      type="app"
      defaultTab="edit"
      query={props.query}
    >
      <Fragment key="edit">
        <Card border="success">
          <Card.Body>
            <AppEditForm {...props} />
          </Card.Body>
        </Card>
      </Fragment>
    </TabbedContainer>
  );
}
