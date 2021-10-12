import Head from "next/head";
import GroupTabs from "@grouparoo/ui-components/components/tabs/group";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import { NextPageContext } from "next";

export default function PluginPage(props) {
  const { group, query } = props;

  if (!Plugin) {
    return <p>plugin `{query.plugin}` not found</p>;
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {group.key}</title>
      </Head>

      <GroupTabs group={group} />
    </>
  );
}

PluginPage.getInitialProps = async (ctx: NextPageContext) => {
  const { groupId } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { group } = await execApi("get", `/group/${groupId}`);
  return { group };
};
