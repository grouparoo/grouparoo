import { useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Router from "next/router";

export default function ({ apiVersion, errorHandler, successHandler, source }) {
  const { execApi } = useApi(errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    data.sourceGuid = source.guid;
    data.recurring = false;

    setLoading(true);
    const response = await execApi("post", `/api/${apiVersion}/schedule`, data);
    setLoading(false);
    if (response?.schedule) {
      successHandler.set({ message: "Schedule Created" });
      Router.push(`/schedule/${response.schedule.guid}`);
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
            placeholder="Schedule Name"
            ref={register}
          />
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Connected Source</Form.Label>
          <Form.Control
            type="text"
            name="sourceGuid"
            value={source.name}
            disabled
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
