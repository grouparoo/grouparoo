import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Loader from "../../loader";
import Router from "next/router";

import { TeamAPIData } from "../../../utils/apiData";

export default function ({
  apiVersion,
  errorHandler,
  query,
  successHandler,
  teamMemberHandler,
}) {
  const { execApi } = useApi(errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState<TeamAPIData[]>([]);
  const { guid } = query;

  useEffect(() => {
    loadTeams();
  }, []);

  async function loadTeams() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/teams`);
    setLoading(false);
    if (response?.teams) {
      setTeams(response.teams);
    }
  }

  async function onSubmit(data) {
    setLoading(true);
    const response = await execApi(
      "post",
      `/api/${apiVersion}/team/member`,
      data
    );
    setLoading(false);
    if (response?.teamMember) {
      successHandler.set({ message: "Team Member Created" });
      teamMemberHandler.set();
      Router.push({
        pathname: `/team/${response.teamMember.teamGuid}`,
        query: { tab: "members" },
      });
    }
  }

  if (teams.length === 0) {
    return <Loader />;
  }

  return (
    <>
      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Team</Form.Label>
          <Form.Control
            as="select"
            name="guid"
            ref={register}
            disabled={guid ? true : false}
            defaultValue={guid ? guid : teams.length > 0 ? teams[0].guid : null}
          >
            {teams.map((team) => (
              <option key={`team-${team.guid}`} value={team.guid}>
                {team.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            required
            type="text"
            name="firstName"
            placeholder="First Name"
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
            ref={register}
          />
          <Form.Control.Feedback type="invalid">
            Last Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="email"
            ref={register}
          />
          <Form.Control.Feedback type="invalid">
            Email is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name="password"
            type="password"
            placeholder="password"
            ref={register}
          />
          <Form.Control.Feedback type="invalid">
            Password is required
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" active={!loading}>
          Submit
        </Button>
      </Form>
    </>
  );
}
