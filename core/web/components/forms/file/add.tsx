import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Router from "next/router";

export default function ({ apiVersion, errorHandler, successHandler }) {
  const { execApi } = useApi(errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    const response = await execApi("post", `/api/${apiVersion}/file`, {
      type: data.type,
      file: data.file[0],
    });
    setLoading(false);
    if (response?.file) {
      successHandler.set({ message: "File Created" });
      Router.push("/files");
    }
  }

  return (
    <>
      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Type</Form.Label>
          <Form.Control
            autoFocus
            required
            type="text"
            name="type"
            placeholder="File Type"
            ref={register}
          />
          <Form.Control.Feedback type="invalid">
            Type is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>File</Form.Label>
          <Form.Control required type="file" name="file" ref={register} />
          <Form.Control.Feedback type="invalid">
            Type is required
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" active={!loading}>
          Submit
        </Button>
      </Form>
    </>
  );
}
