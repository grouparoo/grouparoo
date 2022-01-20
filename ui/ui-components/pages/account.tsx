import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import RecordImageFromEmail from "../components/visualizations/RecordImageFromEmail";
import LoadingButton from "../components/LoadingButton";
import { Models, Actions } from "../utils/apiData";
import { NextPageWithInferredProps } from "../utils/pageHelper";
import { sessionHandler, successHandler } from "../eventHandlers";
import { getRequestContext, useApi } from "../contexts/api";
import { Client } from "../client/client";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const client = new Client(getRequestContext(ctx));
  const { teamMember } = await client.request<Actions.AccountView>(
    "get",
    `/account`
  );
  return { props: { teamMember } };
};

const Page: NextPageWithInferredProps<typeof getServerSideProps> = (props) => {
  const { client } = useApi();
  const [loading, setLoading] = useState(false);
  const [teamMember, setTeamMember] = useState<Models.TeamMemberType>(
    props.teamMember
  );

  async function submit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    const response: Actions.AccountView = await client.request(
      "put",
      `/account`,
      teamMember
    );
    if (response?.teamMember) {
      successHandler.set({ message: "Account updated" });
      sessionHandler.set(teamMember);
      setTeamMember(response.teamMember);
    }
    setLoading(false);
  }

  function update(event) {
    const _teamMember = Object.assign({}, teamMember);
    _teamMember[event.target.id] = event.target.value;
    setTeamMember(_teamMember);
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Account</title>
      </Head>

      <h1>Your Account</h1>
      <Row>
        <Col md={2}>
          <RecordImageFromEmail loading={loading} email={teamMember.email} />
          <small>
            Image from{" "}
            <a href="https://gravatar.com" target="_blank" rel="noreferrer">
              gravatar.com
            </a>
          </small>
        </Col>
        <Col md={10}>
          <Form id="form" onSubmit={submit}>
            <fieldset disabled={Boolean(teamMember.locked)}>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  autoFocus
                  required
                  type="text"
                  defaultValue={teamMember.firstName}
                  onChange={update}
                  disabled={loading}
                />
              </Form.Group>

              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  defaultValue={teamMember.lastName}
                  onChange={update}
                  disabled={loading}
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  defaultValue={teamMember.email}
                  onChange={update}
                  disabled={loading}
                />
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

              <LoadingButton variant="primary" type="submit" loading={loading}>
                Update
              </LoadingButton>
            </fieldset>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Page;
