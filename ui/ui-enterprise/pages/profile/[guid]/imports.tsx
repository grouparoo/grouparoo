import Head from "next/head";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import getProfileDisplayName from "@grouparoo/ui-components/components/profile/getProfileDisplayName";
import ProfileTabs from "@grouparoo/ui-components/components/tabs/profile";
import ImportList from "@grouparoo/ui-components/components/import/list";

export default function Page(props) {
  const { profile } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {getProfileDisplayName(profile)}</title>
      </Head>

      <ProfileTabs profile={profile} />

      <ImportList
        header={
          <>
            <h1>{getProfileDisplayName(profile)} - Imports</h1>
            <br />
          </>
        }
        {...props}
      />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { guid } = ctx.query;
  const { profile } = await execApi("get", `/profile/${guid}`);
  const importListInitialProps = await ImportList.hydrate(ctx);
  return { profile, ...importListInitialProps };
};
