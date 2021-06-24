import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import { useOffset } from "@grouparoo/ui-components/hooks/URLParams";
import { useSecondaryEffect } from "@grouparoo/ui-components/hooks/useSecondaryEffect";
import Head from "next/head";
import GroupTabs from "@grouparoo/ui-components/components/tabs/group";
import { useState } from "react";
import Link from "next/link";
import LoadingTable from "@grouparoo/ui-components/components/loadingTable";
import AppIcon from "@grouparoo/ui-components/components/appIcon";
import { Models, Actions } from "@grouparoo/ui-components/utils/apiData";
import { ErrorHandler } from "@grouparoo/ui-components/utils/errorHandler";
import { formatTimestamp } from "../../../../ui-components/utils/formatTimestamp";

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
    const response: Actions.GroupListDestinations = await execApi(
      "get",
      `/group/${group.id}/destinations`,
      {
        limit,
        offset,
      }
    );
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

      <h1>{group.name} - Destinations</h1>
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
              <tr key={`destination-${destination.id}`}>
                <td>
                  <AppIcon src={destination.app.icon} />
                </td>
                <td>
                  <Link
                    href="/destination/[id]/edit"
                    as={`/destination/${destination.id}/edit`}
                  >
                    <a>{destination.name}</a>
                  </Link>
                </td>
                <td>
                  <Link
                    href="/app/[id]/edit"
                    as={`/app/${destination.app.id}/edit`}
                  >
                    <a>{destination.app.name}</a>
                  </Link>
                </td>
                <td>{formatTimestamp(destination.createdAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </LoadingTable>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { id, limit, offset } = ctx.query;
  const { execApi } = useApi(ctx);
  const { group } = await execApi("get", `/group/${id}`);
  const { destinations, total } = await execApi(
    "get",
    `/group/${group.id}/destinations`,
    {
      limit,
      offset,
    }
  );
  return { group, destinations, total };
};
