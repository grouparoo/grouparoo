import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useHistoryPagination } from "../../hooks/useHistoryPagination";
import Link from "next/link";
import Router from "next/router";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";
import Moment from "react-moment";
import AppIcon from "../appIcon";
import StateBadge from "../stateBadge";

import { SourceAPIData } from "../../utils/apiData";

export default function ({ errorHandler, sourceHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [sources, setSources] = useState<SourceAPIData[]>([]);
  const [total, setTotal] = useState(0);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  useHistoryPagination(offset, "offset", setOffset);

  useEffect(() => {
    load();

    sourceHandler.subscribe("team-list", load);

    return () => {
      sourceHandler.unsubscribe("team-list", load);
    };
  }, [offset, limit]);

  async function load() {
    updateURLParams();
    setLoading(true);
    const response = await execApi("get", `/sources`, {
      limit,
      offset,
    });
    setLoading(false);
    if (response?.sources) {
      setSources(response.sources);
      setTotal(response.total);

      if (response.total === 0) {
        Router.push("/source/new");
      }
    }
  }

  async function updateURLParams() {
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
      <p>{total} sources</p>

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
            <th>App</th>
            <th>State</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {sources.map((source) => {
            return (
              <tr key={`source-${source.guid}`}>
                <td>
                  <AppIcon src={source.app?.icon} />
                </td>
                <td>
                  <Link href="/source/[guid]" as={`/source/${source.guid}`}>
                    <a>
                      <strong>
                        {source.name ||
                          `${source.state} created on ${
                            new Date(source.createdAt)
                              .toLocaleString()
                              .split(",")[0]
                          }`}
                      </strong>
                    </a>
                  </Link>
                </td>
                <td>{source.type}</td>
                <td>
                  <Link href="/app/[guid]" as={`/app/${source.app.guid}`}>
                    <a>
                      <strong>{source.app.name}</strong>
                    </a>
                  </Link>
                </td>
                <td>
                  <StateBadge state={source.state} />
                </td>
                <td>
                  <Moment fromNow>{source.createdAt}</Moment>
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
