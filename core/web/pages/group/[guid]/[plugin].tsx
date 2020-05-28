import Head from "next/head";
import GroupTabs from "../../../components/tabs/group";
import { usePlugins } from "../../../hooks/usePlugins";
import { useApi } from "../../../hooks/useApi";

export default function PluginPage(props) {
  const { group, query } = props;
  const [Plugin] = usePlugins("group/tabs", query.plugin);

  return (
    <>
      <Head>
        <title>Grouparoo: {group.key}</title>
      </Head>

      <GroupTabs group={group} />

      <Plugin {...props} useApi={useApi} />
    </>
  );
}

PluginPage.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(null, ctx);
  const { group } = await execApi("get", `/group/${guid}`);
  return { group };
};
