import { useState, useEffect } from "react";
import { useApi } from "../../../hooks/useApi";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Router from "next/router";

export default function ({ errorHandler, successHandler }) {
  const { execApi } = useApi(errorHandler);
  const { handleSubmit, register } = useForm();
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/files/options`);
    setLoading(false);
    if (response?.options) {
      setTypes(response.options.types);
    }
  }

  async function onSubmit(data) {
    setLoading(true);
    const response = await execApi("post", `/file`, {
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
          <Form.Label>File Type</Form.Label>
          <Form.Control as="select" name="type" ref={register}>
            <option disabled>choose a type</option>
            {types.map((type) => (
              <option key={`file-type-${type}`}>{type}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>File</Form.Label>
          <Form.Control required type="file" name="file" ref={register} />
          <Form.Control.Feedback type="invalid">
            Type is required
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          Submit
        </Button>
      </Form>
    </>
  );
}
