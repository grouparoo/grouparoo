import Head from "next/head";
import ApiKeysList from "../components/lists/apiKeys";
import { Button } from "react-bootstrap";
import Router from "next/router";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: API Keys</title>
      </Head>

      <h1>AP Keys</h1>
      <ApiKeysList {...props} />
      <Button
        size="sm"
        variant="warning"
        onClick={() => {
          Router.push("/apiKey/new");
        }}
      >
        Add API Key
      </Button>
    </>
  );
}
