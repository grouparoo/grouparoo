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
    const response = await execApi("post", `/apiKey`, data);
    setLoading(false);
    if (response?.apiKey) {
      successHandler.set({ message: "API Key Created" });
      Router.push("/apiKey/[guid]", `/apiKey/${response.apiKey.guid}`);
    }
  }

  return (
    <>
      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            required
            type="text"
            name="name"
            ref={register}
            placeholder="API Key Name"
          />
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          Submit
        </Button>
      </Form>
    </>
  );
}
