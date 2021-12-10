import Link from "next/link";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import EnterpriseLink from "../../components/GrouparooLink";
import { ApiHook } from "../../hooks/useApi";
import { usePrevious } from "../../hooks/usePrevious";
import { Actions, Models } from "../../utils/apiData";
import { successHandler } from "../../utils/eventHandlers";
import { grouparooUiEdition } from "../../utils/uiEdition";
import StateBadge from "../badges/StateBadge";
import ManagedCard from "../lib/ManagedCard";
import SeparatedItems from "../lib/SeparatedItems";
import LinkButton from "../LinkButton";
import LoadingButton from "../LoadingButton";
import RecordImageFromEmail from "../visualizations/RecordImageFromEmail";
import AddSampleRecordModal from "./AddSampleRecordModal";
import ArrayRecordPropertyList from "./ArrayRecordPropertyList";

interface Props {
  modelId: string;
  execApi: ApiHook["execApi"];
  properties: Models.PropertyType[];
  disabled: boolean;
  hideViewAllRecords?: boolean;
  highlightProperty?: Models.PropertyType;
}

const isConfigUI = grouparooUiEdition() === "config";

const getCachedSampleRecordId = (modelId: string): string => {
  return globalThis.localStorage?.getItem(`sampleRecord:${modelId}`);
};

const setCachedSampleRecordId = (modelId: string, recordId: string): void => {
  if (recordId) {
    globalThis.localStorage?.setItem(`sampleRecord:${modelId}`, recordId);
  }
};

const clearCachedSampleRecordId = (modelId: string): void => {
  globalThis.localStorage?.removeItem(`sampleRecord:${modelId}`);
};

