import Head from "next/head";
import TeamsList from "../components/lists/teams";
import TeamMembersList from "../components/lists/teamMembers";
import { Button } from "react-bootstrap";
import Router from "next/router";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Teams</title>
      </Head>

      <h1>Teams</h1>
      <TeamsList {...props} />
      <Button
        size="sm"
        variant="warning"
        onClick={() => {
          Router.push("/team/new");
        }}
      >
        Add Team
      </Button>
      <br />
      <br />
      <br />
      <h2>Team Members</h2>
      <TeamMembersList {...props} />
      <Button
        size="sm"
        variant="warning"
        onClick={() => {
          Router.push("/teamMember/new");
        }}
      >
        Add Team Member
      </Button>
    </>
  );
}
