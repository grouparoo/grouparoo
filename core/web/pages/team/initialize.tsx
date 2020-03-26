import Head from "next/head";
import { Card } from "react-bootstrap";
import InitializeTeamForm from "../../components/forms/team/initialize";

export default function (props) {
  return (
    <>
      <Head>
        <title>Initialize Team</title>
      </Head>

      <h1>Initialize first Team</h1>
      <p>
        You are creating an account for yourself and the "Administrators" team.
      </p>
      <Card border="success">
        <Card.Body>
          <InitializeTeamForm {...props} />
        </Card.Body>
      </Card>
    </>
  );
}
