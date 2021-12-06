import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { useGrouparooModelContext } from "../../contexts/grouparooModel";
import { ApiHook } from "../../hooks/useApi";
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
}

interface RecordRow {
  propertyKey: string;
  propertyId: string;
  propertyState: Models.PropertyType["state"];
  value: string | number | boolean;
}

const isConfigUI = grouparooUiEdition() === "config";

const getCachedSampleRecordId = (modelId: string): string => {
  if (typeof window === "undefined") return undefined;
  return window.localStorage.getItem(`sampleRecord:${modelId}`);
};

const setCachedSampleRecordId = (modelId: string, recordId: string): void => {
  if (typeof window === "undefined" || !recordId) return;
  window.localStorage.setItem(`sampleRecord:${modelId}`, recordId);
};

const clearCachedSampleRecordId = (modelId: string): void => {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(`sampleRecord:${modelId}`);
};

const SampleRecordCard: React.FC<Props> = ({ properties, execApi }) => {
  const model = useGrouparooModelContext();

  const [loading, setLoading] = useState(false);
  const [importing, setImporting] = useState(false);
  const [addingRecord, setAddingRecord] = useState(false);
  const [record, setRecord] = useState<Actions.RecordView["record"]>();
  const [recordId, setRecordId] = useState(() =>
    getCachedSampleRecordId(model.id)
  );

  const saveRecord = useCallback(
    (record) => {
      setLoading(true);
      setRecord(record);
      setRecordId(record.id);
      setLoading(false);

      setCachedSampleRecordId(model.id, record.id);
    },
    [model]
  );

  const loadRecord = useCallback(async () => {
    setLoading(true);

    let record: Actions.RecordView["record"];

    console.log(recordId);

    if (recordId) {
      record = await execApi<Actions.RecordView>(
        "get",
        `/record/${recordId}`
      ).then(({ record }) => record);
    } else {
      record = await execApi<Actions.RecordsList>("get", "/records", {
        limit: 25,
        offset: 0,
        modelId: model.id,
      }).then((response) => {
        return response?.records?.length
          ? response.records[
              Math.floor(Math.random() * response.records.length)
            ]
          : undefined;
      });
    }

    if (record?.id) {
      saveRecord(record);
    } else {
      // Got an invalid record. Let's clear this and start over.
      clearCachedSampleRecordId(model.id);
    }

    setLoading(false);
  }, [recordId, saveRecord, execApi]);

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

  useEffect(() => {
    if (loading || (record && record.id === recordId)) return;
    loadRecord();
  }, [record, recordId, loading]);

  const importRecord = async () => {
    setImporting(true);
    const response = await execApi<Actions.RecordImport>(
      "post",
      `/record/${record.id}/import`
    );
    if (response?.record) {
      setRecord(response.record);
      successHandler.set({ message: "Import Complete!" });
    } else {
      loadRecord(); // we may have done a partial import
    }
    setImporting(false);
  };

  const actions = [
    <Button
      disabled={importing || loading}
      onClick={() => {
        importRecord();
      }}
      size="sm"
      variant="outline-success"
    >
      Import Record data
    </Button>,
    <Button
      disabled={loading}
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
        disabled={loading}
        size="sm"
        variant="outline-primary"
        onClick={() => setAddingRecord(true)}
      >
        Add sample Record
      </Button>
    );
  }

  return (
    <ManagedCard
      title="Sample Record"
      actions={[
        <LinkButton
          disabled={!record}
          href={record ? `/model/${model.id}/record/${record.id}/edit` : ""}
          size="sm"
          variant="outline-primary"
        >
          View Record
        </LinkButton>,
        <LinkButton
          href={`/model/${model.id}/records`}
          size="sm"
          variant="outline-primary"
        >
          View all Records
        </LinkButton>,
      ]}
    >
      <Card.Body>
        <Row>
          <Col md={9}>
            <Table bordered>
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
                        <StateBadge
                          state={row.propertyState}
                          marginBottom={0}
                        />
                      )}
                    </td>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={3} className={"text-center"}>
            <p>
              <strong>Groups</strong>
              <br />
              All Emails
              <br />
              High Value
              <br />
            </p>
            <p>
              <strong>Destinations</strong>
              <br />
              All Emails
              <br />
              High Value
              <br />
            </p>
          </Col>
        </Row>
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
