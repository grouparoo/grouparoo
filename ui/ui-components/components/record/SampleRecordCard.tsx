import Link from "next/link";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { useGrouparooModelContext } from "../../contexts/grouparooModel";
import { ApiHook } from "../../hooks/useApi";
import { usePrevious } from "../../hooks/usePrevious";
import { Actions, Models } from "../../utils/apiData";
import { successHandler } from "../../utils/eventHandlers";
import { grouparooUiEdition } from "../../utils/uiEdition";
import StateBadge from "../badges/StateBadge";
import ManagedCard from "../lib/ManagedCard";
import SeparatedItems from "../lib/SeparatedItems";
import LinkButton from "../LinkButton";
import AddSampleRecordModal from "./AddSampleRecordModal";

interface Props {
  execApi: ApiHook["execApi"];
  properties: Models.PropertyType[];
  disabled: boolean;
}

interface RecordRow {
  propertyKey: string;
  propertyId: string;
  propertyState: Models.PropertyType["state"];
  value: string | number | boolean;
}

const isConfigUI = grouparooUiEdition() === "config";

const getCachedSampleRecordId = (modelId: string): string => {
  return globalThis.localStorage?.getItem(`sampleRecord:${modelId}`);
};

const setCachedSampleRecordId = (modelId: string, recordId: string): void => {
  recordId &&
    globalThis.localStorage?.setItem(`sampleRecord:${modelId}`, recordId);
};

const clearCachedSampleRecordId = (modelId: string): void => {
  globalThis.localStorage?.removeItem(`sampleRecord:${modelId}`);
};

const SampleRecordCard: React.FC<Props> = ({
  properties,
  execApi,
  disabled,
}) => {
  const model = useGrouparooModelContext();
  const prevModelId = usePrevious(model.id);

  const [loading, setLoading] = useState(false);
  const [importing, setImporting] = useState(false);
  const [addingRecord, setAddingRecord] = useState(false);
  const [hasRecords, setHasRecords] = useState(true);
  const [record, setRecord] = useState<Actions.RecordView["record"]>();
  const [groups, setGroups] = useState<Actions.RecordView["groups"]>();
  const [recordId, setRecordId] = useState(() =>
    getCachedSampleRecordId(model.id)
  );

  const saveRecord = useCallback(
    (record, groups = undefined) => {
      setLoading(true);
      setRecord(record);
      setGroups(groups);
      setRecordId(record.id);
      setHasRecords(true);
      setLoading(false);

      setCachedSampleRecordId(model.id, record.id);
    },
    [model]
  );

  const loadRecord = useCallback(async () => {
    setLoading(true);

    let record: Actions.RecordView["record"];
    let groups: Actions.RecordView["groups"];

    if (recordId) {
      ({ record, groups } = await execApi<Actions.RecordView>(
        "get",
        `/record/${recordId}`
      ));
    } else {
      ({ record, groups } = await execApi<Actions.RecordsList>(
        "get",
        "/records",
        {
          limit: 25,
          offset: 0,
          modelId: model.id,
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

        return { record: undefined, groups: undefined };
      }));
    }

    if (record?.id) {
      saveRecord(record, groups);
    } else {
      // Got an invalid record. Let's clear this and start over.
      clearCachedSampleRecordId(model.id);
    }

    setLoading(false);
  }, [recordId, saveRecord, execApi, model]);

  useEffect(() => {
    // Switched to another model
    if (prevModelId && prevModelId !== model.id) {
      setLoading(true);
      setRecordId(getCachedSampleRecordId(model.id));
      setRecord(undefined);
      setGroups(undefined);
      setHasRecords(true);
      setLoading(false);
    }
  }, [record, model]);

  useEffect(() => {
    if (!loading && hasRecords && (!record || record.id !== recordId)) {
      loadRecord();
    }
  }, [record, recordId, loading, loadRecord, hasRecords]);

  const recordRows = useMemo<RecordRow[]>(() => {
    if (!record?.properties) return [];

    const values = [];
    const propertyKeys = Object.keys(record.properties).sort();

    for (const propertyKey of propertyKeys) {
      const property = record.properties[propertyKey];
      values.push({
        propertyKey,
        propertyId: property.id,
        propertyState: property.state,
        value: property.values.slice(0, 10).join(", "),
      });
    }

    return values;
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
    <Button
      disabled={!record || importing || loading}
      onClick={() => {
        importRecord();
      }}
      size="sm"
      variant="outline-success"
    >
      Import Record data
    </Button>,
    <Button
      disabled={loading || !hasRecords}
      size="sm"
      variant="outline-primary"
      onClick={() => {
        setRecordId(undefined);
      }}
    >
      Switch to random Record
    </Button>,
  ];

  if (isConfigUI) {
    actions.push(
      <Button
        disabled={loading || disabled}
        size="sm"
        variant="outline-primary"
        onClick={() => setAddingRecord(true)}
      >
        Add Sample Record
      </Button>
    );
  }

  const renderGroups = () => {
    if (groups?.length) {
      return (
        <p>
          {groups.map((group) => {
            return (
              <Fragment key={group.id}>
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
          })}
        </p>
      );
    }
    return <p>None</p>;
  };

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
            {recordRows.map((row) => (
              <tr key={row.propertyKey}>
                <td>
                  <Link
                    href={`/model/${model.id}/property/${row.propertyId}/edit`}
                  >
                    <a>{row.propertyKey}</a>
                  </Link>
                  {row.propertyState !== "ready" && (
                    <StateBadge state={row.propertyState} marginBottom={0} />
                  )}
                </td>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
      <Col md={3} className={"text-center"}>
        <h6>Groups</h6>
        {renderGroups()}
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

  return (
    <ManagedCard
      title="Sample Record"
      disabled={disabled}
      actions={[
        <LinkButton
          disabled={!record || disabled}
          href={record ? `/model/${model.id}/record/${record.id}/edit` : "#"}
          size="sm"
          variant="outline-primary"
        >
          View Record
        </LinkButton>,
        <LinkButton
          disabled={disabled}
          href={`/model/${model.id}/records`}
          size="sm"
          variant="outline-primary"
        >
          View all Records
        </LinkButton>,
      ]}
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
