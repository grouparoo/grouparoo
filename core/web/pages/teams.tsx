import Head from "next/head";
import TeamsList from "../components/lists/teams";
import TeamMembersList from "../components/lists/teamMembers";
import TeamAddModal from "../components/modals/teamAdd";
import TeamMemberAddModal from "../components/modals/teamMemberAdd";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Teams</title>
      </Head>

      <h1>Teams</h1>
      <TeamsList {...props} />
      <TeamAddModal {...props} />
      <br />
      <br />
      <br />
      <h2>Team Members</h2>
      <TeamMembersList {...props} />
      <TeamMemberAddModal {...props} />
    </>
  );
}
