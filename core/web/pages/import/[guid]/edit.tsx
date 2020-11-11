import ImportTabs from "../../../components/tabs/import";
import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Table, Alert } from "react-bootstrap";
import Link from "next/link";
import Moment from "react-moment";
import { Models } from "../../../utils/apiData";
import {
  ImportProfilePropertiesDiff,
  ImportGroupsDiff,
} from "../../../components/import/diff";

export default function Page(props) {
  const {
    groups,
    _import,
  }: { groups: Models.GroupType[]; _import: Models.ImportType } = props;

  function groupName(groupGuid) {
    const group = groups.filter((g) => g.guid === groupGuid)[0];
    if (group) {
      return group.name;
    }
  }

  const errorMetadata = _import.errorMetadata
    ? JSON.parse(_import.errorMetadata)
    : {};

  return (
    <>
      <Head>
        <title>Grouparoo: {_import.guid}</title>
      </Head>

      <ImportTabs import={_import} />

      <h1>{_import.guid}</h1>
      <p>
        Creator:{" "}
        <Link href={`/object/${_import.creatorGuid}`} prefetch={false}>
          <a>
            {_import.creatorType === "group"
              ? `"${groupName(_import.creatorGuid)}"`
              : null}{" "}
            {_import.creatorGuid}
          </a>
        </Link>
        <br />
        Profile:{" "}
        <Link
          href="/profile/[guid]/edit"
          as={`/profile/${_import.profileGuid}/edit`}
        >
          <a>{_import.profileGuid}</a>
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
      <hr />

      <Row>
        <Col>
          <h2>Data</h2>

          <Row>
            <Col>
              <strong>Profile Properties</strong>
              <ImportProfilePropertiesDiff _import={_import} />
            </Col>
            <Col>
              <strong>Groups</strong>
              <ImportGroupsDiff _import={_import} groups={groups} />
            </Col>
          </Row>

          <Row>
            <Col>
              <strong>Data</strong>
              <pre>
                <code>{JSON.stringify(_import.data, null, 4)}</code>
              </pre>
            </Col>
            <Col>
              <strong>Raw Data</strong>
              <pre>
                <code>{JSON.stringify(_import.rawData, null, 4)}</code>
              </pre>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
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
                <td>
                  {new Date(_import.profileAssociatedAt).toLocaleString()}
                </td>
                <td>
                  ⇣
                  <Moment
                    duration={_import.profileAssociatedAt || 0}
                    date={_import.createdAt}
                  />
                </td>
              </tr>
              <tr>
                <td>Profile Updated</td>
                <td>{new Date(_import.profileUpdatedAt).toLocaleString()}</td>
                <td>
                  ⇣
                  <Moment
                    duration={_import.profileAssociatedAt || 0}
                    date={_import.profileUpdatedAt}
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
                    date={_import.profileUpdatedAt}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { import: _import } = await execApi("get", `/import/${guid}`);
  const { groups } = await execApi("get", `/groups`);
  return { _import, groups };
};
