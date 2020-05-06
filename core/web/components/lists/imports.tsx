import { Fragment, useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useHistoryPagination } from "../../hooks/useHistoryPagination";
import Link from "next/link";
import Router from "next/router";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";
import { Alert, Badge } from "react-bootstrap";
import Moment from "react-moment";

export default function ({ apiVersion, errorHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [imports, setImports] = useState([]);
  const [groups, setGroups] = useState([]);
  const [total, setTotal] = useState(0);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  const [creatorGuid, setCreatorGuid] = useState(query.creatorGuid || null);
  const [profileGuid, setProfileGuid] = useState(query.guid || null);
  useHistoryPagination(offset, "offset", setOffset);

  useEffect(() => {
    load();
  }, [offset, limit, creatorGuid]);

  async function load() {
    updateURLParams();
    setLoading(true);
    const groupsResponse = await execApi("get", `/api/${apiVersion}/groups`);
    if (groupsResponse?.groups) {
      setGroups(groupsResponse.groups);
    }

    const response = await execApi("get", `/api/${apiVersion}/imports`, {
      limit,
      offset,
      creatorGuid,
      profileGuid,
    });
    setLoading(false);
    if (response?.imports) {
      setImports(response.imports);
      setTotal(response.total);
    }
  }

  async function updateURLParams() {
    let url = `${window.location.pathname}?`;
    if (window.location.pathname.indexOf("/profile/") >= 0) {
      url += "tab=imports&";
    }
    if (offset && offset !== 0) {
      url += `offset=${offset}&`;
    }

    const routerMethod =
      url === `${window.location.pathname}?` ? "replace" : "push";
    Router[routerMethod](Router.route, url, { shallow: true });
  }

  function groupLink(groupGuid) {
    const group = groups.filter((g) => g.guid === groupGuid)[0];

    if (group) {
      return (
        <Link href="/group/[guid]" as={`/group/${group.guid}`}>
          <a>{group.name}</a>
        </Link>
      );
    } else {
      return <span>{group.name}</span>;
    }
  }

  return (
    <>
      <p>
        {total} imports {creatorGuid ? `for ${creatorGuid}` : null}
      </p>

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
            <th>Profile Properties</th>
            <th>Groups</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {imports.map((_import) => {
            return (
              <Fragment key={`import-${_import.guid}`}>
                <tr>
                  <td>
                    <span className="text-info">
                      Guid:
                      <Link
                        href="/import/[guid]"
                        as={`/import/${_import.guid}`}
                      >
                        <a> {_import.guid}</a>
                      </Link>
                    </span>
                    <br /> Profile:{" "}
                    {_import.profileGuid ? (
                      <Link
                        href="/profile/[guid]"
                        as={`/profile/${_import.profileGuid}`}
                      >
                        <a>{_import.profileGuid}</a>
                      </Link>
                    ) : (
                      "none"
                    )}
                    <br />
                    Creator:{" "}
                    {_import.creatorType === "run" ? (
                      <Link
                        href="/run/[creatorGuid]"
                        as={`/run/${_import.creatorGuid}`}
                      >
                        <a>{_import.creatorGuid}</a>
                      </Link>
                    ) : (
                      _import.creatorGuid
                    )}
                  </td>
                  <td>
                    Created: <Moment fromNow>{_import.createdAt}</Moment>
                    <br /> Profile Associated:{" "}
                    {_import.profileAssociatedAt ? (
                      <Moment fromNow>{_import.profileAssociatedAt}</Moment>
                    ) : (
                      <span>x</span>
                    )}
                    <br /> Profile Updated:{" "}
                    {_import.profileUpdatedAt ? (
                      <Moment fromNow>{_import.profileUpdatedAt}</Moment>
                    ) : (
                      <span>x</span>
                    )}
                    <br /> Groups Updated:{" "}
                    {_import.groupsUpdatedAt ? (
                      <Moment fromNow>{_import.groupsUpdatedAt}</Moment>
                    ) : (
                      <span>x</span>
                    )}
                    <br /> Exported:{" "}
                    {_import.exportedAt ? (
                      <Moment fromNow>{_import.exportedAt}</Moment>
                    ) : (
                      <span>x</span>
                    )}
                  </td>
                  <td>
                    <ul>
                      {Object.keys(_import.oldProfileProperties).map((k) => {
                        return (
                          <li key={`${_import.guid}-prp-${k}`}>
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
                          <li key={`${_import.guid}-prp-${k}`}>
                            {k}:{" "}
                            <Badge variant="success">
                              {_import.newProfileProperties[k]?.toString()}
                            </Badge>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {_import.oldGroupGuids.map((g) => {
                        return (
                          <li key={`${_import.guid}-grp-${g}`}>
                            <Badge
                              variant={
                                !_import.newGroupGuids.includes(g)
                                  ? "danger"
                                  : "light"
                              }
                            >
                              {groupLink(g)}
                            </Badge>
                          </li>
                        );
                      })}

                      {_import.newGroupGuids.map((g) =>
                        !_import.oldGroupGuids.includes(g) ? (
                          <li key={`${_import.guid}-grp-${g}`}>
                            <Badge variant="success">{groupLink(g)}</Badge>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </td>
                  <td>
                    {Object.keys(_import.data).map((k) => (
                      <li key={`import-${_import.guid}-${k}`}>
                        {k}: {_import.data[k].toString()}
                      </li>
                    ))}
                  </td>
                </tr>

                {_import.errorMessage ? (
                  <tr>
                    <td colSpan={7} style={{ border: 0 }}>
                      <Alert variant="warning">
                        {_import.errorMessage}
                        {_import.errorMetadata ? (
                          <EventErrorMetadata import={_import} />
                        ) : null}
                      </Alert>
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

function EventErrorMetadata({ import: _import }) {
  const data = JSON.parse(_import.errorMetadata);

  return (
    <>
      <br />
      <br />
      <p>
        step: <code>{data.step}</code>
      </p>
    </>
  );
}
