import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment } from "react";
import { Row, Col, Card } from "react-bootstrap";
import ProfileEditForm from "../../components/forms/profile/edit";
import ProfilePropertiesList from "../../components/lists/profileProperties";
import ProfileGroupsList from "../../components/lists/profileGroups";
import LogsList from "../../components/lists/logs";
import ExportsList from "../../components/lists/exports";

export default function (props) {
  return (
    <TabbedContainer
      errorHandler={props.errorHandler}
      apiVersion={props.apiVersion}
      type="profile"
      defaultTab="edit"
      query={props.query}
    >
      <Fragment key="edit">
        <h1>Edit Profile</h1>
        <Row>
          <Col md={8}>
            <Card border="success">
              <Card.Body>
                <ProfileEditForm {...props} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <ProfileGroupsList {...props} />
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <br />
            <h2>Properties</h2>
            <ProfilePropertiesList {...props} />
          </Col>
        </Row>
      </Fragment>

      <Fragment key="exports">
        <ExportsList {...props} />
      </Fragment>

      <Fragment key="logs">
        <LogsList {...props} ownerType={"profile"} />
      </Fragment>
    </TabbedContainer>
  );
}
