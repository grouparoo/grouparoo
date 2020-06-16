import Head from "next/head";
import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { useForm } from "react-hook-form";
import Router from "next/router";
import { Form, Button } from "react-bootstrap";

export default function (props) {
  const { errorHandler, successHandler } = props;
  const { execApi } = useApi(props, errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    const state = data.type === "manual" ? "ready" : "draft";
    const response = await execApi(
      "post",
      `/group`,
      Object.assign({}, data, { state })
    );
    setLoading(false);
    if (response?.group) {
      const path = response.group.type === "calculated" ? "rules" : "edit";
      Router.push(
        `/group/[guid]/${path}`,
        `/group/${response.group.guid}/${path}`
      );
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: New Group</title>
      </Head>

      <h1>Add Group</h1>

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
