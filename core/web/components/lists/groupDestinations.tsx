import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import Link from "next/link";
import Moment from "react-moment";
import LoadingTable from "../loadingTable";
import AppIcon from "./../appIcon";

import { DestinationAPIData } from "../../utils/apiData";

export default function ({ errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [destinations, setDestinations] = useState<DestinationAPIData[]>([]);
  const { guid } = query;

  // pagination
  const limit = 999;
  const [offset, setOffset] = useState(query.offset || 0);

  useEffect(() => {
    load();
  }, [offset, limit]);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/group/${guid}/destinations`);
    setLoading(false);
    if (response?.destinations) {
      setDestinations(response.destinations);
    }
  }

  return (
    <>
      <p>{destinations.length} destinations interested in this group</p>

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th />
            <th>Destination</th>
            <th>App</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {destinations.map((destination) => {
            return (
              <tr key={`destination-${destination.guid}`}>
                <td>
                  <AppIcon src={destination.app.icon} />
                </td>
                <td>
                  <Link
                    href="/destination/[guid]"
                    as={`/destination/${destination.guid}`}
                  >
                    <a>{destination.name}</a>
                  </Link>
                </td>
                <td>
                  <Link href="/app/[guid]" as={`/app/${destination.app.guid}`}>
                    <a>{destination.app.name}</a>
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
    </>
  );
}
