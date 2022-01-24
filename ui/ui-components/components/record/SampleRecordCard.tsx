import Link from "next/link";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import EnterpriseLink from "../../components/GrouparooLink";
import { ApiHook } from "../../hooks/useApi";
import { usePrevious } from "../../hooks/usePrevious";
import { Actions, Models } from "../../utils/apiData";
import { errorHandler, successHandler } from "../../eventHandlers";
import { grouparooUiEdition } from "../../utils/uiEdition";
import StateBadge from "../badges/StateBadge";
import ManagedCard from "../lib/ManagedCard";
import SeparatedItems from "../lib/SeparatedItems";
import LinkButton from "../LinkButton";
import Loader from "../Loader";
import LoadingButton from "../LoadingButton";
import RecordImageFromEmail from "../visualizations/RecordImageFromEmail";
import AddSampleRecordModal from "./AddSampleRecordModal";
import ArrayRecordPropertyList from "./ArrayRecordPropertyList";

export type RecordType =
  | Models.GrouparooRecordType
  | Models.DestinationRecordPreviewType;

export interface SampleRecordCardProps {
  modelId: string;
  execApi: ApiHook["execApi"];
  fetchRecord: (recordId?: string) => Promise<{
    record?: RecordType;
    groups?: Models.GroupType[];
    destinations?: Models.DestinationType[];
  }>;
  allowFetchWithoutRecordId?: boolean;
  properties: Models.PropertyType[];
  propertiesTitle?: string;
  groupsTitle?: string;
  disabled?: boolean;
  hideViewAllRecords?: boolean;
  highlightProperty?: Models.PropertyType;
  highlightPropertyError?: string;
  propertyLinkDisabled?: boolean;
  importDisabled?: boolean;
  reloadKey?: string;
  warning?: string;
}

// This is exported so we can manipulate it in tests, but is unused elsewhere.
export const isConfigUI = grouparooUiEdition() === "config";

const getCachedSampleRecordId = (modelId: string): string => {
  return globalThis.localStorage?.getItem(
    `sampleRecord:${grouparooUiEdition()}:${modelId}`
  );
};

const setCachedSampleRecordId = (modelId: string, recordId: string): void => {
  if (recordId) {
    globalThis.localStorage?.setItem(
      `sampleRecord:${grouparooUiEdition()}:${modelId}`,
      recordId
    );
  }
};

const clearCachedSampleRecordId = (modelId: string): void => {
  globalThis.localStorage?.removeItem(
    `sampleRecord:${grouparooUiEdition()}:${modelId}`
  );
};

