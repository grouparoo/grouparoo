import Head from "next/head";
import { useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form } from "react-bootstrap";
import LoadingButton from "../../../components/loadingButton";
import Router from "next/router";
import Moment from "react-moment";
import ProfileImageFromEmail from "../../../components/visualizations/profileImageFromEmail";
import { TeamMemberAPIData } from "../../../utils/apiData";
import TeamMemberTabs from "../../../components/tabs/teamMember";

export default function Page(props) {
  const { errorHandler, successHandler, teams } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [teamMember, setTeamMember] = useState<TeamMemberAPIData>(
    props.teamMember
  );

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    const response = await execApi(
      "put",
      `/team/member/${teamMember.guid}`,
      teamMember
    );
    if (response?.teamMember) {
      successHandler.set({ message: "Team Member updated" });
      setTeamMember(response.teamMember);
    }
    setLoading(false);
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const response = await execApi(
        "delete",
        `/team/member/${teamMember.guid}`
      );
      if (response) {
        successHandler.set({ message: "team member deleted" });
        Router.push("/teams");
      } else {
        setLoading(false);
      }
    }
  }

  function update(event) {
    const _teamMember = Object.assign({}, teamMember);
    _teamMember[event.target.id] = event.target.value;
    setTeamMember(_teamMember);
  }
  return (
    <>
      <Head>
        <title>Grouparoo: Edit Team Member</title>
      </Head>

      <TeamMemberTabs teamMember={teamMember} />

      <Row>
        <Col md={2}>
          <p>
            <small>
              Last Login: <Moment fromNow>{teamMember.lastLoginAt}</Moment>{" "}
            </small>
          </p>

          <ProfileImageFromEmail loading={loading} email={teamMember.email} />
          <small>
            Image from{" "}
            <a href="https://gravatar.com" target="_blank">
              gravatar.com
            </a>
          </small>
        </Col>
        <Col md={10}>
          <Form id="form" onSubmit={submit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Email"
                value={teamMember.email}
                onChange={update}
              />
              <Form.Control.Feedback type="invalid">
                Email is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First Name"
                value={teamMember.firstName}
                onChange={update}
              />
              <Form.Control.Feedback type="invalid">
                First Name is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last Name"
                value={teamMember.lastName}
                onChange={update}
              />
              <Form.Control.Feedback type="invalid">
                Last Name is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="teamGuid">
              <Form.Label>Team</Form.Label>
              <Form.Control
                as="select"
                value={teamMember.teamGuid}
                onChange={update}
              >
                {teams.map((team) => (
                  <option key={`team-${team.guid}`} value={team.guid}>
                    {team.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="*" onChange={update} />
            </Form.Group>

            <LoadingButton variant="primary" disabled={loading} type="submit">
              Update
            </LoadingButton>
            <br />
            <br />
            <LoadingButton
              disabled={loading}
              variant="danger"
              size="sm"
              onClick={() => {
                handleDelete();
              }}
            >
              Delete
            </LoadingButton>
          </Form>
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { guid } = ctx.query;
  const { teams } = await execApi("get", `/teams`);
  const { teamMember } = await execApi("get", `/team/member/${guid}`);
  return { teams, teamMember };
};
