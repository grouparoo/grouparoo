import Head from "next/head";
import ProfilesList from "@grouparoo/ui-components/components/profile/list";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Profiles</title>
      </Head>

      <ProfilesList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return ProfilesList.hydrate(ctx);
};
