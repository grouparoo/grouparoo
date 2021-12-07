import { useState } from "react";
import { UseApi } from "../../../hooks/useApi";
import LoadingButton from "../../../components/LoadingButton";
import Link from "next/link";
import { useRouter } from "next/router";
import LoadingTable from "../../../components/LoadingTable";
import RecordImageFromEmail from "../../../components/visualizations/RecordImageFromEmail";
import { Models, Actions } from "../../../utils/apiData";
import TeamTabs from "../../../components/tabs/Team";
import { ErrorHandler } from "../../../utils/errorHandler";
import { SuccessHandler } from "../../../utils/successHandler";
import { formatTimestamp } from "../../../utils/formatTimestamp";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    team,
  }: {
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
    team: Models.TeamType;
  } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [teamMembers, setTeamMembers] = useState<Models.TeamMemberType[]>(
    props.teamMembers
  );

  async function handleDelete(teamMember) {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const { success }: Actions.TeamMemberDestroy = await execApi(
        "delete",
        `/team/member/${teamMember.id}`
      );
      if (success) {
        successHandler.set({ message: "Team Member Deleted" });
        const { teamMembers: _teamMembers } = await execApi(
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

Page.getInitialProps = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { id } = ctx.query;
  const { team } = await execApi("get", `/team/${id}`);
  const { teamMembers } = await execApi("get", `/team/${id}/members`);
  return { team, teamMembers };
};
