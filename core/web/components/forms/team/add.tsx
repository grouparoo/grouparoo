import { useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { useForm } from "react-hook-form";
import Router from "next/router";
import { Form, Button } from "react-bootstrap";

export default function ({ apiVersion, errorHandler, successHandler }) {
  const { execApi } = useApi(errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    const response = await execApi("post", `/api/${apiVersion}/team`, data);
    setLoading(false);
    if (response?.team) {
      successHandler.set({ message: "Team Created" });
      Router.push(`/team/${response.team.guid}`);
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
            placeholder="Team Name"
          />
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="readAccess">
          <Form.Check
            name="read"
            type="checkbox"
            label="Read Access"
            ref={register}
          />
        </Form.Group>

        <Form.Group controlId="writeAccess">
          <Form.Check
            name="write"
            type="checkbox"
            label="Write Access"
            ref={register}
          />
        </Form.Group>

        <Form.Group controlId="adminAccess">
          <Form.Check
            name="administer"
            type="checkbox"
            label="Admin Access"
            ref={register}
          />
        </Form.Group>

        <Button variant="primary" type="submit" active={!loading}>
          Submit
        </Button>
      </Form>
    </>
  );
}
