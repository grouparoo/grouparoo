import Head from "next/head";
import GroupsList from "../components/lists/groups";
import { Button } from "react-bootstrap";
import Router from "next/router";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Groups</title>
      </Head>

      <h1>Groups</h1>
      <GroupsList {...props} />
      <Button
        size="sm"
        variant="warning"
        onClick={() => {
          Router.push("/group/new");
        }}
      >
        Add Group
      </Button>
    </>
  );
}
