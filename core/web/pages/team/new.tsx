import Head from "next/head";
import TeamAdd from "../../components/forms/team/add";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: New Team</title>
      </Head>

      <h1>Add Team</h1>
      <TeamAdd {...props} />
    </>
  );
}
