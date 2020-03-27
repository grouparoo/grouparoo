import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import Link from "next/link";
import Moment from "react-moment";
import LoadingTable from "../loadingTable";

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const { guid } = query;

  // pagination
  const limit = 999;
  const [offset, setOffset] = useState(query.offset || 0);

  useEffect(() => {
    load();
  }, [offset, limit]);

  async function load() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/group/${guid}/destinations`
    );
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
                  <Link
                    href="/destination/[guid]"
                    as={`/destination/${destination.guid}`}
                  >
                    <a>
                      {destination.name}
                      <br />
                      {destination.guid}
                    </a>
                  </Link>
                </td>
                <td>
                  <Link href="/app/[guid]" as={`/app/${destination.app.guid}`}>
                    <a>
                      {destination.app.name}
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
    </>
  );
}
