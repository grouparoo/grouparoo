import Head from "next/head";
import AddFile from "../../components/forms/file/add";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: New File</title>
      </Head>

      <h1>Add File</h1>
      <AddFile {...props} />
    </>
  );
}
