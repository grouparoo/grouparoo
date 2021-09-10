import Head from "next/head";
import GroupTabs from "@grouparoo/ui-components/components/tabs/group";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";

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

PluginPage.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { group } = await execApi("get", `/group/${id}`);
  return { group };
};
