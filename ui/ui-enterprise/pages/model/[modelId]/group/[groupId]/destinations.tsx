import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import { useOffset } from "@grouparoo/ui-components/hooks/URLParams";
import { useSecondaryEffect } from "@grouparoo/ui-components/hooks/useSecondaryEffect";
import Head from "next/head";
import GroupTabs from "@grouparoo/ui-components/components/tabs/Group";
import { useState } from "react";
import Link from "next/link";
import LoadingTable from "@grouparoo/ui-components/components/LoadingTable";
import AppIcon from "@grouparoo/ui-components/components/AppIcon";
import { Models, Actions } from "@grouparoo/ui-components/utils/apiData";
import { ErrorHandler } from "@grouparoo/ui-components/utils/errorHandler";
import { formatTimestamp } from "@grouparoo/ui-components/utils/formatTimestamp";
import PageHeader from "@grouparoo/ui-components/components/PageHeader";
import LockedBadge from "@grouparoo/ui-components/components/badges/LockedBadge";
import StateBadge from "@grouparoo/ui-components/components/badges/StateBadge";
import ModelBadge from "@grouparoo/ui-components/components/badges/ModelBadge";
import { NextPageContext } from "next";

export default function Page(props) {
  const {
    model,
    errorHandler,
    group,
  }: {
    model: Models.GrouparooModelType;
    errorHandler: ErrorHandler;
    group: Models.GroupType;
  } = props;
  const { execApi } = UseApi(props, errorHandler);
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

      <GroupTabs group={group} model={model} />

      <PageHeader
        title={`${group.name} - Destinations`}
        iconType="group"
        badges={[
          <LockedBadge key="header-badge-1" object={group} />,
          <StateBadge key="header-badge-2" state={group.state} />,
          <ModelBadge
            key="header-badge-3"
            modelName={group.modelName}
            modelId={group.modelId}
          />,
        ]}
      />

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
                    href="/model/[modelId]/destination/[id]/edit"
                    as={`/model/${destination.modelId}/destination/${destination.id}/edit`}
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

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { groupId, limit, offset, modelId } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { group } = await execApi("get", `/group/${groupId}`);
  const { model } = await execApi<Actions.ModelView>(
    "get",
    `/model/${modelId}`
  );
  const { destinations, total } = await execApi(
    "get",
    `/group/${group.id}/destinations`,
    {
      limit,
      offset,
    }
  );
  return { model, group, destinations, total };
};
