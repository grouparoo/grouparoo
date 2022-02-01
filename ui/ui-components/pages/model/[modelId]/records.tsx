import { NextPageContext } from "next";
import Head from "next/head";
import RecordsList from "../../../components/record/List";

export default function Page(
  props: Awaited<ReturnType<typeof RecordsList.hydrate>>
) {
  return (
    <>
      <Head>
        <title>Grouparoo: Records</title>
      </Head>

      <RecordsList {...props} />
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  return await RecordsList.hydrate(ctx);
};
