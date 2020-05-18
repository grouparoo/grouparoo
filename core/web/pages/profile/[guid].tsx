import TabbedContainer from "../../components/layouts/tabbedContainer";
import { Fragment, useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import ProfileEditForm from "../../components/forms/profile/edit";
import ProfilePropertiesList from "../../components/lists/profileProperties";
import ProfileGroupsList from "../../components/lists/profileGroups";
import LogsList from "../../components/lists/logs";
import ImportsList from "../../components/lists/imports";
import ExportsList from "../../components/lists/exports";
import { useApi } from "../../hooks/useApi";

import { ProfileAPIData } from "../../utils/apiData";

export default function (props) {
  const { execApi } = useApi(props.errorHandler);
  const [profile, setProfile] = useState<ProfileAPIData>({});

  useEffect(() => {
    load();
    props.profileHandler.subscribe("tabs", () => {
      load();
    });

    return () => {
      props.profileHandler.unsubscribe("tabs");
    };
  }, []);

  async function load() {
    const response = await execApi(
      "get",
      `/api/${props.apiVersion}/profile/${props.query.guid}`
    );
    if (response?.profile) {
      setProfile(response.profile);
    }
  }

  const propertiesArray = [];
  for (const k in profile.properties) {
    const hash = profile.properties[k];
    hash["key"] = k;
    propertiesArray.push(hash);
  }

  let name = profile.guid;
  const uniqueProperties = propertiesArray.filter((prp) => prp.unique);
  if (uniqueProperties.length > 0) {
    const emails = uniqueProperties.filter((prp) => prp.type === "email");
    if (emails[0]) {
      name = emails[0].value;
    } else {
      name = uniqueProperties[0].value;
    }
  }

  return (
    <TabbedContainer
      errorHandler={props.errorHandler}
      apiVersion={props.apiVersion}
      type="profile"
      defaultTab="edit"
      query={props.query}
      name={name}
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

      <Fragment key="imports">
        <ImportsList {...props} />
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
