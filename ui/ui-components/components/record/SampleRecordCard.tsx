import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import EnterpriseLink from "../../components/GrouparooLink";
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
import { useApi } from "../../contexts/api";
import Cookies from "universal-cookie";
import { isBrowser } from "../../utils/isBrowser";
import { useGrouparooModel } from "../../contexts/grouparooModel";
import { DestinationExport } from "@grouparoo/core/src/actions/destinations";
import { useRouter } from "next/router";

export interface SampleRecordCardProps {
  fetchRecord: (recordId?: string) => Promise<{
    record?: Models.GrouparooRecordType;
    groups?: Models.GroupType[];
    destinations?: Models.DestinationType[];
  }>;
  properties: Models.PropertyType[];
  propertiesTitle?: string;
  groupsTitle?: string;
  disabled?: boolean;
  hideViewAllRecords?: boolean;
  highlightProperty?: Models.PropertyType;
  highlightPropertyError?: string;
  propertyLinkDisabled?: boolean;
  randomRecordDisabled?: boolean;
  importDisabled?: boolean;
  reloadKey?: string;
  warning?: string;
  groupId?: string;
  record?: Models.GrouparooRecordType;
  groups?: Models.GroupType[];
  destinations?: Models.DestinationType[];
}

// This is exported so we can manipulate it in tests, but is unused elsewhere.
export const isConfigUI = grouparooUiEdition() === "config";

const cookies = new Cookies();

const getCachedSampleRecordId = (modelId: string): string => {
  return isBrowser()
    ? cookies.get(`sampleRecord:${grouparooUiEdition()}`)?.[modelId]
    : undefined;
};

const setCachedSampleRecordId = (modelId: string, recordId: string): void => {
  if (isBrowser() && recordId) {
    const existing = cookies.get<Record<string, string>>(
      `sampleRecord:${grouparooUiEdition()}`
    );
    cookies.set(
      `sampleRecord:${grouparooUiEdition()}`,
      { ...existing, [modelId]: recordId },
      {
        path: "/",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30, // 1 month
      }
    );
  }
};

const clearCachedSampleRecordId = (modelId: string): void => {
  if (isBrowser()) {
    const existing = cookies.get<Record<string, string>>(
      `sampleRecord:${grouparooUiEdition()}`
    );
    if (existing) {
      delete existing[modelId];
      cookies.set(`sampleRecord:${grouparooUiEdition()}`, existing, {
        path: "/",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30, // 1 month
      });
    }
  }
};

const SampleRecordCard: React.FC<SampleRecordCardProps> = ({
  properties,
  propertiesTitle,
  fetchRecord,
  groupsTitle = "Groups",
  disabled = false,
  importDisabled = false,
  hideViewAllRecords = false,
  highlightProperty,
  highlightPropertyError,
  propertyLinkDisabled = false,
  randomRecordDisabled = false,
  warning,
  reloadKey,
  groupId,
  ...props
}) => {
  const previousRecord = usePrevious(props.record);
  const prevReloadKey = usePrevious(reloadKey);
  const { client } = useApi();
  const {
    model: { id: modelId },
  } = useGrouparooModel();
  const router = useRouter();
  const { destinationId } = router.query;

  const [loading, setLoading] = useState(false);
  const [importing, setImporting] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [addingRecord, setAddingRecord] = useState(false);
  const [hasRecords, setHasRecords] = useState(true);
  const [totalRecords, setTotalRecords] = useState(0);
  const [record, setRecord] = useState<Models.GrouparooRecordType>(
    props.record
  );
  const [groups, setGroups] = useState<Models.GroupType[]>(props.groups);
  const [destinations, setDestinations] = useState<Models.DestinationType[]>(
    props.destinations
  );
  const [recordId, setRecordId] = useState(
    () => props.record?.id || getCachedSampleRecordId(modelId)
  );

  const canExportRecord = useMemo(
    () => destinations?.find(({ id }) => id === destinationId),
    [destinationId, destinations]
  );

  const saveRecord = useCallback(
    (
      record: Models.GrouparooRecordType,
      groups: Models.GroupType[],
      destinations: Models.DestinationType[]
    ) => {
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
      client
        .request<Actions.RecordsList>("get", "/records", {
          limit: 1,
          offset: 0,
          modelId,
          groupId,
        })
        .then(({ total }) => {
          setTotalRecords(total);
        });
    }
  }, [client, groupId, modelId]);

  const loadRecord = useCallback(async () => {
    setLoading(true);

    let record: Models.GrouparooRecordType;
    let groups: Models.GroupType[];
    let destinations: Models.DestinationType[];

    if (recordId) {
      ({ record, groups, destinations } = await fetchRecord(recordId).catch(
        () => ({} as Awaited<ReturnType<typeof fetchRecord>>)
      ));

      if (!record && !recordId) {
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
      ({ record, groups, destinations } = await client
        .request<Actions.RecordsList>("get", "/records", {
          limit: 25,
          offset: 0,
          modelId,
          groupId,
        })
        .then((response) => {
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
  }, [recordId, fetchRecord, modelId, client, groupId, saveRecord]);

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
    if ((previousRecord || props.record) && previousRecord !== props.record) {
      setLoading(true);
      setRecordId(props.record?.id || getCachedSampleRecordId(modelId));
      setRecord(props.record);
      setGroups(props.groups);
      setDestinations(props.destinations);
      setHasRecords(true);
      setLoading(false);
    }
  }, [props.record, props.groups, props.destinations, modelId, previousRecord]);

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
          disabled={!record?.id || disabled}
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

  const importRecord = useCallback(async () => {
    setImporting(true);
    const response = await client.request<Actions.RecordImport>(
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
  }, [client, loadRecord, record?.id]);

  const exportRecord = useCallback(async () => {
    setExporting(true);
    const response = await client.requestAction<DestinationExport>(
      "post",
      `/destination/${destinationId}/export`,
      { recordId: record.id, id: destinationId.toString() }
    );
    if (response?.success) {
      successHandler.set({ message: "Export Complete!" });
    } else {
      errorHandler.set({ message: "Export Failed" });
    }
    setExporting(false);
  }, [client, destinationId, record?.id]);

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

  const actions = [
    <LoadingButton
      key="clear-record-id"
      disabled={
        disabled || !hasRecords || loading || importing || randomRecordDisabled
      }
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
        onClick={importRecord}
        size="sm"
        variant="outline-success"
      >
        Import Record Data
      </LoadingButton>
    );
  }

  if (canExportRecord) {
    actions.push(
      <LoadingButton
        disabled={disabled || !record || loading || !!warning}
        loading={exporting}
        onClick={exportRecord}
        size="sm"
        variant="outline-success"
      >
        Export Record Data
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
      title="Sample Record"
      disabled={disabled}
      actions={cardActions}
      border={warning ? "warning" : undefined}
      loading={loading}
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
          properties={properties}
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
