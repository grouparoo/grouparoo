import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import getProfileDisplayName from "../../../components/profile/getProfileDisplayName";
import ProfileTabs from "../../../components/tabs/profile";
import ImportList from "../../../components/imports/list";

export default function Page(props) {
  const { profile } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {getProfileDisplayName(profile)}</title>
      </Head>

      <ProfileTabs profile={profile} />

      <ImportList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(null, ctx);
  const { guid } = ctx.query;
  const { profile } = await execApi("get", `/profile/${guid}`);
  const importListInitialProps = await ImportList.hydrate(ctx);
  return { profile, ...importListInitialProps };
};
