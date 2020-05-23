import Head from "next/head";
import { useApi } from "../hooks/useApi";
// import AppsList from "../components/lists/apps";
import { Button } from "react-bootstrap";
import Router from "next/router";

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Apps</title>
      </Head>

      <h1>Apps</h1>
      {/* <AppsList {...props} /> */}
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

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi();
  const response = await execApi("get", `/apps`, {});

  // console.log(ctx);
  // const res = await fetch("https://api.github.com/repos/zeit/next.js");
  // const json = await res.json();
  // return { stars: json.stargazers_count };
};
