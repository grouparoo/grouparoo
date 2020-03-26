import Head from "next/head";
import SourceAdd from "../../components/forms/source/add";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: New Source</title>
      </Head>

      <SourceAdd {...props} />
    </>
  );
}
