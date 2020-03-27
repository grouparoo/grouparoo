import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useHistoryPagination } from "../../hooks/useHistoryPagination";
import Router from "next/router";
import Link from "next/link";
import GroupStateBadge from "../badges/group/state";
import Moment from "react-moment";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";

export default function ({ apiVersion, errorHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [groups, setGroups] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  useHistoryPagination(offset, "offset", setOffset);

  useEffect(() => {
    load();
  }, [limit, offset]);

  async function load() {
    updateURLParams();
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/groups`, {
      limit,
      offset,
    });
    setLoading(false);
    if (response?.groups) {
      setGroups(response.groups);
      setTotal(response.total);
    }
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
      <p>{total} groups</p>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Profiles</th>
            <th>State</th>
            <th>Calculated At</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => {
            return (
              <tr key={`group-${group.guid}`}>
                <td>
                  <Link href="/group/[guid]" as={`/group/${group.guid}`}>
                    <a>
                      <strong>{group.name}</strong>
                      {/* <br /><span className='text-muted'>{group.guid}</span> */}
                    </a>
                  </Link>
                </td>
                <td>{group.type}</td>
                <td>{group.profilesCount}</td>
                <td>
                  <GroupStateBadge state={group.state} />
                </td>
                <td>
                  {group.calculatedAt ? (
                    <Moment fromNow>{group.calculatedAt}</Moment>
                  ) : (
                    "Never"
                  )}
                </td>
                <td>
                  <Moment fromNow>{group.createdAt}</Moment>
                </td>
                <td>
                  <Moment fromNow>{group.updatedAt}</Moment>
                </td>
              </tr>
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
