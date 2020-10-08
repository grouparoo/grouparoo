import { useApi } from "../../../hooks/useApi";
import { useOffset } from "../../../hooks/URLParams";
import { useSecondaryEffect } from "../../../hooks/useSecondaryEffect";
import Head from "next/head";
import GroupTabs from "../../../components/tabs/group";
import { useState } from "react";
import Link from "next/link";
import Moment from "react-moment";
import LoadingTable from "../../../components/loadingTable";
import AppIcon from "./../../../components/appIcon";

import { Models } from "../../../utils/apiData";
import { ErrorHandler } from "../../../utils/errorHandler";

export default function Page(props) {
  const {
    errorHandler,
    group,
  }: {
    errorHandler: ErrorHandler;
    group: Models.GroupType;
  } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [destinations, setDestinations] = useState<Models.DestinationType[]>(
    props.destinations
  );

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();
  const [total, setTotal] = useState(props.total);

  useSecondaryEffect(() => {
    load();
  }, [offset, limit]);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/group/${group.guid}/destinations`, {
      limit,
      offset,
    });
    setLoading(false);
    if (response?.destinations) {
      setDestinations(response.destinations);
      setTotal(response.total);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {group.name}</title>
      </Head>

      <GroupTabs group={group} />

      <h1>Group Destination</h1>
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
                    href="/destination/[guid]/edit"
                    as={`/destination/${destination.guid}/edit`}
                  >
                    <a>{destination.name}</a>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/app/[guid]/edit"
                    as={`/app/${destination.app.guid}/edit`}
                  >
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

Page.getInitialProps = async (ctx) => {
  const { guid, limit, offset } = ctx.query;
  const { execApi } = useApi(ctx);
  const { group } = await execApi("get", `/group/${guid}`);
  const { destinations, total } = await execApi(
    "get",
    `/group/${group.guid}/destinations`,
    {
      limit,
      offset,
    }
  );
  return { group, destinations, total };
};
