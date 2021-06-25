import Head from "next/head";
import EnterpriseLink from "../../../components/enterpriseLink";
import ProfileTabs from "../../../components/tabs/profile";
import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form, ListGroup } from "react-bootstrap";
import LoadingButton from "../../../components/loadingButton";
import { useRouter } from "next/router";
import ProfileImageFromEmail from "../../../components/visualizations/profileImageFromEmail";
import LoadingTable from "../../../components/loadingTable";
import { getProfilePageTitle } from "../../../components/profile/getProfileDisplayName";
import ArrayProfilePropertyList from "../../../components/profile/arrayProfilePropertyList";
import { Models, Actions } from "../../../utils/apiData";
import { ErrorHandler } from "../../../utils/errorHandler";
import { SuccessHandler } from "../../../utils/successHandler";
import { ProfileHandler } from "../../../utils/profileHandler";
import StateBadge from "../../../components/badges/stateBadge";
import { formatTimestamp } from "../../../utils/formatTimestamp";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    properties,
    profileHandler,
    allGroups,
    sources,
    apps,
  }: {
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
    properties: Models.PropertyType[];
    allGroups: Models.GroupType[];
    apps: Models.AppType[];
    sources: Models.SourceType[];
    profileHandler: ProfileHandler;
  } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<Models.ProfileType>(props.profile);
  const [groups, setGroups] = useState<Models.GroupType[]>(props.groups);
  const [profileProperties, setProfileProperties] = useState<
    Models.ProfileType["properties"]
  >(props.profile.properties);

  useEffect(() => {
    profileHandler.subscribe("profile-edit", (_profile) =>
      setProfile(_profile)
    );

    return () => {
      profileHandler.unsubscribe("profile-edit");
    };
  }, []);

  async function load() {
    setLoading(true);
    const response: Actions.ProfileView = await execApi(
      "get",
      `/profile/${profile.id}`
    );
    if (response?.profile) {
      profileHandler.set(response.profile);
      setProfile(response.profile);
      setProfileProperties(response.profile.properties);
      setGroups(response.groups);
    }
    setLoading(false);
  }

  async function importAndExport() {
    setLoading(true);
    successHandler.set({ message: "enqueued for import..." });
    const response: Actions.ProfileImportAndExport = await execApi(
      "post",
      `/profile/${profile.id}/importAndExport`
    );
    if (response?.profile) {
      successHandler.set({ message: "Import and Export Complete!" });
      load();
    }
    setLoading(false);
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const { success }: Actions.ProfileDestroy = await execApi(
        "delete",
        `/profile/${profile.id}`
      );
      if (success) {
        router.push("/profiles");
      } else {
        setLoading(false);
      }
    }
  }

  async function handleRemove(group) {
    setLoading(true);
    const { success }: Actions.GroupRemoveProfile = await execApi(
      "put",
      `/group/${group.id}/remove`,
      {
        profileId: profile.id,
      }
    );
    if (success) {
      successHandler.set({
        message: `Profile Removed from Group ${group.name}`,
      });
      load();
    }
    setLoading(false);
  }

  async function handleAdd(event) {
    const form = event.currentTarget;
    event.preventDefault();
    const groupId = form.elements[0].value;

    setLoading(true);
    const { success }: Actions.GroupAddProfile = await execApi(
      "put",
      `/group/${groupId}/add`,
      {
        profileId: profile.id,
      }
    );
    if (success) {
      successHandler.set({
        message: `Profile added to Group!`,
      });
      load();
    }
    setLoading(false);
  }

  async function handleUpdate(key) {
    const hash = {};
    hash[key] = profileProperties[key].values;
    setLoading(true);
    const response: Actions.ProfileEdit = await execApi(
      "put",
      `/profile/${profile.id}`,
      {
        properties: hash,
      }
    );
    if (response?.profile?.properties) {
      successHandler.set({ message: `property ${key} updated` });
      load();
    }
    setLoading(false);
  }

  const updateExistingProperty = async (event) => {
    const _profileProperties = Object.assign({}, profileProperties);
    _profileProperties[event.target.id].values = [event.target.value];
    setProfileProperties(_profileProperties);
  };

  // const manualProperties = [];
  const manualAppIds = apps
    .filter((app) => app.type === "manual")
    .map((app) => app.id);
  const manualSourceIds = sources
    .filter((source) => manualAppIds.includes(source.appId))
    .map((source) => source.id);
  const manualProperties = properties
    .filter((p) => manualSourceIds.includes(p.sourceId))
    .map((p) => p.key);

  const groupMembershipIds = groups.map((g) => g.id);

  const uniqueProfileProperties = [];
  let email: string;
  properties.forEach((rule) => {
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
        <title>Grouparoo: {getProfilePageTitle(profile)}</title>
      </Head>

      <ProfileTabs profile={profile} />

      <table>
        <tbody>
          <tr>
            <td valign="top" style={{ textAlign: "center", paddingRight: 20 }}>
              <ProfileImageFromEmail
                width={100}
                loading={loading}
                email={email}
              />
            </td>
            <td valign="top">
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
              <span className="text-muted">Created: </span>
              {formatTimestamp(profile.createdAt)}/{" "}
              <span className="text-muted">Updated: </span>
              {formatTimestamp(profile.updatedAt)}
              <br />
              <StateBadge state={profile.state} />
            </td>
          </tr>
        </tbody>
      </table>

      <Row>
        <Col>
          <Row>
            <Col>
              <LoadingButton
                disabled={loading}
                onClick={() => {
                  importAndExport();
                }}
              >
                Import and Export
              </LoadingButton>

              <br />
              <br />

              <LoadingButton
                disabled={loading}
                variant="danger"
                size="sm"
                onClick={() => {
                  handleDelete();
                }}
              >
                Delete
              </LoadingButton>
            </Col>
          </Row>
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
                <th>State</th>
                <th>Changed At</th>
                <th>Confirmed At</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(profileProperties)
                .sort()
                .map((key) => {
                  const profileProperty = profileProperties[key];
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
                                disabled={loading}
                                value={
                                  profileProperty.values.length === 0
                                    ? ""
                                    : profileProperty.values.join(", ")
                                }
                                onChange={(e) => updateExistingProperty(e)}
                              />
                            </Form.Group>

                            <LoadingButton
                              size="sm"
                              type="submit"
                              variant="info"
                              disabled={loading}
                              onClick={() => {
                                handleUpdate(key);
                              }}
                            >
                              Update
                            </LoadingButton>
                          </Form>
                        ) : (
                          <span>
                            <strong>
                              <ArrayProfilePropertyList
                                type={profileProperty.type}
                                values={profileProperty.values}
                              />
                            </strong>
                          </span>
                        )}
                      </td>
                      <td>
                        <code>
                          {profileProperty.type}
                          {profileProperty.isArray ? "[]" : null}
                        </code>
                      </td>
                      <td>
                        <StateBadge state={profileProperty.state} />
                      </td>
                      <td>
                        {profileProperty.valueChangedAt
                          ? formatTimestamp(profileProperty.valueChangedAt)
                          : "Never"}
                      </td>
                      <td>
                        {profileProperty.confirmedAt
                          ? formatTimestamp(profileProperty.confirmedAt)
                          : "Never"}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </LoadingTable>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3>Groups</h3>

          {groups.length > 0 ? null : <p>None</p>}

          <ListGroup>
            {groups.map((group) => (
              <ListGroup.Item key={`groupMember-${group.id}`} variant="info">
                {group.type === "manual" ? (
                  <>
                    <LoadingButton
                      disabled={loading}
                      size="sm"
                      variant="danger"
                      onClick={() => {
                        handleRemove(group);
                      }}
                    >
                      X
                    </LoadingButton>
                    &nbsp; &nbsp;
                  </>
                ) : null}
                {process.env.GROUPAROO_UI_EDITION !== "config" ? (
                  <EnterpriseLink
                    href="/group/[id]/members"
                    as={`/group/${group.id}/members`}
                  >
                    <a>{group.name}</a>
                  </EnterpriseLink>
                ) : (
                  <span>{group.name}</span>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>

          <hr />
          {process.env.GROUPAROO_UI_EDITION === "config" ? null : (
            <Form onSubmit={(event) => handleAdd(event)} autoComplete="off">
              <Row>
                <Col md={9}>
                  <Form.Group controlId="groupId">
                    <Form.Label>Add Group</Form.Label>
                    <Form.Control as="select" disabled={loading}>
                      {allGroups.map((group) => {
                        const disabled =
                          group.type !== "manual" ||
                          groupMembershipIds.includes(group.id);
                        return (
                          <option
                            disabled={disabled}
                            value={group.id}
                            key={`group-${group.id}`}
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
                  <LoadingButton
                    variant="outline-primary"
                    size="sm"
                    type="submit"
                    disabled={loading}
                  >
                    Add
                  </LoadingButton>
                </Col>
              </Row>
            </Form>
          )}
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = useApi(ctx);
  const { profile, groups } = await execApi("get", `/profile/${id}`);
  const { properties } = await execApi("get", `/properties`);
  const { groups: allGroups } = await execApi("get", `/groups`);
  const { apps } = await execApi("get", `/apps`);
  const { sources } = await execApi("get", `/sources`);
  return { profile, properties, groups, allGroups, sources, apps };
};
