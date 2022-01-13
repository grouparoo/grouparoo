import { NextPageContext } from "next";
import Head from "next/head";
import GroupTabs from "@grouparoo/ui-components/components/tabs/Group";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import { Actions } from "@grouparoo/ui-components/utils/apiData";

export default function PluginPage(props) {
  const { group, query, model } = props;

  if (!Plugin) {
    return <p>plugin `{query.plugin}` not found</p>;
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {group.key}</title>
      </Head>

      <GroupTabs group={group} model={model} />
    </>
  );
}

PluginPage.getInitialProps = async (ctx: NextPageContext) => {
  const { groupId, modelId } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { group } = await execApi("get", `/group/${groupId}`);
  const { model } = await execApi<Actions.ModelView>(
    "get",
    `/model/${modelId}`
  );
  return { group, model };
};
