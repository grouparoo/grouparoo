import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment } from "react";
import { Card } from "react-bootstrap";
import ApiKeyEditForm from "../../components/forms/apiKey/edit";
import { useApi } from "./../../hooks/useApi";

export default function Page(props) {
  return (
    <TabbedContainer
      name={props.apiKey.name}
      errorHandler={props.errorHandler}
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

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(null, ctx?.req?.headers?.cookie);
  const { guid } = ctx.query;
  const { apiKey } = await execApi("get", `/apiKey/${guid}`);
  return { apiKey };
};
