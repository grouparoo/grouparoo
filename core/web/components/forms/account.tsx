import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { Form, Button, Row, Col } from "react-bootstrap";
import ProfileImageFromEmail from "../visualizations/profileImageFromEmail";

export default function ({ errorHandler, successHandler, sessionHandler }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [teamMember, setTeamMember] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/account`);
    setLoading(false);
    if (response?.teamMember) {
      setTeamMember(response.teamMember);
    }
  }

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    const response = await execApi("put", `/account`, teamMember);
    setLoading(false);
    if (response?.teamMember) {
      successHandler.set({ message: "Account updated" });
      sessionHandler.set();
      setTeamMember(response.teamMember);
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
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                autoFocus
                required
                type="text"
                defaultValue={teamMember.firstName}
                onChange={update}
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue={teamMember.lastName}
                onChange={update}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                type="email"
                defaultValue={teamMember.email}
                onChange={update}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="*" onChange={update} />
            </Form.Group>

            <Button variant="primary" type="submit" active={!loading}>
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
