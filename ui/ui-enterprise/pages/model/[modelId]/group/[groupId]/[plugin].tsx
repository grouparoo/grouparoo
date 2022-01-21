import { useApi } from "../../../../../../ui-components/contexts/api";
import { NextPageContext } from "next";
import Head from "next/head";
import GroupTabs from "@grouparoo/ui-components/components/tabs/Group";
import { Actions } from "@grouparoo/ui-components/utils/apiData";
import { generateClient } from "@grouparoo/ui-components/client/client";

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
  const client = generateClient(ctx);
  const { group } = await client.request("get", `/group/${groupId}`);
  const { model } = await client.request<Actions.ModelView>(
    "get",
    `/model/${modelId}`
  );
  return { group, model };
};
