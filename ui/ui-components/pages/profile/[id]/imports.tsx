import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import {
  getProfileDisplayName,
  getProfilePageTitle,
} from "../../../components/profile/getProfileDisplayName";
import ProfileTabs from "../../../components/tabs/profile";
import ImportList from "../../../components/import/list";

export default function Page(props) {
  const { profile } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {getProfilePageTitle(profile)}</title>
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
  const { id } = ctx.query;
  const { profile } = await execApi("get", `/profile/${id}`);
  const importListInitialProps = await ImportList.hydrate(ctx);
  return { profile, ...importListInitialProps };
};
