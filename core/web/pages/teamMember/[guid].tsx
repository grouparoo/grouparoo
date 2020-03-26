import Head from "next/head";
import { Card, Breadcrumb } from "react-bootstrap";
import TeamMemberEditForm from "../../components/forms/teamMember/edit";

export default function (props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Edit Team Member</title>
      </Head>

      <Breadcrumb>
        <Breadcrumb.Item href="/teams">Teams</Breadcrumb.Item>
        <Breadcrumb.Item>Edit Team Member</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Edit Team Member</h1>
      <Card border="success">
        <Card.Body>
          <TeamMemberEditForm {...props} />
        </Card.Body>
      </Card>
    </>
  );
}
