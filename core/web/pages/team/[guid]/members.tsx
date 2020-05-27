import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Button } from "react-bootstrap";
import Link from "next/link";
import Router from "next/router";
import Moment from "react-moment";
import LoadingTable from "../../../components/loadingTable";
import ProfileImageFromEmail from "../../../components/visualizations/profileImageFromEmail";
import { TeamMemberAPIData } from "../../../utils/apiData";
import TeamTabs from "../../../components/tabs/team";

export default function Page(props) {
  const { errorHandler, successHandler, team, teams } = props;
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [teamMembers, setTeamMembers] = useState<TeamMemberAPIData[]>(
    props.teamMembers
  );

  async function handleDelete(teamMember) {
    if (window.confirm("are you sure?")) {
      const response = await execApi(
        "delete",
        `/team/member/${teamMember.guid}`
      );
      if (response) {
        successHandler.set({ message: "Team Member Deleted" });
        const { teamMembers: _teamMembers } = await execApi(
          "get",
          `/team/${team.guid}/members`
        );
        setTeamMembers(_teamMembers);
      }
    }
  }

  return (
    <>
      <TeamTabs team={team} />

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
              <tr key={`teamMember-${teamMember.guid}`}>
                <td style={{ maxWidth: 36 }}>
                  <ProfileImageFromEmail
                    loading={loading}
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
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => {
                      handleDelete(teamMember);
                    }}
                  >
                    X
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </LoadingTable>

      <Button
        size="sm"
        variant="warning"
        onClick={() => {
          Router.push(`/team/${team.guid}/teamMember/new`);
        }}
      >
        Add Team Member
      </Button>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(null, ctx);
  const { guid } = ctx.query;
  const { team } = await execApi("get", `/team/${guid}`);
  const { teamMembers } = await execApi("get", `/team/${guid}/members`);
  return { team, teamMembers };
};
