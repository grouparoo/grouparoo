import { Fragment, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { useSecondaryEffect } from "../../../hooks/useSecondaryEffect";
import { useHistoryPagination } from "../../../hooks/useHistoryPagination";
import Link from "next/link";
import Router from "next/router";
import { Badge, Alert } from "react-bootstrap";
import Pagination from "../../../components/pagination";
import Moment from "react-moment";
import LoadingTable from "../../../components/loadingTable";
import Head from "next/head";
import DestinationTabs from "../../../components/tabs/destination";

import { ExportAPIData } from "../../../utils/apiData";

export default function Page(params) {
  const { errorHandler, query, destination, groups } = params;
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [_exports, setExports] = useState<ExportAPIData[]>(params._exports);
  const [total, setTotal] = useState(params.total);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  useHistoryPagination(offset, "offset", setOffset);

  useSecondaryEffect(() => {
    load();
  }, [offset, limit]);

  async function load() {
    updateURLParams();
    setLoading(true);
    const response = await execApi("get", `/exports`, {
      limit,
      offset,
      destinationGuid: destination.guid,
    });
    setLoading(false);
    if (response?.exports) {
      setExports(response.exports);
      setTotal(response.total);

      if (response.exports.length === 0 && offset > 0) {
        setOffset(0);
      }
    }
  }

  function groupLink(groupName) {
    const group = groups.filter((g) => g.name === groupName)[0];

    if (group) {
      return (
        <Link href="/group/[guid]" as={`/group/${group.guid}`}>
          <a>{groupName}</a>
        </Link>
      );
    } else {
      return <span>{groupName}</span>;
    }
  }

  function formatCreatedAt(timestamp) {
    const [date, time] = new Date(timestamp).toLocaleString().split(",");
    return `${date} ${time}`;
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    if (offset && offset !== 0) {
      url += `offset=${offset}&`;
    }
    const routerMethod =
      url === `${window.location.pathname}?` ? "replace" : "push";
    Router[routerMethod](Router.route, url, { shallow: true });
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {destination.name}</title>
      </Head>

      <DestinationTabs name={destination.name} />

      <h1>Exports</h1>

      <p>{total} exports</p>

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
                    <span className="text-info">Guid</span>:{" "}
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
                  </td>
                  <td>
                    Start: {formatCreatedAt(_export.startedAt)}
                    <br />
                    End:{" "}
                    {_export.completedAt
                      ? formatCreatedAt(_export.completedAt)
                      : null}
                    <br />
                    Duration:{" "}
                    <Moment
                      duration={_export.startedAt}
                      date={_export.completedAt}
                    />
                  </td>
                  <td>
                    <ul>
                      {Object.keys(_export.oldProfileProperties).map((k) => {
                        return (
                          <li key={`${_export.guid}-prp-${k}`}>
                            {k}:{" "}
                            {_export.oldProfileProperties[k] !==
                            _export.newProfileProperties[k] ? (
                              <>
                                <Badge variant="danger">
                                  {_export.oldProfileProperties[k]?.toString()}
                                </Badge>
                                |
                                <Badge variant="success">
                                  {_export.newProfileProperties[k]?.toString()}
                                </Badge>
                              </>
                            ) : (
                              <Badge variant="light">
                                {_export.oldProfileProperties[k]?.toString()}
                              </Badge>
                            )}
                          </li>
                        );
                      })}

                      {Object.keys(_export.newProfileProperties).map((k) =>
                        _export.oldProfileProperties[k] === undefined ? (
                          <li key={`${_export.guid}-prp-${k}`}>
                            {k}:{" "}
                            <Badge variant="success">
                              {_export.newProfileProperties[k]?.toString()}
                            </Badge>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {_export.oldGroups.map((g) => {
                        return (
                          <li key={`${_export.guid}-grp-${g}`}>
                            <Badge
                              variant={
                                !_export.newGroups.includes(g)
                                  ? "danger"
                                  : "light"
                              }
                            >
                              {groupLink(g)}
                            </Badge>
                          </li>
                        );
                      })}

                      {_export.newGroups.map((g) =>
                        !_export.oldGroups.includes(g) ? (
                          <li key={`${_export.guid}-grp-${g}`}>
                            <Badge variant="success">{groupLink(g)}</Badge>
                          </li>
                        ) : null
                      )}
                    </ul>
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

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(null, ctx);
  const { guid, limit, offset } = ctx.query;
  const { destination } = await execApi("get", `/destination/${guid}`);
  const { groups } = await execApi("get", `/groups`);
  const { exports: _exports, total } = await execApi("get", `/exports`, {
    limit,
    offset,
    destinationGuid: guid,
  });

  return { destination, groups, _exports, total };
};
