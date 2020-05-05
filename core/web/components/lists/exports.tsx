import { Fragment, useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useHistoryPagination } from "../../hooks/useHistoryPagination";
import Link from "next/link";
import Router from "next/router";
import { Badge, ButtonGroup, Button, Alert } from "react-bootstrap";
import Pagination from "../pagination";
import Moment from "react-moment";
import LoadingTable from "../loadingTable";

export default function ({ apiVersion, errorHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [_exports, setExports] = useState([]);
  const [groups, setGroups] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectedDestinationGuid, setSelectedDestinationGuid] = useState(
    query.selectedDestinationGuid || ""
  );

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  const profileGuid = query?.guid?.match(/^pro_/) ? query.guid : null;
  const destinationGuid = query?.guid?.match(/^dst_/) ? query.guid : null;
  useHistoryPagination(offset, "offset", setOffset);

  useEffect(() => {
    load();
  }, [offset, limit, profileGuid, selectedDestinationGuid]);

  async function load() {
    updateURLParams();
    setLoading(true);
    const groupsResponse = await execApi("get", `/api/${apiVersion}/groups`);
    if (groupsResponse?.groups) {
      setGroups(groupsResponse.groups);
    }

    const destinationsResponse = await execApi(
      "get",
      `/api/${apiVersion}/destinations`
    );
    if (destinationsResponse?.destinations) {
      setDestinations(destinationsResponse.destinations);
    }

    const response = await execApi("get", `/api/${apiVersion}/exports`, {
      limit,
      offset,
      profileGuid,
      destinationGuid: destinationGuid
        ? destinationGuid
        : selectedDestinationGuid,
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

  function formatCreatedAt(timeString) {
    // 2019-12-07T00:03:23.417Z
    const date = timeString.split("T")[0];
    const time = timeString.split("T")[1].split(".")[0];
    return `${date} ${time}`;
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    if (
      window.location.pathname.indexOf("/profile/") >= 0 ||
      window.location.pathname.indexOf("/destination/") >= 0
    ) {
      url += "tab=exports&";
    }
    if (selectedDestinationGuid && selectedDestinationGuid !== "") {
      url += `selectedDestinationGuid=${selectedDestinationGuid}&`;
    }
    if (offset && offset !== 0) {
      url += `offset=${offset}&`;
    }

    const routerMethod =
      url === `${window.location.pathname}?` ? "replace" : "push";
    Router[routerMethod](Router.route, url, { shallow: true });
  }

  const allButtonVariant = selectedDestinationGuid !== "" ? "info" : "success";

  return (
    <>
      {destinationGuid ? null : (
        <>
          <ButtonGroup id="log-types">
            <Button
              size="sm"
              variant={allButtonVariant}
              onClick={() => setSelectedDestinationGuid("")}
            >
              All
            </Button>
            {destinations.map((d) => {
              const variant =
                d.guid === selectedDestinationGuid ? "success" : "info";
              return (
                <Button
                  key={`destination-${d.guid}`}
                  size="sm"
                  variant={variant}
                  onClick={() => setSelectedDestinationGuid(d.guid)}
                >
                  {d.name}
                </Button>
              );
            })}
          </ButtonGroup>
          <br />
          <br />
        </>
      )}

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
                    <Link href="/export/[guid]" as={`/export/${_export.guid}`}>
                      <a>{_export.guid}</a>
                    </Link>
                    <br />
                    Profile:{" "}
                    <Link
                      href="/profile/[guid]"
                      as={`/profile/${_export.profileGuid}`}
                    >
                      <a>{_export.profileGuid}</a>
                    </Link>
                    <br />
                    Destination:{" "}
                    <Link
                      href="/destination/[guid]"
                      as={`/destination/${_export.destination.guid}`}
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