const SampleRecordCard: React.FC<SampleRecordCardProps> = ({
  modelId,
  properties,
  propertiesTitle,
  execApi,
  fetchRecord,
  groupsTitle = "Groups",
  disabled = false,
  importDisabled = false,
  hideViewAllRecords = false,
  highlightProperty,
  highlightPropertyError,
  propertyLinkDisabled = false,
  allowFetchWithoutRecordId = false,
  warning,
  reloadKey,
}) => {
  const prevModelId = usePrevious(modelId);
  const prevReloadKey = usePrevious(reloadKey);

  const [loading, setLoading] = useState(false);
  const [importing, setImporting] = useState(false);
  const [addingRecord, setAddingRecord] = useState(false);
  const [hasRecords, setHasRecords] = useState(true);
  const [totalRecords, setTotalRecords] = useState(0);
  const [record, setRecord] = useState<RecordType>();
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

  useEffect(() => {
    if (modelId) {
      execApi<Actions.RecordsList>("get", "/records", {
        limit: 1,
        offset: 0,
        modelId,
      }).then(({ total }) => {
        setTotalRecords(total);
      });
    }
  }, [execApi, modelId]);

  const loadRecord = useCallback(async () => {
    setLoading(true);

    let record: Models.GrouparooRecordType;
    let groups: Models.GroupType[];
    let destinations: Models.DestinationType[];

    if (recordId || allowFetchWithoutRecordId) {
      ({ record, groups, destinations } = await fetchRecord(recordId));

      if (allowFetchWithoutRecordId && !record && !recordId) {
        setHasRecords(false);
        errorHandler.set({
          message:
            "Could not switch Sample Record because no Records were found.",
        });
        setRecordId(getCachedSampleRecordId(modelId));
        setLoading(false);
        return;
      }
    } else {
      ({ record, groups, destinations } = await execApi<Actions.RecordsList>(
        "get",
        "/records",
        {
          limit: 25,
          offset: 0,
          modelId,
        }
      ).then((response) => {
        setTotalRecords(response.total);
        if (response.total === 0) {
          setHasRecords(false);
        } else {
          const randomRecord = response?.records?.length
            ? response.records[
                Math.floor(Math.random() * response.records.length)
              ]
            : undefined;

          if (randomRecord?.id) {
            return fetchRecord(randomRecord?.id);
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
  }, [
    recordId,
    allowFetchWithoutRecordId,
    fetchRecord,
    modelId,
    execApi,
    saveRecord,
  ]);

  const sortedPropertyKeys = useMemo(() => {
    const id = highlightProperty?.id;
    return record?.properties
      ? Object.keys(record.properties).sort((a, b) =>
          id === record.properties[a].id
            ? -1
            : id === record.properties[b].id
            ? 1
            : a.localeCompare(b)
        )
      : undefined;
  }, [highlightProperty?.id, record]);

  useEffect(() => {
    if (prevReloadKey !== reloadKey) {
      setHasRecords(true);
    }
  }, [prevReloadKey, reloadKey, recordId]);

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
  }, [record, modelId, prevModelId]);

  useEffect(() => {
    if (
      !loading &&
      hasRecords &&
      (!record || record.id !== recordId || reloadKey !== prevReloadKey)
    ) {
      loadRecord();
    }
  }, [
    record,
    recordId,
    loading,
    loadRecord,
    hasRecords,
    reloadKey,
    prevReloadKey,
  ]);

  const email = useMemo<string>(() => {
    if (!record) return undefined;

    const emailProperty = Object.values(record.properties).find(
      (property) => property.type === "email" && property.values.length > 0
    );

    return emailProperty?.values?.[0]?.toString() ?? undefined;
  }, [record]);

  const cardActions = useMemo(() => {
    const result: React.ReactNode[] = [];
    if (record) {
      result.push(
        <LinkButton
          key={modelId + (record?.id || "")}
          disabled={!record || disabled}
          href={`/model/${modelId}/record${
            record ? `/${record.id}/edit` : "s"
          }`}
          size="sm"
          variant="outline-primary"
        >
          View Record
        </LinkButton>
      );
    }
    if (!hideViewAllRecords) {
      result.push(
        <LinkButton
          disabled={disabled}
          href={`/model/${modelId}/records`}
          size="sm"
          variant="outline-primary"
        >
          View All {totalRecords} Records
        </LinkButton>
      );
    }
    return result;
  }, [record, hideViewAllRecords, totalRecords, modelId, disabled]);

  if (!sortedPropertyKeys?.length && !properties.length) {
    return (
      <ManagedCard title="Sample Record">
        <Card.Body>
          {loading ? (
            <div className="text-center">
              <Loader size="sm" />
            </div>
          ) : (
            "At least one Grouparoo Property needs to be mapped before showing the Sample Record."
          )}
        </Card.Body>
      </ManagedCard>
    );
  }

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
      key="clear-record-id"
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

  if (!importDisabled) {
    actions.unshift(
      <LoadingButton
        disabled={disabled || !record || loading}
        loading={importing}
        onClick={() => {
          importRecord();
        }}
        size="sm"
        variant="outline-success"
      >
        Import Record Data
      </LoadingButton>
    );
  }

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
      <Col style={{ minWidth: "75%" }}>
        {propertiesTitle && <h6>{propertiesTitle}</h6>}
        <Table bordered>
          <colgroup>
            <col span={1} style={{ width: "35%" }} />
            <col span={1} style={{ width: "65%" }} />
          </colgroup>
          <tbody>
            {sortedPropertyKeys &&
              sortedPropertyKeys.map((key, index) => {
                const property = record.properties[key];
                const isHighlightedProperty =
                  highlightProperty?.id === property.id;
                const trClassName = isHighlightedProperty
                  ? `table-${highlightPropertyError ? "danger" : "success"}`
                  : undefined;
                const name =
                  isHighlightedProperty && highlightProperty.key !== ""
                    ? highlightProperty.key
                    : key === ""
                    ? "Draft"
                    : key;

                return (
                  <tr
                    key={`property-${!key ? `draft-${index}` : key}`}
                    className={trClassName}
                  >
                    <th scope="row">
                      {isHighlightedProperty || propertyLinkDisabled ? (
                        name
                      ) : (
                        <EnterpriseLink
                          href={`/model/${modelId}/source/${property.sourceId}/property/${property.id}/edit`}
                        >
                          <a>{name}</a>
                        </EnterpriseLink>
                      )}
                      {property.state !== "ready" && (
                        <StateBadge state={property.state} marginBottom={0} />
                      )}
                    </th>
                    <td>
                      {isHighlightedProperty &&
                      (property.values.length === 0 ||
                        highlightPropertyError) ? (
                        `${
                          highlightPropertyError
                            ? highlightPropertyError
                            : "..."
                        }`
                      ) : (
                        <ArrayRecordPropertyList
                          type={property.type}
                          values={property.values}
                          invalidValue={property.invalidValue}
                          invalidReason={property.invalidReason}
                        />
                      )}
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
        <h6>{groupsTitle}</h6>
        <p>
          {groups?.length
            ? groups.map((group) => {
                return (
                  <Fragment key={`group-${group.id}`}>
                    <EnterpriseLink
                      href={`/model/${group.modelId}/group/${group.id}/rules`}
                    >
                      {group.name}
                    </EnterpriseLink>
                    <br />
                  </Fragment>
                );
              })
            : (record as Models.DestinationRecordPreviewType)?.groupNames
                ?.length
            ? (record as Models.DestinationRecordPreviewType).groupNames.map(
                (groupName) => (
                  <Fragment key={`group-name-${groupName}`}>
                    {groupName}
                    <br />
                  </Fragment>
                )
              )
            : "None"}
        </p>
        {destinations && (
          <>
            <h6>Destinations</h6>
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
          </>
        )}
      </Col>
    </Row>
  ) : (
    <Row>
      <Col>
        <p>
          A Sample Record can be used to validate your configuration is
          importing the correct data to Groups and Destinations.
        </p>
        {!isConfigUI && (
          <p>Run a Schedule on your Primary Source to generate Records.</p>
        )}
      </Col>
    </Row>
  );

  return (
    <ManagedCard
      title={<>Sample Record {loading && <Loader size="sm" />}</>}
      disabled={disabled}
      actions={cardActions}
      border={warning ? "warning" : undefined}
    >
      <Card.Body>
        {content}
        <Row>
          <Col>
            <SeparatedItems items={!hasRecords && !isConfigUI ? [] : actions} />
          </Col>
        </Row>
      </Card.Body>
      {isConfigUI && (
        <AddSampleRecordModal
          modelId={modelId}
          properties={properties}
          execApi={execApi}
          show={addingRecord}
          onRecordCreated={saveRecord}
          onHide={() => {
            setAddingRecord(false);
          }}
        />
      )}
      {warning && <Card.Footer>{warning}</Card.Footer>}
    </ManagedCard>
  );
};

export default SampleRecordCard;
