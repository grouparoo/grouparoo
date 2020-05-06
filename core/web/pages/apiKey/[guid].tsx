import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ApiKeyEditForm from "../../components/forms/apiKey/edit";
import { useApi } from "./../../hooks/useApi";

export default function (props) {
  const [apiKey, setApiKey] = useState({ name: "", guid: "" });
  const { execApi } = useApi(props.errorHandler);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const response = await execApi(
      "get",
      `/api/${props.apiVersion}/apiKey/${props.query.guid}`
    );
    if (response?.apiKey) {
      setApiKey(response.apiKey);
    }
  }
  return (
    <TabbedContainer
      name={apiKey.name}
      errorHandler={props.errorHandler}
      apiVersion={props.apiVersion}
      type="apiKey"
      defaultTab="edit"
      query={props.query}
    >
      <Fragment key="edit">
        <Card border="success">
          <Card.Body>
            <h1>API Key</h1>
            <ApiKeyEditForm {...props} />
          </Card.Body>
        </Card>
      </Fragment>
    </TabbedContainer>
  );
}
