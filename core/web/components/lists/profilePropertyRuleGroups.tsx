import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import Link from "next/link";
import LoadingTable from "../loadingTable";

import { GroupAPIData } from "../../utils/apiData";

export default function ({ apiVersion, errorHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState<GroupAPIData[]>([]);
  const { guid } = query;

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/profilePropertyRule/${guid}/groups`
    );
    setLoading(false);
    if (response?.groups) {
      setGroups(response.groups);
    }
  }

  return (
    <>
      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Profiles Count</th>
            <th>Rules</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => {
            return (
              <tr key={`group-${group.guid}`}>
                <td>
                  <Link href="/group/[guid]" as={`/group/${group.guid}`}>
                    <a>{group.name}</a>
                  </Link>
                  <br />
                  {group.guid}
                </td>
                <td>{group.profilesCount}</td>
                <td>
                  <ul>
                    {group.rules.map((rule, idx) => (
                      <li key={`rule-${idx}`}>
                        {rule.key}: {rule.op} {rule.match}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            );
          })}
        </tbody>
      </LoadingTable>
    </>
  );
}
