import Head from "next/head";
import Link from "next/link";
import ProfileTabs from "../../../components/tabs/profile";
import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form, ListGroup } from "react-bootstrap";
import LoadingButton from "../../../components/loadingButton";
import { useRouter } from "next/router";
import ProfileImageFromEmail from "../../../components/visualizations/profileImageFromEmail";
import Moment from "react-moment";
import LoadingTable from "../../../components/loadingTable";
import getProfileDisplayName from "../../../components/profile/getProfileDisplayName";
import ArrayProfilePropertyList from "../../../components/profile/arrayProfilePropertyList";
import { Models, Actions } from "../../../utils/apiData";
import { ErrorHandler } from "../../../utils/errorHandler";
import { SuccessHandler } from "../../../utils/successHandler";
import { ProfileHandler } from "../../../utils/profileHandler";
import StateBadge from "../../../components/stateBadge";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    profilePropertyRules,
    profileHandler,
    allGroups,
    sources,
    apps,
  }: {
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
    profilePropertyRules: Models.ProfilePropertyRuleType[];
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
  const [properties, setProperties] = useState<
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
      `/profile/${profile.guid}`
    );
    if (response?.profile) {
      profileHandler.set(response.profile);
      setProfile(response.profile);
      setProperties(response.profile.properties);
      setGroups(response.groups);
    }
    setLoading(false);
  }

  async function importAndExport() {
    setLoading(true);
    successHandler.set({ message: "enqueued for import..." });
    const response: Actions.ProfileImportAndExport = await execApi(
      "post",
      `/profile/${profile.guid}/importAndExport`
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
      const response: Actions.ProfileDestroy = await execApi(
        "delete",
        `/profile/${profile.guid}`
      );
      if (response) {
        router.push("/profiles");
      } else {
        setLoading(false);
      }
    }
  }

  async function handleRemove(group) {
    setLoading(true);
    const response: Actions.GroupRemoveProfile = await execApi(
      "put",
      `/group/${group.guid}/remove`,
      {
        profileGuid: profile.guid,
      }
    );
    if (response) {
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
    const groupGuid = form.elements[0].value;

    setLoading(true);
    const response: Actions.GroupAddProfile = await execApi(
      "put",
      `/group/${groupGuid}/add`,
      {
        profileGuid: profile.guid,
      }
    );
    if (response) {
      successHandler.set({
        message: `Profile added to Group!`,
      });
      load();
    }
    setLoading(false);
  }

  async function handleUpdate(key) {
    const hash = {};
    hash[key] = properties[key].values;
    setLoading(true);
    const response: Actions.ProfileEdit = await execApi(
      "put",
      `/profile/${profile.guid}`,
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

  const keys = Object.keys(properties);
  keys.sort();

  const updateExistingProperty = async (event) => {
    const _properties = Object.assign({}, properties);
    _properties[event.target.id].values = [event.target.value];
    setProperties(_properties);
  };

  // const manualProperties = [];
  const manualAppGuids = apps
    .filter((app) => app.type === "manual")
    .map((app) => app.guid);
  const manualSourceGuids = sources
    .filter((source) => manualAppGuids.includes(source.appGuid))
    .map((source) => source.guid);
  const manualProperties = profilePropertyRules
    .filter((p) => manualSourceGuids.includes(p.sourceGuid))
    .map((p) => p.key);

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
              <StateBadge state={profile.state} />
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
        <Col md={3}>
          <h3>Groups</h3>

          {groups.length > 0 ? null : <p>None</p>}

          <ListGroup>
            {groups.map((group) => (
              <ListGroup.Item key={`groupMember-${group.guid}`} variant="info">
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

          <Form onSubmit={(event) => handleAdd(event)} autoComplete="off">
            <Row>
              <Col md={9}>
                <Form.Group controlId="groupGuid">
                  <Form.Label>Add Group</Form.Label>
                  <Form.Control as="select" disabled={loading}>
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
                              disabled={loading}
                              value={
                                properties[key].values.length === 0
                                  ? ""
                                  : properties[key].values.join(", ")
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
                              type={properties[key].type}
                              values={properties[key].values}
                            />
                          </strong>
                        </span>
                      )}
                    </td>
                    <td>
                      <code>
                        {properties[key].type}
                        {properties[key].isArray ? "[]" : null}
                      </code>
                    </td>
                    <td>
                      <StateBadge state={properties[key].state} />
                    </td>
                    <td>
                      {properties[key].valueChangedAt ? (
                        <Moment fromNow>
                          {properties[key].valueChangedAt}
                        </Moment>
                      ) : (
                        "Never"
                      )}
                    </td>
                    <td>
                      {properties[key].confirmedAt ? (
                        <Moment fromNow>{properties[key].confirmedAt}</Moment>
                      ) : (
                        "Never"
                      )}
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
  const { sources } = await execApi("get", `/sources`);
  return { profile, profilePropertyRules, groups, allGroups, sources, apps };
};
