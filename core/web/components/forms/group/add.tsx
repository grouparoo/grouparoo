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
    const state = data.type === "manual" ? "ready" : "draft";
    const response = await execApi(
      "post",
      `/api/${apiVersion}/group`,
      Object.assign({}, data, { state })
    );
    setLoading(false);
    if (response?.group) {
      successHandler.set({ message: "Group Created" });
      Router.push('/group/[guid], `/group/${response.group.guid}`);
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
            placeholder="Group Name"
          />
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Group Type</Form.Label>
          <Form.Control as="select" name="type" ref={register}>
            <option>calculated</option>
            <option>manual</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit" active={!loading}>
          Submit
        </Button>
      </Form>
    </>
  );
}
