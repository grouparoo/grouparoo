import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Row,
  Col,
  CardGroup,
  Card,
  Table,
  Badge,
  ProgressBar,
} from "react-bootstrap";
import { useApi } from "../../hooks/useApi";
import { Models, Actions } from "../../utils/apiData";
import { useRealtimeModelStream } from "../../hooks/useRealtimeModelStream";
import Loader from "../loader";
import Moment from "react-moment";

const TIMEOUT = 15 * 1000;

export function BigNumber({ execApi, model, title, href = null }) {
  const [total, setTotal] = useState<number>(null);
  let timer;

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(timer);
    };
  }, []);

  function startTimer() {
    load();
    timer = setInterval(load, TIMEOUT);
  }

  async function load() {
    const response: Actions.TotalsAction = await execApi("get", `/totals`, {
      model,
    });

    if (response) setTotal(response?.total);
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {href ? (
            <Link href={href}>
              <a>{title}</a>
            </Link>
          ) : (
            title
          )}
        </Card.Title>
        <span style={{ fontSize: 25 }}>{total ? total : "..."}</span>
      </Card.Body>
    </Card>
  );
}

export function GroupsByNewestMember({ execApi }) {
  const [groups, setGroups] = useState<Models.GroupType[]>([]);
  const [newestMembersAdded, setNewestMembersAdded] = useState<{
    [guid: string]: number;
  }>({});

  let timer;

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(timer);
    };
  }, []);

  function startTimer() {
    load();
    timer = setInterval(load, TIMEOUT);
  }

  async function load() {
    const response: Actions.GroupsListByNewestMember = await execApi(
      "get",
      `/groups/byNewestMember`
    );

    if (response) setGroups(response?.groups);
    if (response) setNewestMembersAdded(response?.newestMembersAdded);
  }

  if (groups.length === 0) return null;

  return (
    <Card>
      <Card.Body>
        <Card.Title>Recently Updated Groups</Card.Title>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Profiles</th>
              <th>Newest Member Added</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => {
              return (
                <tr key={`group-${group.guid}`}>
                  <td>
                    {group.type === "calculated" ? (
                      <Link
                        href="/group/[guid]/rules"
                        as={`/group/${group.guid}/rules`}
                      >
                        <a>{group.name}</a>
                      </Link>
                    ) : (
                      <Link
                        href="/group/[guid]/edit"
                        as={`/group/${group.guid}/edit`}
                      >
                        <a>{group.name}</a>
                      </Link>
                    )}
                  </td>
                  <td>{group.profilesCount}</td>
                  <td>
                    <Moment fromNow>{newestMembersAdded[group.guid]}</Moment>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <br />
        <Link href="/groups">
          <a>See all Groups</a>
        </Link>
      </Card.Body>
    </Card>
  );
}
