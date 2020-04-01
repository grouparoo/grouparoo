import TabbedContainer from "../../../components/layouts/tabbedContainer";
import { Fragment } from "react";
import { Card } from "react-bootstrap";
import TeamEditForm from "../../../components/forms/team/edit";
import TeamMembersList from "../../../components/lists/teamMembers";
import { Button } from "react-bootstrap";
import Router from "next/router";

export default function (props) {
  return (
    <TabbedContainer
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
            Router.push(`/team/${props.query.guid}/teamMember/new`);
          }}
        >
          Add Team Member
        </Button>
      </Fragment>
    </TabbedContainer>
  );
}
