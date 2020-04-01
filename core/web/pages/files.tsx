import Head from "next/head";
import FilesList from "../components/lists/files";
import { Button } from "react-bootstrap";
import Router from "next/router";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Files</title>
      </Head>

      <h1>Files</h1>
      <FilesList {...props} />
      <Button
        size="sm"
        variant="warning"
        onClick={() => {
          Router.push("/file/new");
        }}
      >
        Add File
      </Button>
    </>
  );
}
