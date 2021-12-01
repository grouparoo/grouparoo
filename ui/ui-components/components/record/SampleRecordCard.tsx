import Link from "next/link";
import { Fragment, useMemo, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
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

interface Props {
  execApi: ApiHook["execApi"];
}

interface RecordProp {
  propertyKey: string;
  propertyId: string;
  propertyState: Models.PropertyType["state"];
  value: string | number | boolean;
}

const isConfigUI = grouparooUiEdition() === "config";

const SampleRecordCard: React.FC<Props> = ({ execApi }) => {
  const model = useGrouparooModelContext();

  const [importing, setImporting] = useState(false);

  const { data: record, mutate: mutateRecord } = useSWR("sample-record", () => {
    return execApi<Actions.RecordsList>("get", "/records", {
      limit: 1,
      offset: 0,
      modelId: model.id,
    }).then((data) => data?.records?.[0]);
  });

  const recordProps = useMemo<RecordProp[]>(() => {
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
    <Button size="sm" variant="outline-primary">
      Switch to random Record
    </Button>,
  ];

  if (isConfigUI) {
    actions.push(
      <LinkButton
        href={`/model/${model.id}/record/new`}
        size="sm"
        variant="outline-primary"
      >
        Add sample Record
      </LinkButton>
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
          <Col md={8}>
            <Row>
              <Col md={6}>
                <strong>Property</strong>
              </Col>
              <Col md={6}>
                <strong>Value</strong>
              </Col>
            </Row>
            <Row>
              {recordProps.map((recordProperty) => (
                <Fragment key={recordProperty.propertyKey}>
                  <Col md={6}>
                    <Link
                      href={`/model/${model.id}/property/${recordProperty.propertyId}/edit`}
                    >
                      <a>{recordProperty.propertyKey}</a>
                    </Link>
                    {recordProperty.propertyState !== "ready" && (
                      <StateBadge state={recordProperty.propertyState} />
                    )}
                  </Col>
                  <Col md={6}>{recordProperty.value}</Col>
                </Fragment>
              ))}
            </Row>
          </Col>
          <Col md={4} className={"text-center"}>
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
    </ManagedCard>
  );
};

export default SampleRecordCard;
