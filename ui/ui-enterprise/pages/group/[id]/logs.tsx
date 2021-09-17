import Head from "next/head";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import LogsList from "@grouparoo/ui-components/components/log/list";
import GroupTabs from "@grouparoo/ui-components/components/tabs/group";
import PageHeader from "@grouparoo/ui-components/components/pageHeader";
import LockedBadge from "@grouparoo/ui-components/components/badges/lockedBadge";
import StateBadge from "@grouparoo/ui-components/components/badges/stateBadge";
import ModelBadge from "@grouparoo/ui-components/components/badges/modelBadge";

export default function Page(props) {
  const { group } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: Logs</title>
      </Head>

      <GroupTabs group={group} />

      <LogsList
        header={
          <PageHeader
            title={`${group.name} - Logs`}
            iconType="group"
            badges={[
              <LockedBadge object={group} />,
              <StateBadge state={group.state} />,
              <ModelBadge
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

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { group } = await execApi("get", `/group/${id}`);
  const logListInitialProps = await LogsList.hydrate(ctx);
  return { group, ...logListInitialProps };
};
