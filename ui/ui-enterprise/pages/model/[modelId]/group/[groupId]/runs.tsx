import Head from "next/head";
import RunsList from "@grouparoo/ui-components/components/runs/List";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import GroupTabs from "@grouparoo/ui-components/components/tabs/Group";
import PageHeader from "@grouparoo/ui-components/components/PageHeader";
import LockedBadge from "@grouparoo/ui-components/components/badges/LockedBadge";
import StateBadge from "@grouparoo/ui-components/components/badges/StateBadge";
import ModelBadge from "@grouparoo/ui-components/components/badges/ModelBadge";
import { NextPageContext } from "next";

export default function Page(props) {
  const { group } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {group.name}</title>
      </Head>

      <GroupTabs group={group} />

      <RunsList
        header={
          <PageHeader
            title={`${group.name} - Runs`}
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
        }
        {...props}
      />
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { groupId } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { group } = await execApi("get", `/group/${groupId}`);
  const runsListInitialProps = await RunsList.hydrate(ctx, { topic: "group" });
  return { group, ...runsListInitialProps };
};
