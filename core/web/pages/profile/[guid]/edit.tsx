import Head from "next/head";
import Link from "next/link";
import ProfileTabs from "../../../components/tabs/profile";
import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Button, Form, ListGroup } from "react-bootstrap";
import Router from "next/router";
import ProfileImageFromEmail from "../../../components/visualizations/profileImageFromEmail";
import Moment from "react-moment";
import LoadingTable from "../../../components/loadingTable";
import getProfileDisplayName from "../../../components/profile/getProfileDisplayName";
import ArrayProfilePropertyList from "../../../components/profile/arrayProfilePropertyList";

import { ProfileAPIData, GroupAPIData } from "../../../utils/apiData";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    profilePropertyRules,
    profileHandler,
    allGroups,
    apps,
  } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<ProfileAPIData>(props.profile);
  const [groups, setGroups] = useState<[GroupAPIData]>(props.groups);
  const [properties, setProperties] = useState<ProfileAPIData["properties"]>(
    props.profile.properties
  );

  useEffect(() => {
    profileHandler.subscribe("profile-edit", (_profile) =>
      setProfile(_profile)
    );

    return () => {
      profileHandler.unsubscribe("profile-edit", load.bind(this));
    };
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/profile/${profile.guid}`);
    setLoading(false);
    if (response?.profile) {
      profileHandler.set(response.profile);
      setProfile(response.profile);
      setProperties(response.profile.properties);
      setGroups(response.groups);
    }
  }

  async function importAndUpdate() {
    setLoading(true);
    successHandler.set({ message: "enqueued for import..." });
    const response = await execApi(
      "post",
      `/profile/${profile.guid}/importAndUpdate`
    );
    setLoading(false);
    if (response?.profile) {
      successHandler.set({ message: "Import and Export Complete!" });
      load();
    }
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const response = await execApi("delete", `/profile/${profile.guid}`);
      setLoading(false);
      if (response) {
        Router.push("/profiles");
      }
    }
  }

  async function handleRemove(group) {
    const response = await execApi("put", `/group/${group.guid}/remove`, {
      profileGuid: profile.guid,
    });
    if (response) {
      successHandler.set({
        message: `Profile Removed from Group ${group.name}`,
      });
      load();
    }
  }

  async function handleAdd(event) {
    const form = event.currentTarget;
    event.preventDefault();
    const groupGuid = form.elements[0].value;

    const response = await execApi("put", `/group/${groupGuid}/add`, {
      profileGuid: profile.guid,
    });
    if (response) {
      successHandler.set({
        message: `Profile added to Group!`,
      });
      load();
    }
  }

  async function handleUpdate(key) {
    const hash = {};
    hash[key] = properties[key].values;
    setLoading(true);
    const response = await execApi("put", `/profile/${profile.guid}`, {
      properties: hash,
    });
    setLoading(false);
    if (response?.profile?.properties) {
      successHandler.set({ message: `property ${key} updated` });
      load();
    }
  }

  const keys = Object.keys(properties);
  keys.sort();

  const updateExistingProperty = async (event) => {
    const _properties = Object.assign({}, properties);
    _properties[event.target.id].values = [event.target.value];
    setProperties(_properties);
  };

  const manualProperties = [];
  const manualAppGuids = apps
    .filter((app) => app.type === "manual")
    .map((app) => app.guid);

  profilePropertyRules.forEach((rule) => {
    if (manualAppGuids.includes(rule.source.app.guid)) {
      manualProperties.push(rule.key);
    }
  });

  const groupMembershipGuids = groups.map((g) => g.guid);

  const uniqueProfileProperties = [];
  let email: string;
  profilePropertyRules.forEach((rule) => {
    if (rule.unique) {
      uniqueProfileProperties.push(rule.key);
    }

    if (rule.type === "email" && profile.properties[rule.key]) {
      email = profile.properties[rule.key].values.join(", ");
    }
  });

  return (
    <>
      <Head>
        <title>Grouparoo: {getProfileDisplayName(profile)}</title>
      </Head>

      <ProfileTabs profile={profile} />

      <Row>
        <Col md={9}>
          <Row>
            <Col md={2}>
              <ProfileImageFromEmail loading={loading} email={email} />
            </Col>
            <Col md={10}>
              <span className="text-muted">Created At: </span>
              <Moment fromNow>{profile.createdAt}</Moment>
              <br />
              <span className="text-muted">Updated At: </span>
              <Moment fromNow>{profile.updatedAt}</Moment>
              <br />
              <br />
              {uniqueProfileProperties.map((key) => {
                return (
                  <h3 key={`profileHeader-${key}`}>
                    <span className="text-muted">{key}: </span>
                    {profile.properties[key]
                      ? profile.properties[key].values.join(", ")
                      : null}
                  </h3>
                );
              })}
              <br />
              <Button
                onClick={() => {
                  importAndUpdate();
                }}
              >
                Import and Export
              </Button>

              <br />
              <br />

              <Button
                variant="danger"
                size="sm"
                onClick={() => {
                  handleDelete();
                }}
              >
                Delete
              </Button>
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <h3>Groups</h3>

          {groups.length > 0 ? null : <p>None</p>}

          <ListGroup>
            {groups.map((group) => (
              <ListGroup.Item key={`groupMember-${group.guid}`} variant="info">
                {group.type === "manual" ? (
                  <>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => {
                        handleRemove(group);
                      }}
                    >
                      X
                    </Button>
                    &nbsp; &nbsp;
                  </>
                ) : null}
                <Link
                  href="/group/[guid]/members"
                  as={`/group/${group.guid}/members`}
                >
                  <a>{group.name}</a>
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <hr />

          <Form onSubmit={(event) => handleAdd(event)}>
            <Row>
              <Col md={9}>
                <Form.Group controlId="groupGuid">
                  <Form.Label>Add Group</Form.Label>
                  <Form.Control as="select">
                    {allGroups.map((group) => {
                      const disabled =
                        group.type !== "manual" ||
                        groupMembershipGuids.includes(group.guid);
                      return (
                        <option
                          disabled={disabled}
                          value={group.guid}
                          key={`group-${group.guid}`}
                        >
                          {group.name}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={3}>
                <div style={{ paddingTop: 34 }} />
                <Button variant="outline-primary" size="sm" type="submit">
                  Add
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <br />
      <br />

      <Row>
        <Col>
          <h2>Profile Properties</h2>
          <LoadingTable loading={loading}>
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
                <th>Type</th>
                <th>Created</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {keys.map((key) => {
                return (
                  <tr key={`property-${key}`}>
                    <td>
                      <span style={{ fontWeight: "bold" }}>{key}</span>
                    </td>
                    <td>
                      {manualProperties.includes(key) ? (
                        <Form>
                          <Form.Group controlId={key}>
                            <Form.Control
                              required
                              type="text"
                              value={
                                properties[key].values.length === 0
                                  ? ""
                                  : properties[key].values.join(", ")
                              }
                              onChange={(e) => updateExistingProperty(e)}
                            />
                          </Form.Group>

                          <Button
                            size="sm"
                            type="submit"
                            variant="info"
                            onClick={() => {
                              handleUpdate(key);
                            }}
                          >
                            Update
                          </Button>
                        </Form>
                      ) : (
                        <span>
                          <strong>
                            <ArrayProfilePropertyList
                              type={properties[key].type}
                              values={properties[key].values}
                            />
                          </strong>
                        </span>
                      )}
                    </td>
                    <td>{properties[key].type}</td>
                    <td>
                      <Moment fromNow>{properties[key].createdAt}</Moment>
                    </td>
                    <td>
                      <Moment fromNow>{properties[key].updatedAt}</Moment>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </LoadingTable>
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { profile, groups } = await execApi("get", `/profile/${guid}`);
  const { profilePropertyRules } = await execApi(
    "get",
    `/profilePropertyRules`
  );
  const { groups: allGroups } = await execApi("get", `/groups`);
  const { apps } = await execApi("get", `/apps`);
  return { profile, profilePropertyRules, groups, allGroups, apps };
};

function renderProperty(values: Array<any>, type: string) {
  return values
    .map((value) => {
      if (value === true || value === false) {
        return <input type="checkbox" value={value} checked={value} readOnly />;
      } else if (type === "date") {
        return value ? new Date(value).toLocaleString() : value;
      } else {
        return value;
      }
    })
    .join(", ");
}
