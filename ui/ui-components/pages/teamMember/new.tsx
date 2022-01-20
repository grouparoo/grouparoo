import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import LoadingButton from "../../components/LoadingButton";
import {
  errorHandler,
  successHandler,
  teamMemberHandler,
} from "../../eventHandlers";
import { UseApi } from "../../hooks/useApi";
import { Actions, Models } from "../../utils/apiData";
import { grouparooUiEdition } from "../../utils/uiEdition";

export default function Page(props) {
  const {
    teams,
  }: {
    teams: Models.TeamType[];
  } = props;
  const router = useRouter();
  const { client } = useApi();
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const { id: teamId } = router.query;

  async function onSubmit(data) {
    // if the option is disabled, the default value is not set
    if (!data.teamId && teamId) data.teamId = teamId;

    setLoading(true);
    const response: Actions.TeamMemberCreate = await client.request(
      "post",
      `/team/member`,
      data
    );

    if (response?.teamMember) {
      teamMemberHandler.set([response.teamMember]);
      successHandler.set({ message: "Team Member Created" });
      grouparooUiEdition() === "enterprise"
        ? router.push(`/team/${response.teamMember.teamId}/members`)
        : router.push(`/teams`);
    } else {
      setLoading(false);
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
            name="teamId"
            ref={register}
            defaultValue={
              teamId ? teamId : teams.length > 0 ? teams[0].id : null
            }
            disabled={teamId || loading ? true : false}
          >
            {teams.map((team) => (
              <option key={`team-${team.id}`} value={team.id}>
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
          />
          <Form.Control.Feedback type="invalid">
            Password is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="checkbox"
            name="subscribed"
            label={`Subscribe to the Grouparoo Newsletter`}
            defaultChecked
            ref={register}
            disabled={loading}
          />
        </Form.Group>
        <p>
          <a href="https://www.grouparoo.com/legal/privacy" target="_blank">
            Privacy Policy
          </a>
        </p>

        <LoadingButton variant="primary" type="submit" loading={loading}>
          Submit
        </LoadingButton>
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { client } = useApi();
  const { teams } = await client.request("get", `/teams`);
  return { teams };
};
