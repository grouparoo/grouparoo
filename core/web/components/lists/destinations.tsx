import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import Link from "next/link";
import Router from "next/router";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";
import Moment from "react-moment";
import AppIcon from "../appIcon";

export default function ({
  apiVersion,
  errorHandler,
  destinationHandler,
  query,
}) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [total, setTotal] = useState(0);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);

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
    }
  }

  async function updateURLParams() {
    let url = `${window.location.pathname}?`;
    if (offset && offset !== 0) {
      url += `offset=${offset}&`;
    }

    Router.push(Router.route, url, { shallow: true });
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
            <th>App</th>
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
                    href="/destination/[guid"
                    as={`/destination/${destination.guid}`}
                  >
                    <a>
                      <strong>{destination.name}</strong>
                      <br />
                      {destination.guid}
                    </a>
                  </Link>
                </td>
                <td>
                  <Link href="/app/[guid]" as={`/app/${destination.app.guid}`}>
                    <a>
                      <strong>{destination.app.name}</strong>
                      <br />
                      {destination.app.guid}
                    </a>
                  </Link>
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
