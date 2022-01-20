import Head from "next/head";
import { useState } from "react";
import { UseApi } from "@grouparoo/ui-components/hooks/useApi";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import LoadingButton from "@grouparoo/ui-components/components/LoadingButton";
import { errorHandler } from "@grouparoo/ui-components/eventHandlers";
import { Actions } from "@grouparoo/ui-components/utils/apiData";

export default function Page(props) {
  const router = useRouter();
  const { client } = useApi();
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    const response: Actions.ApiKeyCreate = await client.request(
      "post",
      `/apiKey`,
      data
    );

    if (response?.apiKey) {
      router.push("/apiKey/[id]/edit", `/apiKey/${response.apiKey.id}/edit`);
    } else {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: New API Key</title>
      </Head>

      <h1>Add API Key</h1>

      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            required
            disabled={loading}
            type="text"
            name="name"
            ref={register}
            placeholder="API Key Name"
          />
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <LoadingButton variant="primary" type="submit" disabled={loading}>
          Submit
        </LoadingButton>
      </Form>
    </>
  );
}
