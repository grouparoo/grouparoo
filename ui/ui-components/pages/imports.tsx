import Head from "next/head";
import ImportList from "../components/import/List";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Imports</title>
      </Head>

      <ImportList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return ImportList.hydrate(ctx);
};
