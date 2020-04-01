import Head from "next/head";
import TeamMemberAdd from "../../../../components/forms/teamMember/add";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: New Team Member</title>
      </Head>

      <h1>Add Team Member</h1>
      <TeamMemberAdd {...props} />
    </>
  );
}
