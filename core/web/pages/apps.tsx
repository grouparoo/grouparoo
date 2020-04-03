import Head from "next/head";
import AppsList from "../components/lists/apps";
import { Button } from "react-bootstrap";
import Router from "next/router";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Apps</title>
      </Head>

      <h1>Apps</h1>
      <AppsList {...props} />
      <Button
        size="sm"
        variant="warning"
        onClick={() => {
          Router.push("/app/new");
        }}
      >
        Add App
      </Button>
    </>
  );
}
