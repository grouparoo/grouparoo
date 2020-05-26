import ImportTabs from "../../../components/tabs/import";
import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Table, Badge, Alert } from "react-bootstrap";
import Link from "next/link";
import Moment from "react-moment";

export default function Page(props) {
  const { groups, _import } = props;

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

      <ImportTabs name={_import.guid} />

      <h1>{_import.guid}</h1>
      <p>
        Creator:{" "}
        <Link
          href=""
          as={`/${
            _import.creatorType === "run" ? "imports" : _import.creatorType
          }/${_import.creatorGuid}`}
          prefetch={false}
        >
          <a>
            {_import.creatorType === "group"
              ? `"${groupName(_import.creatorGuid)}"`
              : null}{" "}
            {_import.creatorGuid}
          </a>
        </Link>
        <br />
        Profile:{" "}
        <Link href="/profile/[guid]" as={`/profile/${_import.profileGuid}`}>
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
              <ul>
                {Object.keys(_import.oldProfileProperties).map((k) => {
                  return (
                    <li key={`old-${k}`}>
                      {k}:{" "}
                      {_import.oldProfileProperties[k] !==
                      _import.newProfileProperties[k] ? (
                        <>
                          <Badge variant="danger">
                            {_import.oldProfileProperties[k]?.toString()}
                          </Badge>
                          |
                          <Badge variant="success">
                            {_import.newProfileProperties[k]?.toString()}
                          </Badge>
                        </>
                      ) : (
                        <Badge variant="light">
                          {_import.oldProfileProperties[k]?.toString()}
                        </Badge>
                      )}
                    </li>
                  );
                })}

                {Object.keys(_import.newProfileProperties).map((k) =>
                  _import.oldProfileProperties[k] === undefined ? (
                    <li key={`old-${k}`}>
                      {k}:{" "}
                      <Badge variant="success">
                        {_import.newProfileProperties[k]?.toString()}
                      </Badge>
                    </li>
                  ) : null
                )}
              </ul>
            </Col>
            <Col>
              <strong>Groups</strong>
              <ul>
                {_import.oldGroupGuids.map((groupGuid) => {
                  return (
                    <li key={`grp-${groupGuid}`}>
                      <Badge
                        variant={
                          !_import.newGroupGuids.includes(groupGuid)
                            ? "danger"
                            : "light"
                        }
                      >
                        <Link href="/group/[guid]" as={`/group/${groupGuid}`}>
                          <a>{groupName(groupGuid)}</a>
                        </Link>
                      </Badge>
                    </li>
                  );
                })}

                {_import.newGroupGuids.map((groupGuid) =>
                  !_import.oldGroupGuids.includes(groupGuid) ? (
                    <li key={`grp-${groupGuid}`}>
                      <Badge variant="success">
                        <Link href="/group/[guid]" as={`/group/${groupGuid}`}>
                          <a>{groupName(groupGuid)}</a>
                        </Link>
                      </Badge>
                    </li>
                  ) : null
                )}
              </ul>
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
              <Moment duration={_import.createdAt} date={_import.exportedAt} />
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
              <tr>
                <td>Exported</td>
                <td>{new Date(_import.exportedAt).toLocaleString()}</td>
                <td>
                  ⇣
                  <Moment
                    duration={_import.groupsUpdatedAt}
                    date={_import.exportedAt}
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
  const { execApi } = useApi(null, ctx?.req?.headers?.cookie);
  const { import: _import } = await execApi("get", `/import/${guid}`);
  const { groups } = await execApi("get", `/groups`);
  return { _import, groups };
};
