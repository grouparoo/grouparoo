import Head from "next/head";
import { Button, Alert } from "react-bootstrap";
import { useRouter } from "next/router";
import { useApi } from "../hooks/useApi";
import Link from "next/link";
import EnterpriseLink from "../components/enterpriseLink";
import { Form } from "react-bootstrap";
import LoadingTable from "../components/loadingTable";
import RecordImageFromEmail from "../components/visualizations/recordImageFromEmail";
import { Models } from "../utils/apiData";
import { formatTimestamp } from "../utils/formatTimestamp";

export default function Page({
  teams,
  teamMembers,
}: {
  teams: Models.TeamType[];
  teamMembers: Models.TeamMemberType[];
}) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Grouparoo: Teams</title>
      </Head>

      <h1>Teams</h1>

      <LoadingTable loading={false}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Members</th>
            <th>Locked</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => {
            return (
              <tr key={`team-${team.id}`}>
                <td>
                  <EnterpriseLink
                    href="/team/[id]/edit"
                    as={`/team/${team.id}/edit`}
                  >
                    <a>
                      <strong>{team.name}</strong>
                      {/* <br /><span className='text-muted'>{team.id}</span> */}
                    </a>
                  </EnterpriseLink>
                </td>
                <td>{team.membersCount}</td>
                <td>
                  <Form.Check
                    type="checkbox"
                    disabled
                    checked={team.locked !== null}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </LoadingTable>

      {process.env.GROUPAROO_UI_EDITION === "enterprise" ? (
        <Button
          variant="primary"
          onClick={() => {
            router.push("/team/new");
          }}
        >
          Add Team
        </Button>
      ) : (
        <Alert variant="primary" style={{ textAlign: "center" }}>
          Does your organization need additional Teams with finer-grained
          permissions?{" "}
          <a target="_blank" href="https://www.grouparoo.com/meet">
            Contact us
          </a>
          .
        </Alert>
      )}

      <br />
      <br />
      <br />
      <h2>Team Members</h2>

      <LoadingTable loading={false}>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Team</th>
            <th>Last Login At</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((teamMember) => {
            return (
              <tr key={`teamMember-${teamMember.id}`}>
                <td style={{ maxWidth: 36 }}>
                  <RecordImageFromEmail
                    loading={false}
                    email={teamMember.email}
                  />
                </td>
                <td>
                  <Link
                    href="/teamMember/[id]/edit"
                    as={`/teamMember/${teamMember.id}/edit`}
                  >
                    <a>{teamMember.email}</a>
                  </Link>
                </td>
                <td>{teamMember.firstName}</td>
                <td>{teamMember.lastName}</td>
                <td>
                  {teams.filter((t) => t.id === teamMember.teamId)[0].name}
                </td>
                <td>
                  {teamMember.lastLoginAt
                    ? formatTimestamp(teamMember.lastLoginAt)
                    : "Never"}
                </td>
                <td>{formatTimestamp(teamMember.createdAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </LoadingTable>

      <Button
        variant="primary"
        onClick={() => {
          router.push("/teamMember/new");
        }}
      >
        Add Team Member
      </Button>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { teams } = await execApi("get", `/teams`);
  const { teamMembers } = await execApi("get", `/teamMembers`);
  return { teams, teamMembers };
};
