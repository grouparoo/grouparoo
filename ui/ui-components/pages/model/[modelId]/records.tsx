import Head from "next/head";
import RecordsList from "../../../components/record/List";
import { NextPageWithInferredProps } from "../../../utils/pageHelper";
import { withServerErrorHandler } from "../../../utils/withServerErrorHandler";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  return { props: await RecordsList.hydrate(ctx) };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = (props) => {
  return (
    <>
      <Head>
        <title>Grouparoo: Records</title>
      </Head>

      <RecordsList {...props} />
    </>
  );
};

export default Page;
