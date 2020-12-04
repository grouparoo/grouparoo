import { Fragment, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { useOffset, updateURLParams } from "../../hooks/URLParams";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import Link from "next/link";
import { useRouter } from "next/router";
import { Row, Col, ButtonGroup, Button, Badge, Alert } from "react-bootstrap";
import Pagination from "../pagination";
import Moment from "react-moment";
import LoadingTable from "../loadingTable";
import { Models, Actions } from "../../utils/apiData";
import { ErrorHandler } from "../../utils/errorHandler";
import { ExportGroupsDiff, ExportProfilePropertiesDiff } from "./diff";

export default function ExportsList(props) {
  const {
    errorHandler,
    groups,
  }: { errorHandler: ErrorHandler; groups: Models.GroupType[] } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [_exports, setExports] = useState<Models.ExportType[]>(props._exports);
  const [total, setTotal] = useState<number>(props.total);

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();
  const [state, setState] = useState(router.query.state?.toString() || "");

  let profileGuid: string;
  let destinationGuid: string;
  if (router.query.guid) {
    if (router.pathname.match("/profile/")) {
      profileGuid = router.query.guid.toString();
    } else {
      destinationGuid = router.query.guid.toString();
    }
  }

  useSecondaryEffect(() => {
    load();
  }, [offset, limit, state]);

  async function load() {
    updateURLParams(router, { state, offset });
    setLoading(true);
    const response: Actions.ExportsList = await execApi("get", `/exports`, {
      limit,
      offset,
      state,
      profileGuid,
      destinationGuid,
    });
    setLoading(false);
    if (response?.exports) {
      setExports(response.exports);
      setTotal(response.total);

      if (response.total === 0 && offset > 0) {
        setOffset(0);
      }
    }
  }

  function formatTimestamp(timestamp) {
    const [date, time] = new Date(timestamp).toLocaleString().split(",");
    return `${date} ${time}`;
  }

  return (
    <>
      {props.header ? props.header : <h1>Exports</h1>}

      <Row>
        <Col md={3}>
          <strong>{total} exports with these filters</strong>
        </Col>
        <Col>
          State:{" "}
          <ButtonGroup>
            <Button
              size="sm"
              variant={state === "" ? "secondary" : "info"}
              onClick={() => setState("")}
            >
              All
            </Button>
            <Button
              size="sm"
              variant={state === "created" ? "secondary" : "info"}
              onClick={() => setState("created")}
            >
              Created
            </Button>
            <Button
              size="sm"
              variant={state === "started" ? "secondary" : "info"}
              onClick={() => setState("started")}
            >
              Started
            </Button>
            <Button
              size="sm"
              variant={state === "completed" ? "secondary" : "info"}
              onClick={() => setState("completed")}
            >
              Completed
            </Button>
            <Button
              size="sm"
              variant={state === "error" ? "secondary" : "info"}
              onClick={() => setState("error")}
            >
              Error
            </Button>
          </ButtonGroup>
        </Col>
      </Row>

      <hr />
      <br />

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>Guids</th>
            <th>Times</th>
            <th>Profile Properties Exported</th>
            <th>Groups Exported</th>
          </tr>
        </thead>
        <tbody>
          {_exports.map((_export) => {
            return (
              <Fragment key={`export-${_export.guid}`}>
                <tr>
                  <td>
                    <span>Guid</span>:{" "}
                    <Link
                      href="/export/[guid]/edit"
                      as={`/export/${_export.guid}/edit`}
                    >
                      <a>{_export.guid}</a>
                    </Link>
                    <br />
                    Profile:{" "}
                    <Link
                      href="/profile/[guid]/edit"
                      as={`/profile/${_export.profileGuid}/edit`}
                    >
                      <a>{_export.profileGuid}</a>
                    </Link>
                    <br />
                    Destination:{" "}
                    <Link
                      href="/destination/[guid]/edit"
                      as={`/destination/${_export.destination.guid}/edit`}
                    >
                      <a>{_export.destination.name}</a>
                    </Link>
                    <br />
                    To Delete?{" "}
                    {_export.toDelete ? (
                      <Badge variant="danger">true</Badge>
                    ) : (
                      "false"
                    )}
                    <br />
                    Most Recent? {_export.mostRecent.toString()}
                    <br />
                    Has Changes? {_export.hasChanges.toString()}
                    <br />
                    Forced: {_export.force.toString()}
                  </td>
                  <td>
                    Created:{" "}
                    {_export.createdAt
                      ? formatTimestamp(_export.createdAt)
                      : null}
                    <br />
                    Start:{" "}
                    {_export.startedAt
                      ? formatTimestamp(_export.startedAt)
                      : null}
                    <br />
                    End:{" "}
                    {_export.completedAt
                      ? formatTimestamp(_export.completedAt)
                      : null}
                    <br />
                    Duration:{" "}
                    {_export.completedAt ? (
                      <Moment
                        duration={_export.createdAt}
                        date={_export.completedAt}
                      />
                    ) : null}
                  </td>
                  <td>
                    <ExportProfilePropertiesDiff _export={_export} />
                  </td>
                  <td>
                    <ExportGroupsDiff _export={_export} groups={groups} />
                  </td>
                </tr>

                {_export.errorMessage ? (
                  <tr>
                    <td colSpan={7} style={{ border: 0 }}>
                      <Alert variant="warning">{_export.errorMessage}</Alert>
                    </td>
                  </tr>
                ) : null}
              </Fragment>
            );
          })}
        </tbody>
      </LoadingTable>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />
    </>
  );
}

ExportsList.hydrate = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { guid, limit, offset, state } = ctx.query;
  const { groups } = await execApi("get", `/groups`);

  let profileGuid: string;
  let destinationGuid: string;
  if (guid) {
    if (ctx.pathname.match("/profile/")) {
      profileGuid = guid;
    } else {
      destinationGuid = guid;
    }
  }

  const { exports: _exports, total } = await execApi("get", `/exports`, {
    limit,
    offset,
    state,
    destinationGuid,
    profileGuid,
  });

  return { groups, _exports, total };
};
