import Head from "next/head";
import ExportsList from "../components/export/List";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Destinations</title>
      </Head>

      <ExportsList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return ExportsList.hydrate(ctx);
};
