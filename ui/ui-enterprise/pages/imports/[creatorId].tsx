import Head from "next/head";
import ImportList from "@grouparoo/ui-components/components/import/List";
import { useRouter } from "next/router";
import { NextPageWithInferredProps } from "@grouparoo/ui-components/utils/pageHelper";
import { withServerErrorHandler } from "@grouparoo/ui-components/utils/withServerErrorHandler";

export const getServerSideProps = withServerErrorHandler(async (ctx) => ({
  props: await ImportList.hydrate(ctx),
}));

const Page: NextPageWithInferredProps<typeof getServerSideProps> = (props) => {
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
};

export default Page;