const SampleRecordCard: React.FC<Props> = ({
  modelId,
  properties,
  execApi,
  disabled = false,
  hideViewAllRecords = false,
  highlightProperty,
}) => {
  const prevModelId = usePrevious(modelId);

  const [loading, setLoading] = useState(false);
  const [importing, setImporting] = useState(false);
  const [addingRecord, setAddingRecord] = useState(false);
  const [hasRecords, setHasRecords] = useState(true);
  const [record, setRecord] = useState<Models.GrouparooRecordType>();
  const [groups, setGroups] = useState<Models.GroupType[]>();
  const [destinations, setDestinations] = useState<Models.DestinationType[]>();
  const [recordId, setRecordId] = useState(() =>
    getCachedSampleRecordId(modelId)
  );

  const saveRecord = useCallback(
    (record, groups = undefined, destinations = undefined) => {
      setLoading(true);
      setRecord(record);
      setGroups(groups);
      setDestinations(destinations);
      setRecordId(record.id);
      setHasRecords(true);
      setLoading(false);

      setCachedSampleRecordId(modelId, record.id);
    },
    [modelId]
  );

  const loadRecord = useCallback(async () => {
    setLoading(true);

    let record: Models.GrouparooRecordType;
    let groups: Models.GroupType[];
    let destinations: Models.DestinationType[];

    if (recordId) {
      ({ record, groups, destinations } = await execApi<Actions.RecordView>(
        "get",
        `/record/${recordId}`
      ));
    } else {
      ({ record, groups, destinations } = await execApi<Actions.RecordsList>(
        "get",
        "/records",
        {
          limit: 25,
          offset: 0,
          modelId: modelId,
        }
      ).then((response) => {
        if (response.total === 0) {
          setHasRecords(false);
        } else {
          const randomRecord = response?.records?.length
            ? response.records[
                Math.floor(Math.random() * response.records.length)
              ]
            : undefined;

          if (randomRecord?.id) {
            return execApi<Actions.RecordView>(
              "get",
              `/record/${randomRecord.id}`
            );
          }
        }

        return {
          record: undefined,
          groups: undefined,
          destinations: undefined,
        };
      }));
    }

    if (record?.id) {
      saveRecord(record, groups, destinations);
    } else {
      // Got an invalid record. Let's clear this and start over.
      clearCachedSampleRecordId(modelId);
      setRecordId(undefined);
    }

    setLoading(false);
  }, [recordId, saveRecord, execApi, modelId]);

  const recordPropertyKeys = useMemo(
    () =>
      record?.properties ? Object.keys(record.properties).sort() : undefined,
    [record]
  );

  useEffect(() => {
    // Switched to another model
    if (prevModelId && prevModelId !== modelId) {
      setLoading(true);
      setRecordId(getCachedSampleRecordId(modelId));
      setRecord(undefined);
      setGroups(undefined);
      setDestinations(undefined);
      setHasRecords(true);
      setLoading(false);
    }
  }, [record, modelId]);

  useEffect(() => {
    if (!loading && hasRecords && (!record || record.id !== recordId)) {
      loadRecord();
    }
  }, [record, recordId, loading, loadRecord, hasRecords]);

  const email = useMemo<string>(() => {
    if (!record) return undefined;

    const emailProperty = Object.values(record.properties).find(
      (property) => property.type === "email" && property.values.length > 0
    );

    return emailProperty ? emailProperty.values[0].toString() : undefined;
  }, [record]);

  const importRecord = async () => {
    setImporting(true);
    const response = await execApi<Actions.RecordImport>(
      "post",
      `/record/${record.id}/import`
    );
    if (response?.record) {
      setRecord(response.record);
      setGroups(response.groups);
      successHandler.set({ message: "Import Complete!" });
    } else {
      loadRecord(); // we may have done a partial import
    }
    setImporting(false);
  };

  const actions = [
    <LoadingButton
      disabled={disabled || !record || loading}
      loading={importing}
      onClick={() => {
        importRecord();
      }}
      size="sm"
      variant="outline-success"
    >
      Import Record data
    </LoadingButton>,
    <LoadingButton
      disabled={disabled || !hasRecords || loading || importing}
      loading={loading && !recordId}
      size="sm"
      variant="outline-primary"
      onClick={() => {
        setRecordId(undefined);
      }}
    >
      Switch to random Record
    </LoadingButton>,
  ];

  if (isConfigUI) {
    actions.push(
      <LoadingButton
        disabled={disabled || loading}
        size="sm"
        variant="outline-primary"
        onClick={() => setAddingRecord(true)}
      >
        Add Sample Record
      </LoadingButton>
    );
  }

  const content = record ? (
    <Row>
      <Col md={9}>
        <Table bordered>
          <colgroup>
            <col span={1} style={{ width: "35%" }} />
            <col span={1} style={{ width: "65%" }} />
          </colgroup>
          <thead>
            <tr>
              <th>
                <strong>Property</strong>
              </th>
              <th>
                <strong>Value</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {recordPropertyKeys &&
              recordPropertyKeys.map((key) => {
                const property = record.properties[key];
                const isHighlightedProperty =
                  highlightProperty?.id === property.id;
                const trClassName =
                  highlightProperty?.id === property.id
                    ? "table-success"
                    : undefined;

                return (
                  <tr key={key} className={trClassName}>
                    <th scope="row">
                      {isHighlightedProperty ? (
                        key
                      ) : (
                        <Link
                          href={`/model/${modelId}/property/${property.id}/edit`}
                        >
                          <a>{key}</a>
                        </Link>
                      )}
                      {property.state !== "ready" && (
                        <StateBadge state={property.state} marginBottom={0} />
                      )}
                    </th>
                    <td>
                      <ArrayRecordPropertyList
                        type={property.type}
                        values={property.values}
                        invalidValue={property.invalidValue}
                        invalidReason={property.invalidReason}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Col>
      <Col
        className={"text-center"}
        xs={{ order: "first" }}
        md={{ order: "last" }}
      >
        {email && (
          <RecordImageFromEmail email={email} width={72} className="mb-4" />
        )}
        <h6>Groups</h6>
        {
          <p>
            {groups?.length
              ? groups.map((group) => {
                  return (
                    <Fragment key={`group-${group.id}`}>
                      <Link
                        href={`/model/${group.modelId}/group/${group.id}/${
                          group.type === "calculated" ? "rules" : "edit"
                        }`}
                      >
                        {group.name}
                      </Link>
                      <br />
                    </Fragment>
                  );
                })
              : "None"}
          </p>
        }
        <h6>Destinations</h6>
        {
          <p>
            {destinations?.length
              ? destinations.map((destination) => {
                  return (
                    <Fragment key={`destination-${destination.id}`}>
                      {isConfigUI ? (
                        destination.name
                      ) : (
                        <EnterpriseLink
                          href={`/model/${destination.modelId}/destination/${destination.id}/data`}
                        >
                          <a>{destination.name}</a>
                        </EnterpriseLink>
                      )}
                      <br />
                    </Fragment>
                  );
                })
              : "None"}
          </p>
        }
      </Col>
    </Row>
  ) : (
    <Row>
      <Col>
        <p>
          A Sample Record can be used to validate your configuration is
          importing the correct data to Groups and Destinations.
        </p>
      </Col>
    </Row>
  );

  const cardActions = useMemo(() => {
    const result = [
      <LinkButton
        disabled={!record || disabled}
        href={record ? `/model/${modelId}/record/${record.id}/edit` : "#"}
        size="sm"
        variant="outline-primary"
      >
        View Record
      </LinkButton>,
    ];
    if (!hideViewAllRecords) {
      result.push(
        <LinkButton
          disabled={disabled}
          href={`/model/${modelId}/records`}
          size="sm"
          variant="outline-primary"
        >
          View all Records
        </LinkButton>
      );
    }
    return result;
  }, [modelId, disabled, record, hideViewAllRecords]);

  return (
    <ManagedCard
      title="Sample Record"
      disabled={disabled}
      actions={cardActions}
    >
      <Card.Body>
        {content}
        <Row>
          <Col>
            <SeparatedItems items={actions} />
          </Col>
        </Row>
      </Card.Body>
      {isConfigUI && (
        <AddSampleRecordModal
          properties={properties}
          execApi={execApi}
          show={addingRecord}
          onRecordCreated={saveRecord}
          onHide={() => {
            setAddingRecord(false);
          }}
        />
      )}
    </ManagedCard>
  );
};

export default SampleRecordCard;
