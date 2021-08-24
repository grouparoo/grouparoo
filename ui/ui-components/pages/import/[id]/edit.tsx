import ImportTabs from "../../../components/tabs/import";
import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Table, Alert, Card } from "react-bootstrap";
import Link from "next/link";
import Moment from "react-moment";
import { Models } from "../../../utils/apiData";
import {
  ImportRecordPropertiesDiff,
  ImportGroupsDiff,
} from "../../../components/import/diff";

export default function Page(props) {
  const {
    groups,
    _import,
  }: { groups: Models.GroupType[]; _import: Models.ImportType } = props;

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
            Creator:{" "}
            {_import.creatorType === "run" ? (
              <Link href="/run/[id]/edit" as={`/run/${_import.creatorId}/edit`}>
                <a>{_import.creatorId}</a>
              </Link>
            ) : (
              _import.creatorId
            )}
            <br />
            Record:{" "}
            <Link
              href="/record/[id]/edit"
              as={`/record/${_import.recordId}/edit`}
            >
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
              <Moment
                duration={_import.createdAt}
                date={_import.groupsUpdatedAt}
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
                <td>{new Date(_import.createdAt).toLocaleString()}</td>
                <td>⇣</td>
              </tr>
              <tr>
                <td>Associated</td>
                <td>{new Date(_import.recordAssociatedAt).toLocaleString()}</td>
                <td>
                  ⇣
                  <Moment
                    duration={_import.recordAssociatedAt || 0}
                    date={_import.createdAt}
                  />
                </td>
              </tr>
              <tr>
                <td>Record Updated</td>
                <td>{new Date(_import.recordUpdatedAt).toLocaleString()}</td>
                <td>
                  ⇣
                  <Moment
                    duration={_import.recordAssociatedAt || 0}
                    date={_import.recordUpdatedAt}
                  />
                </td>
              </tr>
              <tr>
                <td>Groups Updated</td>
                <td>{new Date(_import.groupsUpdatedAt).toLocaleString()}</td>
                <td>
                  ⇣
                  <Moment
                    duration={_import.groupsUpdatedAt}
                    date={_import.recordUpdatedAt}
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
  const { execApi } = useApi(ctx);
  const { import: _import } = await execApi("get", `/import/${id}`);
  const { groups } = await execApi("get", `/groups`);
  return { _import, groups };
};
