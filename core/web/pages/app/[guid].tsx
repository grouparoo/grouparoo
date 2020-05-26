import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import AppEditForm from "../../components/forms/app/edit";
import { useApi } from "../../hooks/useApi";

import { AppAPIData } from "../../utils/apiData";

export default function Page(props) {
  const { app } = props;

  return (
    <TabbedContainer
      name={app.name}
      errorHandler={props.errorHandler}
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

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(null, ctx?.req?.headers?.cookie);
  const { app } = await execApi("get", `/app/${guid}`);
  const { types } = await execApi("get", `/appOptions`);
  const { options } = await execApi("get", `/app/${guid}/optionOptions`);
  return { app, types, optionOptions: options };
};
