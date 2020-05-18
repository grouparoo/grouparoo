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

import { DestinationAPIData } from "../../utils/apiData";

export default function ({
  apiVersion,
  errorHandler,
  destinationHandler,
  query,
}) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [destinations, setDestinations] = useState<DestinationAPIData[]>([]);
  const [total, setTotal] = useState(0);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  useHistoryPagination(offset, "offset", setOffset);

  useEffect(() => {
    load();

    destinationHandler.subscribe("team-list", load);

    return () => {
      destinationHandler.unsubscribe("team-list", load);
    };
  }, [offset, limit]);

  async function load() {
    updateURLParams();
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/destinations`, {
      limit,
      offset,
    });
    setLoading(false);
    if (response?.destinations) {
      setDestinations(response.destinations);
      setTotal(response.total);

      if (response.total === 0) {
        Router.push("/destination/new");
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
      <p>{total} destinations</p>

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
            <th>Destination Name</th>
            <th>Group Tracked</th>
            <th>App</th>
            <th>State</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {destinations.map((destination) => {
            return (
              <tr key={`destination-${destination.guid}`}>
                <td>
                  <AppIcon src={destination.app?.icon} />
                </td>
                <td>
                  <Link
                    href="/destination/[guid]"
                    as={`/destination/${destination.guid}`}
                  >
                    <a>
                      <strong>
                        {destination.name ||
                          `${destination.state} created on ${
                            new Date(destination.createdAt)
                              .toLocaleString()
                              .split(",")[0]
                          }`}
                      </strong>
                    </a>
                  </Link>
                </td>
                <td>
                  {destination.trackAllGroups ? (
                    "All Groups"
                  ) : destination.destinationGroups[0]?.name ? (
                    <Link
                      href="/group/[guid]"
                      as={`/group/${destination.destinationGroups[0].guid}`}
                    >
                      <a>{destination.destinationGroups[0].name}</a>
                    </Link>
                  ) : (
                    "None"
                  )}
                </td>
                <td>
                  <Link href="/app/[guid]" as={`/app/${destination.app.guid}`}>
                    <a>
                      <strong>{destination.app.name}</strong>
                    </a>
                  </Link>
                </td>
                <td>
                  <StateBadge state={destination.state} />
                </td>
                <td>
                  <Moment fromNow>{destination.createdAt}</Moment>
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
