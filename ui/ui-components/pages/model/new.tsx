import Head from "next/head";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { errorHandler } from "../../eventHandlers";
import { Actions, Models } from "../../utils/apiData";
import LoadingButton from "../../components/LoadingButton";
import { generateClient } from "../../client/client";
import { NextPageContext } from "next";
import { useApi } from "../../contexts/api";

export default function Page(props) {
  const {
    types,
  }: {
    types: Actions.ModelOptions["types"];
  } = props;
  const router = useRouter();
  const { client } = useApi();
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data: Models.GrouparooModelType) {
    setLoading(true);
    const response: Actions.ModelCreate = await client.request(
      "post",
      `/model`,
      Object.assign({}, data)
    );
    if (response?.model) {
      router.push(
        `/model/[modelId]/overview`,
        `/model/${response.model.id}/overview`
      );
    } else {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: New Model</title>
      </Head>

      <h1>New Model</h1>

      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            required
            type="text"
            name="name"
            disabled={loading}
            placeholder="Model Name"
            {...register("name")}
          />
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Model Type</Form.Label>
          <Form.Control
            as="select"
            name="type"
            disabled={loading}
            {...register("type")}
          >
            <option disabled>choose type</option>
            {types.map((type) => (
              <option key={`type-${type}`}>{type}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <LoadingButton variant="primary" type="submit" loading={loading}>
          Submit
        </LoadingButton>
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const client = generateClient(ctx);
  const { types }: Actions.ModelOptions = await client.request(
    "get",
    `/modelOptions`
  );
  return { types };
};
