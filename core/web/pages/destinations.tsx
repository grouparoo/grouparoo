import Head from "next/head";
import { Button } from "react-bootstrap";
import Router from "next/router";
import { useApi } from "../hooks/useApi";
import { useState } from "react";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import { useHistoryPagination } from "../hooks/useHistoryPagination";
import Link from "next/link";
import Pagination from "../components/pagination";
import LoadingTable from "../components/loadingTable";
import Moment from "react-moment";
import AppIcon from "../components/appIcon";
import StateBadge from "../components/stateBadge";

import { DestinationAPIData } from "../utils/apiData";

export default function Page(props) {
  const { errorHandler, query } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [destinations, setDestinations] = useState<DestinationAPIData[]>(
    props.destinations
  );
  const [total, setTotal] = useState(props.total);

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
    const response = await execApi("get", `/destinations`, {
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
      <Head>
        <title>Grouparoo: Destinations</title>
      </Head>

      <h1>Destination</h1>

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
                    href="/destination/[guid]/edit"
                    as={`/destination/${destination.guid}/edit`}
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

      <br />
      <Button
        variant="primary"
        onClick={() => {
          Router.push("/destination/new");
        }}
      >
        Add new Destination
      </Button>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { limit, offset } = ctx.query;
  const { destinations, total } = await execApi("get", `/destinations`, {
    limit,
    offset,
  });
  return { destinations, total };
};
