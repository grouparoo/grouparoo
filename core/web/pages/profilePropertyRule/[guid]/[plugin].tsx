import Head from "next/head";
import ProfilePropertyRuleTabs from "../../../components/tabs/profilePropertyRule";
import { usePlugins } from "../../../hooks/usePlugins";
import { useApi } from "../../../hooks/useApi";

export default function PluginPage(props) {
  const { profilePropertyRule, query, source } = props;
  const [Plugin] = usePlugins("profilePropertyRules/tabs", query.plugin);

  if (!Plugin) {
    return <p>plugin `{query.plugin}` not found</p>;
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {profilePropertyRule.key}</title>
      </Head>

      <ProfilePropertyRuleTabs
        profilePropertyRule={profilePropertyRule}
        source={source}
      />

      <Plugin {...props} useApi={useApi} />
    </>
  );
}

PluginPage.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { profilePropertyRule } = await execApi(
    "get",
    `/profilePropertyRule/${guid}`
  );
  const { source } = await execApi(
    "get",
    `/source/${profilePropertyRule.sourceGuid}`
  );

  return {
    profilePropertyRule,
    source,
  };
};
