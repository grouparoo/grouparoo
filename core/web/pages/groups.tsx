import Head from "next/head";
import { Button } from "react-bootstrap";
import Router from "next/router";
import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import { useHistoryPagination } from "../hooks/useHistoryPagination";
import Link from "next/link";
import Moment from "react-moment";
import Pagination from "../components/pagination";
import LoadingTable from "../components/loadingTable";
import StateBadge from "../components/stateBadge";

import { GroupAPIData } from "../utils/apiData";

export default function Page(props) {
  const { errorHandler, query } = props;
  const { execApi } = useApi(errorHandler);
  const [groups, setGroups] = useState<GroupAPIData[]>(props.groups);
  const [total, setTotal] = useState(props.total);
  const [loading, setLoading] = useState(false);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  useHistoryPagination(offset, "offset", setOffset);

  useSecondaryEffect(() => {
    load();
  }, [limit, offset]);

  async function load() {
    updateURLParams();
    setLoading(true);
    const response = await execApi("get", `/groups`, {
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
      <Head>
        <title>Grouparoo: Groups</title>
      </Head>

      <h1>Groups</h1>

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
                  <Link
                    href="/group/[guid]/edit"
                    as={`/group/${group.guid}/edit`}
                  >
                    <a>
                      <strong>{group.name}</strong>
                      {/* <br /><span className='text-muted'>{group.guid}</span> */}
                    </a>
                  </Link>
                </td>
                <td>{group.type}</td>
                <td>{group.profilesCount}</td>
                <td>
                  <StateBadge state={group.state} />
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

      <Button
        size="sm"
        variant="warning"
        onClick={() => {
          Router.push("/group/new");
        }}
      >
        Add Group
      </Button>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(null, ctx?.req?.headers?.cookie);
  const { limit, offset } = ctx.query;
  const { groups, total } = await execApi("get", `/groups`, { limit, offset });
  return { groups, total };
};
