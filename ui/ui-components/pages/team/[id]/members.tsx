import { useApi } from "../../../contexts/api";
import { useState } from "react";
import LoadingButton from "../../../components/LoadingButton";
import Link from "next/link";
import { useRouter } from "next/router";
import LoadingTable from "../../../components/LoadingTable";
import RecordImageFromEmail from "../../../components/visualizations/RecordImageFromEmail";
import { Models, Actions } from "../../../utils/apiData";
import TeamTabs from "../../../components/tabs/Team";
import { successHandler } from "../../../eventHandlers";
import { formatTimestamp } from "../../../utils/formatTimestamp";
import { generateClient } from "../../../client/client";
import { NextPageContext } from "next";

export default function Page(props) {
  const {
    team,
  }: {
    team: Models.TeamType;
  } = props;
  const router = useRouter();
  const { client } = useApi();
  const [loading, setLoading] = useState(false);
  const [teamMembers, setTeamMembers] = useState<Models.TeamMemberType[]>(
    props.teamMembers
  );

  async function handleDelete(teamMember) {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const { success }: Actions.TeamMemberDestroy = await client.request(
        "delete",
        `/team/member/${teamMember.id}`
      );
      if (success) {
        successHandler.set({ message: "Team Member Deleted" });
        const { teamMembers: _teamMembers } = await client.request(
          "get",
          `/team/${team.id}/members`
        );
        setTeamMembers(_teamMembers);
      }
      setLoading(false);
    }
  }

  return (
    <>
      <TeamTabs team={team} />

      <h1>{team.name} - Members</h1>

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Last Login At</th>
            <th>Created At</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((teamMember) => {
            return (
              <tr key={`teamMember-${teamMember.id}`}>
                <td style={{ maxWidth: 50 }}>
                  <RecordImageFromEmail
                    loading={loading}
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
                  {teamMember.lastLoginAt
                    ? formatTimestamp(teamMember.lastLoginAt)
                    : "Never"}
                </td>
                <td>{formatTimestamp(teamMember.createdAt)}</td>
                <td>
                  <LoadingButton
                    size="sm"
                    loading={loading}
                    variant="danger"
                    onClick={() => {
                      handleDelete(teamMember);
                    }}
                  >
                    X
                  </LoadingButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </LoadingTable>

      <LoadingButton
        variant="primary"
        loading={loading}
        onClick={() => {
          router.push(`/team/${team.id}/teamMember/new`);
        }}
      >
        Add Team Member
      </LoadingButton>
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const client = generateClient(ctx);
  const { id } = ctx.query;
  const { team } = await client.request("get", `/team/${id}`);
  const { teamMembers } = await client.request("get", `/team/${id}/members`);
  return { team, teamMembers };
};
