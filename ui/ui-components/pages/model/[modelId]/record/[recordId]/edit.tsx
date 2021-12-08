import Head from "next/head";
import EnterpriseLink from "../../../../../components/GrouparooLink";
import RecordTabs from "../../../../../components/tabs/Record";
import { useState, useEffect } from "react";
import { UseApi } from "../../../../../hooks/useApi";
import { Row, Col, Form, ListGroup, Alert, Button } from "react-bootstrap";
import LoadingButton from "../../../../../components/LoadingButton";
import { useRouter } from "next/router";
import LoadingTable from "../../../../../components/LoadingTable";
import { getRecordDisplayName } from "../../../../../components/record/GetRecordDisplayName";
import ArrayRecordPropertyList from "../../../../../components/record/ArrayRecordPropertyList";
import { Models, Actions } from "../../../../../utils/apiData";
import { ErrorHandler } from "../../../../../utils/errorHandler";
import { SuccessHandler } from "../../../../../utils/successHandler";
import { RecordHandler } from "../../../../../utils/recordHandler";
import StateBadge from "../../../../../components/badges/StateBadge";
import { formatTimestamp } from "../../../../../utils/formatTimestamp";
import ModelBadge from "../../../../../components/badges/ModelBadge";
import PageHeader from "../../../../../components/PageHeader";
import { NextPageContext } from "next";
import { ensureMatchingModel } from "../../../../../utils/ensureMatchingModel";
import LinkButton from "../../../../../components/LinkButton";
import { grouparooUiEdition } from "../../../../../utils/uiEdition";

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
  const { execApi } = UseApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [record, setRecord] = useState<Models.GrouparooRecordType>(
    props.record
  );
  const [groups, setGroups] = useState<Models.GroupType[]>(props.groups);
  const [destinations, setDestinations] = useState<Models.DestinationType[]>(
    props.destinations
  );
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
    updateRecordState(response);
  }

  async function importRecord() {
    setLoading(true);
    successHandler.set({ message: "enqueued for import..." });
    const response: Actions.RecordImport = await execApi(
      "post",
      `/record/${record.id}/import`
    );
    if (response?.record) {
      updateRecordState(response);
      successHandler.set({ message: "Import Complete!" });
    } else {
      load(); // we may have done a partial import
    }
  }

  async function exportRecord() {
    setLoading(true);
    successHandler.set({ message: "enqueued for export..." });
    const response: Actions.RecordImport = await execApi(
      "post",
      `/record/${record.id}/export`
    );
    if (response?.record) {
      updateRecordState(response);
      successHandler.set({ message: "Export Complete!" });
    } else {
      load(); // we may have done a partial export
    }
  }

  function updateRecordState(
    response: Actions.RecordView | Actions.RecordImport | Actions.RecordExport
  ) {
    if (response?.record) {
      recordHandler.set(response.record);
      setRecord(response.record);
      setRecordProperties(response.record.properties);
      if (response["groups"]) setGroups(response["groups"]);
      if (response["destinations"]) setDestinations(response["destinations"]);
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
        router.push(
          "/model/[modelId]/records",
          `/model/${record.modelId}/records`
        );
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

  if (properties.length === 0) {
    return (
      <>
        <Alert variant="primary">
          There are no Properties added yet.
          <br />
          <br />
          <LinkButton
            size="sm"
            href={`/model/${router.query.modelId}/properties`}
          >
            Add a Property
          </LinkButton>
        </Alert>
      </>
    );
  }

  const uniqueRecordProperties: Models.PropertyType[] = [];
  let email: string;
  properties.forEach((property) => {
    if (property.unique) uniqueRecordProperties.push(property);
    if (property.type === "email" && record.properties[property.key]) {
      email = record.properties[property.key].values.join(", ");
    }
  });

  return (
    <>
      <Head>
        <title>Grouparoo: {getRecordDisplayName(record)}</title>
      </Head>

      <RecordTabs record={record} />

      <PageHeader
        title={uniqueRecordProperties
          .sort((a, b) => {
            if (a.isPrimaryKey) return -1;
            if (b.isPrimaryKey) return 1;
            return 0;
          })
          .map((property, idx) => {
            return (
              <>
                <span className={idx === 0 ? "" : "text-muted"}>
                  {property.key}:{" "}
                </span>
                {record.properties[property.key]
                  ? record.properties[property.key].values.join(", ")
                  : null}
              </>
            );
          })}
        iconType="grouparooRecord"
        loading={loading}
        email={email}
        badges={[
          <StateBadge state={record.state} />,
          <ModelBadge modelName={record.modelName} modelId={record.modelId} />,
          record.invalid === true ? <StateBadge state="invalid" /> : null,
        ]}
      />

      <Row>
        <Col>
          <Row>
            <Col>
              <LoadingButton
                variant="outline-primary"
                loading={loading}
                onClick={() => {
                  importRecord();
                }}
              >
                Import
              </LoadingButton>{" "}
              <LoadingButton
                variant="outline-primary"
                loading={loading}
                onClick={exportRecord}
              >
                Export
              </LoadingButton>
              {grouparooUiEdition() === "config" && (
                <>
                  {" "}
                  <LoadingButton
                    loading={loading}
                    variant="outline-danger"
                    onClick={() => {
                      handleDelete();
                    }}
                  >
                    Remove Sample Record
                  </LoadingButton>
                </>
              )}
            </Col>
          </Row>
        </Col>
      </Row>

      <br />

      <Row>
        <Col>
          <span className="text-muted">Created: </span>
          {formatTimestamp(record.createdAt)} /{" "}
          <span className="text-muted">Updated: </span>
          {formatTimestamp(record.updatedAt)}
          <br />
          <br />
        </Col>
      </Row>

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
                        <ArrayRecordPropertyList
                          type={recordProperty.type}
                          values={recordProperty.values}
                          invalidValue={recordProperty.invalidValue}
                          invalidReason={recordProperty.invalidReason}
                        />
                      </td>
                      <td>
                        <code>
                          {recordProperty.type}
                          {recordProperty.isArray ? "[]" : null}
                        </code>
                      </td>
                      <td>
                        <StateBadge state={recordProperty.state} />
                        {recordProperty.invalidReason ? (
                          <StateBadge state="invalid" />
                        ) : null}
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
                      loading={loading}
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
                {grouparooUiEdition() !== "config" ? (
                  <EnterpriseLink
                    href={`/model/${group.modelId}/group/${group.id}/members`}
                  >
                    <a>{group.name}</a>
                  </EnterpriseLink>
                ) : (
                  <span>{group.name}</span>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>

          {grouparooUiEdition() !== "config" && (
            <>
              <hr />

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
                      loading={loading}
                    >
                      Add
                    </LoadingButton>
                  </Col>
                </Row>
              </Form>
            </>
          )}
        </Col>

        <Col>
          <h3>Destinations</h3>

          {destinations.length > 0 ? null : <p>None</p>}

          <ListGroup>
            {destinations.map((destination) => (
              <ListGroup.Item
                key={`destination-${destination.id}`}
                variant="info"
              >
                {grouparooUiEdition() !== "config" ? (
                  <EnterpriseLink
                    href={`/model/${destination.modelId}/destination/${destination.id}/data`}
                  >
                    <a>{destination.name}</a>
                  </EnterpriseLink>
                ) : (
                  <span>{destination.name}</span>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { recordId, modelId } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { record, groups, destinations } = await execApi(
    "get",
    `/record/${recordId}`
  );
  ensureMatchingModel("Record", record?.modelId, modelId.toString());
  const { properties } = await execApi("get", `/properties`, {
    modelId: record?.modelId,
  });
  const { groups: allGroups } = await execApi("get", `/groups`);
  const { apps } = await execApi("get", `/apps`);
  const { sources } = await execApi("get", `/sources`);
  return { record, properties, groups, allGroups, destinations, sources, apps };
};
