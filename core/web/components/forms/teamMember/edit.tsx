import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Form, Button } from "react-bootstrap";
import Router from "next/router";
import Moment from "react-moment";
import ProfileImageFromEmail from "../../visualizations/profileImageFromEmail";

import { TeamAPIData, TeamMemberAPIData } from "../../../utils/apiData";

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState<TeamAPIData[]>([]);
  const [teamMember, setTeamMember] = useState<TeamMemberAPIData>({
    email: "",
    firstName: "",
    lastName: "",
    teamGuid: "",
    //@ts-ignore
    password: "",
  });
  const { guid } = query;

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);

    const teamsResponse = await execApi("get", `/api/${apiVersion}/teams`);
    if (teamsResponse?.teams) {
      setTeams(teamsResponse.teams);
    }

    const teamMemberResponse = await execApi(
      "get",
      `/api/${apiVersion}/team/member/${guid}`
    );
    if (teamMemberResponse?.teamMember) {
      setTeamMember(teamMemberResponse.teamMember);
    }

    setLoading(false);
  }

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    const response = await execApi(
      "put",
      `/api/${apiVersion}/team/member/${guid}`,
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
      const response = await execApi(
        "delete",
        `/api/${apiVersion}/team/member/${guid}`
      );
      if (response) {
        Router.push("/teams");
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

            <Button variant="primary" type="submit">
              Update
            </Button>
            <hr />
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                handleDelete();
              }}
            >
              Delete
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
