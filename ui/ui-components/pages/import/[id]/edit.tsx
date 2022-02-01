import ImportTabs from "../../../components/tabs/Import";
import Head from "next/head";
import { Row, Col, Table, Alert, Card } from "react-bootstrap";
import Link from "next/link";
import { Models } from "../../../utils/apiData";
import { DurationTime } from "../../../components/DurationTime";
import { formatTimestamp } from "../../../utils/formatTimestamp";
import StateBadge from "../../../components/badges/StateBadge";
import { generateClient } from "../../../client/client";
import { NextPageContext } from "next";

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
            <Link href={`/model/${_import.modelId}/overview`}>
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
          <strong>Data</strong>
          <pre>
            <code>{JSON.stringify(_import.data, null, 4)}</code>
          </pre>
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
                end={_import.importedAt}
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
                <td>Imported</td>
                <td>
                  {_import.importedAt
                    ? formatTimestamp(_import.importedAt)
                    : "pending"}
                </td>
                <td>
                  ⇣
                  <DurationTime
                    start={_import.recordAssociatedAt}
                    end={_import.importedAt}
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

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { id } = ctx.query;
  const client = generateClient(ctx);
  const { import: _import } = await client.request("get", `/import/${id}`);

  const { groups } = await client.request("get", `/groups`);
  return { _import, groups };
};
