import { NextPageContext } from "next";
import Head from "next/head";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import LogsList from "@grouparoo/ui-components/components/log/List";
import GroupTabs from "@grouparoo/ui-components/components/tabs/Group";
import PageHeader from "@grouparoo/ui-components/components/PageHeader";
import LockedBadge from "@grouparoo/ui-components/components/badges/LockedBadge";
import StateBadge from "@grouparoo/ui-components/components/badges/StateBadge";
import ModelBadge from "@grouparoo/ui-components/components/badges/ModelBadge";
import { Actions } from "@grouparoo/ui-components/utils/apiData";

export default function Page(props) {
  const { group, model } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: Logs</title>
      </Head>

      <GroupTabs group={group} model={model} />

      <LogsList
        header={
          <PageHeader
            title={`${group.name} - Logs`}
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
  const { groupId, modelId } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { group } = await execApi("get", `/group/${groupId}`);
  const { model } = await execApi<Actions.ModelView>(
    "get",
    `/model/${modelId}`
  );
  const logListInitialProps = await LogsList.hydrate(ctx);
  return { group, model, ...logListInitialProps };
};
