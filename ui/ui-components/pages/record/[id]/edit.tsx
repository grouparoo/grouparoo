import Head from "next/head";
import EnterpriseLink from "../../../components/enterpriseLink";
import RecordTabs from "../../../components/tabs/record";
import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form, ListGroup, Alert, Button } from "react-bootstrap";
import LoadingButton from "../../../components/loadingButton";
import { useRouter } from "next/router";
import RecordImageFromEmail from "../../../components/visualizations/recordImageFromEmail";
import LoadingTable from "../../../components/loadingTable";
import { getRecordPageTitle } from "../../../components/record/getRecordDisplayName";
import ArrayRecordPropertyList from "../../../components/record/arrayRecordPropertyList";
import { Models, Actions } from "../../../utils/apiData";
import { ErrorHandler } from "../../../utils/errorHandler";
import { SuccessHandler } from "../../../utils/successHandler";
import { RecordHandler } from "../../../utils/recordHandler";
import StateBadge from "../../../components/badges/stateBadge";
import { formatTimestamp } from "../../../utils/formatTimestamp";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    properties,
    recordHandler,
    allGroups,
  }: {
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
    properties: Models.PropertyType[];
    allGroups: Models.GroupType[];
    apps: Models.AppType[];
    sources: Models.SourceType[];
    recordHandler: RecordHandler;
  } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [record, setRecord] = useState<Models.GrouparooRecordType>(
    props.record
  );
  const [groups, setGroups] = useState<Models.GroupType[]>(props.groups);
  const [recordProperties, setRecordProperties] = useState<
    Models.GrouparooRecordType["properties"]
  >(props.record.properties);

  useEffect(() => {
    recordHandler.subscribe("record-edit", (_record) => setRecord(_record));

    return () => {
      recordHandler.unsubscribe("record-edit");
    };
  }, []);

  async function load() {
    setLoading(true);
    const response: Actions.RecordView = await execApi(
      "get",
      `/record/${record.id}`
    );
    if (response?.record) {
      recordHandler.set(response.record);
      setRecord(response.record);
      setRecordProperties(response.record.properties);
      setGroups(response.groups);
    }
    setLoading(false);
  }

  async function importAndExport() {
    setLoading(true);
    successHandler.set({ message: "enqueued for import..." });
    const response: Actions.RecordImportAndExport = await execApi(
      "post",
      `/record/${record.id}/importAndExport`
    );
    if (response?.record) {
      successHandler.set({ message: "Import and Export Complete!" });
      load();
    }
    setLoading(false);
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const { success }: Actions.RecordDestroy = await execApi(
        "delete",
        `/record/${record.id}`
      );
      if (success) {
        router.push("/records");
      } else {
        setLoading(false);
      }
    }
  }

  async function handleRemove(group) {
    setLoading(true);
    const { success }: Actions.GroupRemoveRecord = await execApi(
      "put",
      `/group/${group.id}/remove`,
      {
        recordId: record.id,
      }
    );
    if (success) {
      successHandler.set({
        message: `Record Removed from Group ${group.name}`,
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
    const { success }: Actions.GroupAddRecord = await execApi(
      "put",
      `/group/${groupId}/add`,
      {
        recordId: record.id,
      }
    );
    if (success) {
      successHandler.set({
        message: `Record added to Group!`,
      });
      load();
    }
    setLoading(false);
  }

  const groupMembershipIds = groups.map((g) => g.id);

  const uniqueRecordProperties = [];
  let email: string;
  properties.forEach((rule) => {
    if (rule.unique) {
      uniqueRecordProperties.push(rule.key);
    }

    if (rule.type === "email" && record.properties[rule.key]) {
      email = record.properties[rule.key].values.join(", ");
    }
  });

  if (properties.length === 0) {
    return (
      <>
        <Alert variant="primary">
          There are no Properties added yet.
          <br />
          <br />
          <Button size="sm" href="/properties">
            Add a Property
          </Button>
        </Alert>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {getRecordPageTitle(record)}</title>
      </Head>

      <RecordTabs record={record} />

      <table>
        <tbody>
          <tr>
            <td valign="top" style={{ textAlign: "center", paddingRight: 20 }}>
              <RecordImageFromEmail
                width={100}
                loading={loading}
                email={email}
              />
            </td>
            <td valign="top">
              {uniqueRecordProperties.map((key) => {
                return (
                  <h3 key={`recordHeader-${key}`}>
                    <span className="text-muted">{key}: </span>
                    {record.properties[key]
                      ? record.properties[key].values.join(", ")
                      : null}
                  </h3>
                );
              })}
              <span className="text-muted">Created: </span>
              {formatTimestamp(record.createdAt)}/{" "}
              <span className="text-muted">Updated: </span>
              {formatTimestamp(record.updatedAt)}
              <br />
              <StateBadge state={record.state} />
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

              {process.env.GROUPAROO_UI_EDITION === "config" ? (
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
              ) : null}
            </Col>
          </Row>
        </Col>
      </Row>

      <br />
      <br />

      <Row>
        <Col>
          <h2>Record Properties</h2>
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
              {Object.keys(recordProperties)
                .sort()
                .map((key) => {
                  const recordProperty = recordProperties[key];
                  return (
                    <tr key={`property-${key}`}>
                      <td>
                        <span style={{ fontWeight: "bold" }}>{key}</span>
                      </td>
                      <td>
                        <span>
                          <strong>
                            <ArrayRecordPropertyList
                              type={recordProperty.type}
                              values={recordProperty.values}
                            />
                          </strong>
                        </span>
                      </td>
                      <td>
                        <code>
                          {recordProperty.type}
                          {recordProperty.isArray ? "[]" : null}
                        </code>
                      </td>
                      <td>
                        <StateBadge state={recordProperty.state} />
                      </td>
                      <td>
                        {recordProperty.valueChangedAt
                          ? formatTimestamp(recordProperty.valueChangedAt)
                          : "Never"}
                      </td>
                      <td>
                        {recordProperty.confirmedAt
                          ? formatTimestamp(recordProperty.confirmedAt)
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
  const { record, groups } = await execApi("get", `/record/${id}`);
  const { properties } = await execApi("get", `/properties`);
  const { groups: allGroups } = await execApi("get", `/groups`);
  const { apps } = await execApi("get", `/apps`);
  const { sources } = await execApi("get", `/sources`);
  return { record, properties, groups, allGroups, sources, apps };
};
