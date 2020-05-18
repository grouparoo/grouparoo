import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { useForm } from "react-hook-form";
import { Row, Col, Form, Button } from "react-bootstrap";
import Loader from "../../loader";
import Router from "next/router";
import ProfileImageFromEmail from "../../visualizations/profileImageFromEmail";

import { TeamAPIData, TeamMemberAPIData } from "../../../utils/apiData";

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState<TeamAPIData[]>([]);
  const [teamMember, setTeamMember] = useState<TeamMemberAPIData>({});
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

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await execApi(
      "put",
      `/api/${apiVersion}/team/member/${guid}`,
      data
    );
    if (response?.teamMember) {
      successHandler.set({ message: "Team Member updated" });
      setTeamMember(response.teamMember);
    }
    setLoading(false);
  };

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

  if (teamMember.teamGuid === "") {
    return <Loader />;
  }

  return (
    <>
      <p>
        <span className="text-muted">{teamMember.guid}</span>
      </p>

      <Row>
        <Col md={2}>
          <ProfileImageFromEmail email={teamMember.email} />
          <small>
            Image from{" "}
            <a href="https://gravatar.com" target="_blank">
              gravatar.com
            </a>
          </small>
        </Col>
        <Col md={10}>
          <Form id="form" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Email"
                name="email"
                defaultValue={teamMember.email}
                ref={register}
              />
              <Form.Control.Feedback type="invalid">
                Email is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="firstName"
                placeholder="First Name"
                defaultValue={teamMember.firstName}
                ref={register}
              />
              <Form.Control.Feedback type="invalid">
                First Name is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="lastName"
                placeholder="Last Name"
                defaultValue={teamMember.lastName}
                ref={register}
              />
              <Form.Control.Feedback type="invalid">
                Last Name is required
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>Team</Form.Label>
              <Form.Control
                as="select"
                defaultValue={teamMember.teamGuid}
                name="teamGuid"
                ref={register}
              >
                {teams.map((team) => (
                  <option key={`team-${team.guid}`} value={team.guid}>
                    {team.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="*"
                ref={register}
              />
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
