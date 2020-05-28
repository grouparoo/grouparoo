import Head from "next/head";
import ImportList from "../../components/import/list";

export default function Page(props) {
  const { query } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: Imports for {query.creatorGuid}</title>
      </Head>

      <ImportList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return ImportList.hydrate(ctx);
};
