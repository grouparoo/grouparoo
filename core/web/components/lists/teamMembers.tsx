import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { Button } from "react-bootstrap";
import Link from "next/link";
import Moment from "react-moment";
import LoadingTable from "../loadingTable";
import ProfileImageFromEmail from "../visualizations/profileImageFromEmail";

export default function ({
  apiVersion,
  errorHandler,
  successHandler,
  teamMemberHandler,
  query,
}) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState({});
  const [teamMembers, setTeamMembers] = useState([]);
  const { guid } = query;

  useEffect(() => {
    load();

    teamMemberHandler.subscribe("team-members-list", load);

    return () => {
      teamMemberHandler.unsubscribe("team-members-list", load);
    };
  }, []);

  async function load() {
    setLoading(true);

    const teamsResponse = await execApi("get", `/api/${apiVersion}/teams`);
    if (teamsResponse?.teams) {
      const teamsByHash = {};
      teamsResponse.teams.forEach((t) => {
        teamsByHash[t.guid] = t;
      });
      setTeams(teamsByHash);
    }

    const teamMembersResponse = await execApi(
      "get",
      guid
        ? `/api/${apiVersion}/team/${guid}/members`
        : `/api/${apiVersion}/teamMembers`
    );
    if (teamMembersResponse?.teamMembers) {
      setTeamMembers(teamMembersResponse.teamMembers);
    }

    setLoading(false);
  }

  async function handleDelete(teamMember) {
    if (window.confirm("are you sure?")) {
      const response = await execApi(
        "delete",
        `/api/${apiVersion}/team/member/${teamMember.guid}`
      );
      if (response) {
        successHandler.set({ message: "Team Member Deleted" });
        load();
      }
    }
  }

  return (
    <>
      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            {guid ? null : <th>Team</th>}
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
                  <ProfileImageFromEmail email={teamMember.email} />
                </td>
                <td>
                  <Link
                    href="/teamMember/[guid]"
                    as={`/teamMember/${teamMember.guid}`}
                  >
                    <a>{teamMember.email}</a>
                  </Link>
                </td>
                <td>{teamMember.firstName}</td>
                <td>{teamMember.lastName}</td>
                {guid ? null : <td>{teams[teamMember.teamGuid].name}</td>}
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
    </>
  );
}
