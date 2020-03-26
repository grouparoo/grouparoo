import Head from "next/head";
import SourcesList from "../components/lists/sources";
import { Button } from "react-bootstrap";
import Router from "next/router";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Sources</title>
      </Head>

      <h1>Sources</h1>
      <SourcesList {...props} />
      <br />
      <Button
        variant="warning"
        onClick={() => {
          Router.push("/source/new");
        }}
      >
        Add new Source
      </Button>
    </>
  );
}
