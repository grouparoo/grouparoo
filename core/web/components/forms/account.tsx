import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useForm } from "react-hook-form";
import { Form, Button, Row, Col } from "react-bootstrap";
import ProfileImageFromEmail from "../visualizations/profileImageFromEmail";

export default function ({
  apiVersion,
  errorHandler,
  successHandler,
  sessionHandler,
}) {
  const { execApi } = useApi(errorHandler);
  const { handleSubmit, register } = useForm();
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
    const response = await execApi("get", `/api/${apiVersion}/account`);
    setLoading(false);
    if (response?.teamMember) {
      setTeamMember(response.teamMember);
    }
  }

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await execApi("put", `/api/${apiVersion}/account`, data);
    setLoading(false);
    if (response?.teamMember) {
      successHandler.set({ message: "Account updated" });
      sessionHandler.set();
      setTeamMember(response.teamMember);
    }
  };

  return (
    <>
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
              <Form.Label>First Name</Form.Label>
              <Form.Control
                autoFocus
                required
                type="text"
                name="firstName"
                defaultValue={teamMember.firstName}
                ref={register}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="lastName"
                defaultValue={teamMember.lastName}
                ref={register}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                defaultValue={teamMember.email}
                ref={register}
              />
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

            <Button variant="primary" type="submit" active={!loading}>
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
