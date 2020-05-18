import TabbedContainer from "../../../components/layouts/tabbedContainer";
import { Fragment, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import TeamEditForm from "../../../components/forms/team/edit";
import TeamMembersList from "../../../components/lists/teamMembers";
import { Button } from "react-bootstrap";
import Router from "next/router";
import { useApi } from "./../../../hooks/useApi";

import { TeamAPIData } from "../../../utils/apiData";

export default function (props) {
  const [team, setTeam] = useState<TeamAPIData>({});
  const { execApi } = useApi(props.errorHandler);

  useEffect(() => {
    load();

    props.teamHandler.subscribe("tabs", () => {
      load();
    });

    return () => {
      props.teamHandler.unsubscribe("tabs");
    };
  }, []);

  async function load() {
    const response = await execApi(
      "get",
      `/api/${props.apiVersion}/team/${props.query.guid}`
    );
    if (response?.team) {
      setTeam(response.team);
    }
  }
  return (
    <TabbedContainer
      name={team.name}
      errorHandler={props.errorHandler}
      apiVersion={props.apiVersion}
      type="team"
      defaultTab="edit"
      query={props.query}
    >
      <Fragment key="edit">
        <Card border="success">
          <Card.Body>
            <h1>Team </h1>
            <TeamEditForm {...props} />
          </Card.Body>
        </Card>
      </Fragment>

      <Fragment key="members">
        <h1>Team Members</h1>
        <TeamMembersList {...props} />
        <Button
          size="sm"
          variant="warning"
          onClick={() => {
            Router.push(
              "/team/[guid]/teamMember/new",
              `/team/${props.query.guid}/teamMember/new`
            );
          }}
        >
          Add Team Member
        </Button>
      </Fragment>
    </TabbedContainer>
  );
}
