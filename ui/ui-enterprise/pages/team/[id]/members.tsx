import { useState } from "react";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import LoadingButton from "@grouparoo/ui-components/components/loadingButton";
import Link from "next/link";
import { useRouter } from "next/router";
import Moment from "react-moment";
import LoadingTable from "@grouparoo/ui-components/components/loadingTable";
import ProfileImageFromEmail from "@grouparoo/ui-components/components/visualizations/profileImageFromEmail";
import { Models, Actions } from "@grouparoo/ui-components/utils/apiData";
import TeamTabs from "@grouparoo/ui-components/components/tabs/team";
import { ErrorHandler } from "@grouparoo/ui-components/utils/errorHandler";
import { SuccessHandler } from "@grouparoo/ui-components/utils/successHandler";

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
  const { execApi } = useApi(props, errorHandler);
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
                  <ProfileImageFromEmail
                    loading={loading}
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
                  {teamMember.lastLoginAt ? (
                    <Moment fromNow>{teamMember.lastLoginAt}</Moment>
                  ) : (
                    "Never"
                  )}
                </td>
                <td>
                  <Moment fromNow>{teamMember.createdAt}</Moment>
                </td>
                <td>
                  <LoadingButton
                    size="sm"
                    disabled={loading}
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
        disabled={loading}
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
  const { execApi } = useApi(ctx);
  const { id } = ctx.query;
  const { team } = await execApi("get", `/team/${id}`);
  const { teamMembers } = await execApi("get", `/team/${id}/members`);
  return { team, teamMembers };
};
