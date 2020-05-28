import Head from "next/head";
import RunsList from "../../../components/runs/list";
import { useApi } from "../../../hooks/useApi";
import ProfilePropertyRuleTabs from "../../../components/tabs/profilePropertyRule";

export default function Page(props) {
  const { profilePropertyRule } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {profilePropertyRule.name}</title>
      </Head>

      <ProfilePropertyRuleTabs profilePropertyRule={profilePropertyRule} />

      <RunsList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { profilePropertyRule } = await execApi(
    "get",
    `/profilePropertyRule/${guid}`
  );
  const runsListInitialProps = await RunsList.hydrate(ctx);
  return { profilePropertyRule, ...runsListInitialProps };
};
