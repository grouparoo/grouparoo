import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import useSWR from "swr";
import { useGrouparooModelContext } from "../../contexts/grouparooModel";
import { ApiHook, UseApi } from "../../hooks/useApi";
import { Actions, Models } from "../../utils/apiData";
import { successHandler } from "../../utils/eventHandlers";
import { grouparooUiEdition } from "../../utils/uiEdition";
import StateBadge from "../badges/StateBadge";
import ManagedCard from "../lib/ManagedCard";
import SeparatedItems from "../lib/SeparatedItems";
import LinkButton from "../LinkButton";
import LoadingButton from "../LoadingButton";
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
  if (typeof window === "undefined") return;
  window.localStorage.setItem(`sampleRecord:${modelId}`, recordId);
};

const SampleRecordCard: React.FC<Props> = ({ properties, execApi }) => {
  const model = useGrouparooModelContext();

  const [importing, setImporting] = useState(false);
  const [addingRecord, setAddingRecord] = useState(false);
  const [recordId, setRecordId] = useState(() =>
    getCachedSampleRecordId(model.id)
  );

  const { data: record, mutate: mutateRecord } = useSWR(
    ["sample-record", recordId],
    () => {
      if (recordId) {
        return execApi<Actions.RecordView>("get", `/record/${recordId}`).then(
          ({ record }) => record
        );
      }

      return execApi<Actions.RecordsList>("get", "/records", {
        limit: 25,
        offset: 0,
        modelId: model.id,
        recordId,
      }).then((data) => {
        if (data?.records?.length) {
          const record =
            data.records[Math.floor(Math.random() * data.records.length)];
          console.log({ record });
          return record;
        }
        return undefined;
      });
    }
  );

  useEffect(() => {
    if (record) {
      setCachedSampleRecordId(model.id, record.id);
    }
  }, [record]);

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
        value: property.values[0],
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
      mutateRecord(response.record, false);
      successHandler.set({ message: "Import Complete!" });
    } else {
      mutateRecord(); // we may have done a partial import
    }
    setImporting(false);
  };

  const actions = [
    <LoadingButton
      disabled={importing}
      onClick={() => {
        importRecord();
      }}
      size="sm"
      variant="outline-success"
    >
      Import Record data
    </LoadingButton>,
    <Button
      size="sm"
      variant="outline-primary"
      onClick={() => {
        setRecordId(undefined);
        mutateRecord();
      }}
    >
      Switch to random Record
    </Button>,
  ];

  if (isConfigUI) {
    actions.push(
      <Button
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
                        <StateBadge state={row.propertyState} />
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
          onRecordCreated={(record) => {
            setRecordId(record.id);
          }}
          onHide={() => {
            setAddingRecord(false);
          }}
        />
      )}
    </ManagedCard>
  );
};

export default SampleRecordCard;
