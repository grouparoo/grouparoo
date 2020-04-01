import Head from "next/head";
import ProfilePropertyRulesList from "../components/lists/profilePropertyRules";
import { Button } from "react-bootstrap";
import Router from "next/router";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Profile Property Rules</title>
      </Head>

      <h1>Profile Property Rules</h1>
      <ProfilePropertyRulesList {...props} />
      <Button
        size="sm"
        variant="warning"
        onClick={() => {
          Router.push("/profilePropertyRule/new");
        }}
      >
        Add Profile Property Rule
      </Button>
    </>
  );
}
