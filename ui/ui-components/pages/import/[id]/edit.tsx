import ImportTabs from "../../../components/tabs/Import";
import Head from "next/head";
import { UseApi } from "../../../hooks/useApi";
import { Row, Col, Table, Alert, Card } from "react-bootstrap";
import Link from "next/link";
import { Models } from "../../../utils/apiData";
import {
  ImportRecordPropertiesDiff,
  ImportGroupsDiff,
} from "../../../components/import/Diff";
import { DurationTime } from "../../../components/DurationTime";
import { formatTimestamp } from "../../../utils/formatTimestamp";
import StateBadge from "../../../components/badges/StateBadge";

export default function Page(props) {
  const {
    groups,
    _import,
  }: {
    groups: Models.GroupType[];
    _import: Models.ImportType;
  } = props;

  const errorMetadata = _import.errorMetadata
    ? JSON.parse(_import.errorMetadata)
    : {};

  return (
    <>
      <Head>
        <title>Grouparoo: {_import.id}</title>
      </Head>

      <ImportTabs import={_import} />

      <h1>Import {_import.id}</h1>

      <Card>
        <Card.Body>
          <h2>Details</h2>
          <p>
            State: <StateBadge state={_import.state} marginBottom={0} />
            <br />
            Model:{" "}
            <Link href={`/model/${_import.modelId}/edit`}>
              <a>{_import.modelId}</a>
            </Link>
            <br />
            Creator:{" "}
            {_import.creatorType === "run" ? (
              <Link href={`/run/${_import.creatorId}/edit`}>
                <a>{_import.creatorId}</a>
              </Link>
            ) : (
              _import.creatorId
            )}
            <br />
            Record:{" "}
            <Link href={`/object/${_import.recordId}`}>
              <a>{_import.recordId}</a>
            </Link>
          </p>
          {_import.errorMessage ? (
            <Alert variant="warning">
              <p>{_import.errorMessage}</p>
              <p>Step: {errorMetadata.step}</p>
              stack:
              <ul>
                {errorMetadata.stack.split("\n").map((line, idx) => (
                  <li key={`err-${idx}`}>{line}</li>
                ))}
              </ul>
            </Alert>
          ) : null}
        </Card.Body>
      </Card>

      <br />

      <Card>
        <Card.Body>
          <h2>Data</h2>

          <Row>
            <Col md={6}>
              <strong>Record Properties</strong>
              <ImportRecordPropertiesDiff _import={_import} />
            </Col>
            <Col md={6}>
              <strong>Groups</strong>
              <ImportGroupsDiff _import={_import} groups={groups} />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <strong>Data</strong>
              <pre>
                <code>{JSON.stringify(_import.data, null, 4)}</code>
              </pre>
            </Col>
            <Col md={6}>
              <strong>Raw Data</strong>
              <pre>
                <code>{JSON.stringify(_import.rawData, null, 4)}</code>
              </pre>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <br />

      <Card>
        <Card.Body>
          <h2>Timeline</h2>
          <p>
            Total duration:{" "}
            <strong>
              <DurationTime
                start={_import.createdAt}
                end={_import.groupsUpdatedAt}
              />
            </strong>
          </p>
          <Table size="sm">
            <thead>
              <tr>
                <th>Stage</th>
                <th>Time</th>
                <th>Delta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Created</td>
                <td>
                  {_import.createdAt
                    ? formatTimestamp(_import.createdAt)
                    : "pending"}
                </td>
                <td>⇣</td>
              </tr>
              <tr>
                <td>Associated</td>
                <td>
                  {_import.recordAssociatedAt
                    ? formatTimestamp(_import.recordAssociatedAt)
                    : "pending"}
                </td>
                <td>
                  ⇣
                  <DurationTime
                    start={_import.createdAt}
                    end={_import.recordAssociatedAt}
                  />
                </td>
              </tr>
              <tr>
                <td>Record Updated</td>
                <td>
                  {_import.recordUpdatedAt
                    ? formatTimestamp(_import.recordUpdatedAt)
                    : "pending"}
                </td>
                <td>
                  ⇣
                  <DurationTime
                    start={_import.recordAssociatedAt}
                    end={_import.recordUpdatedAt}
                  />
                </td>
              </tr>
              <tr>
                <td>Groups Updated</td>
                <td>
                  {_import.groupsUpdatedAt
                    ? formatTimestamp(_import.groupsUpdatedAt)
                    : "pending"}
                </td>
                <td>
                  ⇣
                  <DurationTime
                    start={_import.recordUpdatedAt}
                    end={_import.groupsUpdatedAt}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { import: _import } = await execApi("get", `/import/${id}`);

  const { groups } = await execApi("get", `/groups`);
  return { _import, groups };
};
