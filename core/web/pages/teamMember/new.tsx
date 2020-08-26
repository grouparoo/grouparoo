import Head from "next/head";
import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Router from "next/router";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    teamMemberHandler,
    query,
    teams,
  } = props;
  const { execApi } = useApi(props, errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const { guid: teamGuid } = query;

  async function onSubmit(data) {
    // if the option is disabled, the default value is not set
    if (!data.teamGuid && teamGuid) data.teamGuid = teamGuid;

    const response = await execApi("post", `/team/member`, data);
    setLoading(false);
    if (response?.teamMember) {
      teamMemberHandler.set(response.teamMember);
      successHandler.set({ message: "Team Member Created" });
      Router.push(`/team/${response.teamMember.teamGuid}/members`);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: New Team Member</title>
      </Head>

      <h1>Add Team Member</h1>

      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Team</Form.Label>
          <Form.Control
            as="select"
            name="teamGuid"
            ref={register}
            defaultValue={
              teamGuid ? teamGuid : teams.length > 0 ? teams[0].guid : null
            }
            disabled={teamGuid ? true : false}
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

        <Form.Group>
          <Form.Check
            type="checkbox"
            name="subscribe"
            label={`Subscribe to Grouparoo Newsletter`}
            defaultChecked
            ref={register}
          />
        </Form.Group>

        <br />

        <Button variant="primary" type="submit" active={!loading}>
          Submit
        </Button>
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { teams } = await execApi("get", `/teams`);
  return { teams };
};
