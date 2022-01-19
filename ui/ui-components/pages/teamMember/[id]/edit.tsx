import Head from "next/head";
import { useState } from "react";
import { UseApi } from "../../../hooks/useApi";
import { Row, Col, Form } from "react-bootstrap";
import LoadingButton from "../../../components/LoadingButton";
import { useRouter } from "next/router";
import RecordImageFromEmail from "../../../components/visualizations/RecordImageFromEmail";
import { Models, Actions } from "../../../utils/apiData";
import TeamMemberTabs from "../../../components/tabs/TeamMember";
import { formatTimestamp } from "../../../utils/formatTimestamp";
import { errorHandler, successHandler } from "../../../eventHandlers";

export default function Page(props) {
  const {
    teams,
  }: {
    teams: Models.TeamType[];
  } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [teamMember, setTeamMember] = useState<Models.TeamMemberType>(
    props.teamMember
  );

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    const response: Actions.TeamMemberEdit = await execApi(
      "put",
      `/team/member/${teamMember.id}`,
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
      const { success }: Actions.TeamMemberDestroy = await execApi(
        "delete",
        `/team/member/${teamMember.id}`
      );
      if (success) {
        successHandler.set({ message: "team member deleted" });
        router.push("/teams");
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

      <h1>{teamMember.email}</h1>

      <Row>
        <Col md={2}>
          <p>
            <small>
              Last Login: {formatTimestamp(teamMember.lastLoginAt)}{" "}
            </small>
          </p>

          <RecordImageFromEmail loading={loading} email={teamMember.email} />
          <small>
            Image from{" "}
            <a href="https://gravatar.com" target="_blank">
              gravatar.com
            </a>
          </small>
        </Col>
        <Col md={10}>
          <Form id="form" onSubmit={submit} autoComplete="off">
            <fieldset disabled={Boolean(teamMember.locked)}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Email"
                  value={teamMember.email}
                  onChange={update}
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
                />
                <Form.Control.Feedback type="invalid">
                  Last Name is required
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="teamId">
                <Form.Label>Team</Form.Label>
                <Form.Control
                  as="select"
                  value={teamMember.teamId}
                  onChange={update}
                  disabled={loading}
                >
                  {teams.map((team) => (
                    <option key={`team-${team.id}`} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="*"
                  onChange={update}
                  disabled={loading}
                />
              </Form.Group>

              <LoadingButton variant="primary" loading={loading} type="submit">
                Update
              </LoadingButton>
              <br />
              <br />
              <LoadingButton
                loading={loading}
                variant="danger"
                size="sm"
                onClick={() => {
                  handleDelete();
                }}
              >
                Delete
              </LoadingButton>
            </fieldset>
          </Form>
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { id } = ctx.query;
  const { teams } = await execApi("get", `/teams`);
  const { teamMember } = await execApi("get", `/team/member/${id}`);
  return { teams, teamMember };
};
