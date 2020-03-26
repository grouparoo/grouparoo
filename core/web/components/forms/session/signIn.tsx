import { useState } from "react";
import Router from "next/router";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function ({
  apiVersion,
  errorHandler,
  successHandler,
  sessionHandler,
  query,
  useApi,
}) {
  const { execApi } = useApi(errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const { nextPage } = query;

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await execApi("post", `/api/${apiVersion}/session`, data);
    setLoading(false);
    if (response?.teamMember) {
      successHandler.set({ message: "Session created" });
      window.localStorage.setItem("session:csrfToken", response.csrfToken);
      sessionHandler.set();

      nextPage ? Router.push(nextPage) : Router.push("/dashboard");
    }
  };

  return (
    <Form id="form" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          autoFocus
          required
          name="email"
          type="email"
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
          name="password"
          type="password"
          placeholder="Password"
          ref={register}
        />
        <Form.Control.Feedback type="invalid">
          A password is required
        </Form.Control.Feedback>
      </Form.Group>

      <Button active={!loading} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
