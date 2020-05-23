import { useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { useForm } from "react-hook-form";
import Router from "next/router";
import { Form, Button } from "react-bootstrap";

export default function ({ errorHandler, successHandler }) {
  const { execApi } = useApi(errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    const response = await execApi("post", `/team/initialize`, data);
    setLoading(false);
    if (response?.team) {
      successHandler.set({ message: "Team Created" });
      Router.push(`/session/sign-in`);
    }
  }

  return (
    <>
      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            required
            type="text"
            name="firstName"
            ref={register}
            placeholder="First Name"
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
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="Email Address"
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
            type="password"
            name="password"
            placeholder="Password"
            ref={register}
          />
          <Form.Control.Feedback type="invalid">
            A password is required
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" active={!loading}>
          Submit
        </Button>
      </Form>
    </>
  );
}
