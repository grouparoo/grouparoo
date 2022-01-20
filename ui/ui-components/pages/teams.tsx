import Head from "next/head";
import { Alert } from "react-bootstrap";
import { useRouter } from "next/router";
import { UseApi } from "../hooks/useApi";
import Link from "next/link";
import EnterpriseLink from "../components/GrouparooLink";
import { Form } from "react-bootstrap";
import LoadingTable from "../components/LoadingTable";
import RecordImageFromEmail from "../components/visualizations/RecordImageFromEmail";
import { Models } from "../utils/apiData";
import { formatTimestamp } from "../utils/formatTimestamp";
import LinkButton from "../components/LinkButton";
import { grouparooUiEdition } from "../utils/uiEdition";

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
                  <EnterpriseLink href={`/team/${team.id}/edit`}>
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
                    checked={Boolean(team.locked)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </LoadingTable>

      <LinkButton variant="primary" href="/team/new" displayOn={["enterprise"]}>
        Add Team
      </LinkButton>

      {grouparooUiEdition() !== "enterprise" && (
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
                  <Link href={`/teamMember/${teamMember.id}/edit`}>
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

      <LinkButton variant="primary" href="/teamMember/new">
        Add Team Member
      </LinkButton>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { client } = useApi();
  const { teams } = await client.request("get", `/teams`);
  const { teamMembers } = await client.request("get", `/teamMembers`);
  return { teams, teamMembers };
};
