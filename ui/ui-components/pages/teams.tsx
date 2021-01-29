import Head from "next/head";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { useApi } from "../hooks/useApi";
import Link from "../components/enterpriseLink";
import { Form } from "react-bootstrap";
import LoadingTable from "../components/loadingTable";
import Moment from "react-moment";
import ProfileImageFromEmail from "../components/visualizations/profileImageFromEmail";
import { Models } from "../utils/apiData";

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
              <tr key={`team-${team.guid}`}>
                <td>
                  <Link href="/team/[guid]/edit" as={`/team/${team.guid}/edit`}>
                    <a>
                      <strong>{team.name}</strong>
                      {/* <br /><span className='text-muted'>{team.guid}</span> */}
                    </a>
                  </Link>
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
      ) : null}

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
              <tr key={`teamMember-${teamMember.guid}`}>
                <td style={{ maxWidth: 36 }}>
                  <ProfileImageFromEmail
                    loading={false}
                    email={teamMember.email}
                  />
                </td>
                <td>
                  <Link
                    href="/teamMember/[guid]/edit"
                    as={`/teamMember/${teamMember.guid}/edit`}
                  >
                    <a>{teamMember.email}</a>
                  </Link>
                </td>
                <td>{teamMember.firstName}</td>
                <td>{teamMember.lastName}</td>
                <td>
                  {teams.filter((t) => t.guid === teamMember.teamGuid)[0].name}
                </td>
                <td>
                  {teamMember.lastLoginAt ? (
                    <Moment fromNow>{teamMember.lastLoginAt}</Moment>
                  ) : (
                    "Never"
                  )}
                </td>
                <td>
                  <Moment fromNow>{teamMember.createdAt}</Moment>
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
            router.push("/teamMember/new");
          }}
        >
          Add Team Member
        </Button>
      ) : null}
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { teams } = await execApi("get", `/teams`);
  const { teamMembers } = await execApi("get", `/teamMembers`);
  return { teams, teamMembers };
};
