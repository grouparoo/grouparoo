import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import Link from "next/link";
import { Form } from "react-bootstrap";
import LoadingTable from "../loadingTable";

import { TeamAPIData } from "../../utils/apiData";

export default function ({ apiVersion, errorHandler, teamHandler }) {
  const { execApi } = useApi(errorHandler);
  const [teams, setTeams] = useState<TeamAPIData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    load();

    teamHandler.subscribe("team-list", load);

    return () => {
      teamHandler.unsubscribe("team-list", load);
    };
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/teams`);
    if (response?.teams) {
      setTeams(response.teams);
    }
    setLoading(false);
  }

  return (
    <>
      <LoadingTable loading={loading}>
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
                  <Link href="/team/[guid]" as={`/team/${team.guid}`}>
                    <a>
                      <strong>{team.name}</strong>
                      {/* <br /><span className='text-muted'>{team.guid}</span> */}
                    </a>
                  </Link>
                </td>
                <td>{team.membersCount}</td>
                <td>
                  <Form.Check type="checkbox" disabled checked={team.locked} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </LoadingTable>
    </>
  );
}
