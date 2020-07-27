import Head from "next/head";
import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { useForm } from "react-hook-form";
import Router from "next/router";
import { Form, Button } from "react-bootstrap";

export default function NewTeamPage(props) {
  const { errorHandler, successHandler } = props;
  const { execApi } = useApi(props, errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    const response = await execApi("post", `/team`, data);
    setLoading(false);
    if (response?.team) {
      Router.push("/team/[guid]/edit", `/team/${response.team.guid}/edit`);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: New Team</title>
      </Head>

      <h1>Add Team</h1>

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

        <Button variant="primary" type="submit" disabled={loading}>
          Submit
        </Button>
      </Form>
    </>
  );
}
