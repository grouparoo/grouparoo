import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment } from "react";
import { Card } from "react-bootstrap";
import SourceOverview from "../../components/forms/source/overview";
import SourceEdit from "../../components/forms/source/edit";
import SourceMapping from "../../components/forms/source/mapping";

export default function (props) {
  return (
    <TabbedContainer
      errorHandler={props.errorHandler}
      apiVersion={props.apiVersion}
      type="source"
      defaultTab="overview"
      query={props.query}
    >
      <Fragment key="overview">
        <SourceOverview {...props} />
      </Fragment>

      <Fragment key="edit">
        <Card border="success">
          <Card.Body>
            <SourceEdit {...props} />
          </Card.Body>
        </Card>
      </Fragment>

      <Fragment key="mapping">
        <SourceMapping {...props} />
      </Fragment>
    </TabbedContainer>
  );
}
