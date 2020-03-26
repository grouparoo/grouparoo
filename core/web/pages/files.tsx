import Head from "next/head";
import FilesList from "../components/lists/files";
import FileAddModal from "../components/modals/fileAdd";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Files</title>
      </Head>

      <h1>Files</h1>
      <FilesList {...props} />
      <FileAddModal {...props} />
    </>
  );
}
