import { useApi } from "../../../hooks/useApi";
import Head from "next/head";
import ProfilePropertyRuleTabs from "../../../components/tabs/profilePropertyRule";
import ProfilesList from "../../../components/profile/list";

export default function Page(props) {
  const { profilePropertyRule } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {profilePropertyRule.key}</title>
      </Head>

      <ProfilePropertyRuleTabs profilePropertyRule={profilePropertyRule} />

      <ProfilesList
        {...props}
        searchKey={profilePropertyRule.key}
        searchValue="%"
      />
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
  const profileListInitialProps = await ProfilesList.hydrate(
    ctx,
    profilePropertyRule.key,
    "%"
  );

  return { profilePropertyRule, ...profileListInitialProps };
};
