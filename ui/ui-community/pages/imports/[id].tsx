import Head from "next/head";
import ImportList from "@grouparoo/ui-components/components/import/list";
import { useRouter } from "next/router";

export default function Page(props) {
  const router = useRouter();
  const { query } = router;

  return (
    <>
      <Head>
        <title>Grouparoo: Imports for {query.creatorId}</title>
      </Head>

      <ImportList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  return ImportList.hydrate(ctx);
};
