import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment } from "react";
import { Card } from "react-bootstrap";
import AppEditForm from "../../components/forms/app/edit";

export default function (props) {
  return (
    <TabbedContainer
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
