import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useHistoryPagination } from "../../hooks/useHistoryPagination";
import Router from "next/router";
import Link from "next/link";
import Moment from "react-moment";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";
import AppIcon from "../appIcon";
import StateBadge from "../stateBadge";

import { AppAPIData } from "../../utils/apiData";

export default function ({ errorHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [apps, setApps] = useState<AppAPIData[]>([]);
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
    const response = await execApi("get", `/apps`, {
      limit,
      offset,
    });
    setLoading(false);
    if (response?.apps) {
      setApps(response.apps);
      setTotal(response.total);

      if (response.total === 0) {
        Router.push("/app/new");
      }
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
      <p>{total} apps</p>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Type</th>
            <th>State</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {apps.map((app) => {
            return (
              <tr key={`team-${app.guid}`}>
                <td>
                  <AppIcon src={app.icon} />
                </td>
                <td>
                  <Link href="/app/[guid]" as={`/app/${app.guid}`}>
                    <a>
                      <strong>
                        {app.name ||
                          `${app.state} created ${
                            new Date(app.createdAt)
                              .toLocaleString()
                              .split(",")[0]
                          }`}
                      </strong>
                    </a>
                  </Link>
                </td>
                <td>{app.type}</td>
                <td>
                  <StateBadge state={app.state} />
                </td>
                <td>
                  <Moment fromNow>{app.createdAt}</Moment>
                </td>
                <td>
                  <Moment fromNow>{app.updatedAt}</Moment>
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
