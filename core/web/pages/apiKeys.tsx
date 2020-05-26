import Head from "next/head";
import ApiKeysList from "../components/lists/apiKeys";
import { Button } from "react-bootstrap";
import Router from "next/router";
import { useApi } from "../hooks/useApi";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: API Keys</title>
      </Head>

      <h1>API Keys</h1>
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

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(null, ctx?.req?.headers?.cookie);
  const { apiKeys, total } = await execApi("get", `/apiKeys`);
  return { apiKeys, total };
};
