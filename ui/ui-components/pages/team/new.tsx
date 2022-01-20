import Head from "next/head";
import { useState } from "react";
import { UseApi } from "../../hooks/useApi";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import LoadingButton from "../../components/LoadingButton";
import { Actions } from "../../utils/apiData";
import { errorHandler } from "../../eventHandlers";

export default function NewTeamPage(props) {
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    const response: Actions.TeamCreate = await execApi("post", `/team`, data);
    if (response?.team) {
      router.push("/team/[id]/edit", `/team/${response.team.id}/edit`);
    } else {
      setLoading(false);
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
            disabled={loading}
          />
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <LoadingButton variant="primary" type="submit" loading={loading}>
          Submit
        </LoadingButton>
      </Form>
    </>
  );
}
