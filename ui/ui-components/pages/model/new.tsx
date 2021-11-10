import Head from "next/head";
import { UseApi } from "../../hooks/useApi";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { ErrorHandler } from "../../utils/errorHandler";
import { Actions, Models } from "../../utils/apiData";
import LoadingButton from "../../components/LoadingButton";

export default function Page(props) {
  const {
    errorHandler,
    types,
  }: {
    errorHandler: ErrorHandler;
    types: Actions.ModelOptions["types"];
  } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data: Models.GrouparooModelType) {
    setLoading(true);
    const response: Actions.ModelCreate = await execApi(
      "post",
      `/model`,
      Object.assign({}, data)
    );
    if (response?.model) {
      router.push(`/model/[modelId]/edit`, `/model/${response.model.id}/edit`);
    } else {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: New Model</title>
      </Head>

      <h1>Add Model</h1>

      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            required
            type="text"
            name="name"
            ref={register}
            disabled={loading}
            placeholder="Model Name"
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
            ref={register}
            disabled={loading}
          >
            <option disabled>choose type</option>
            {types.map((type) => (
              <option key={`type-${type}`}>{type}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <LoadingButton variant="primary" type="submit" disabled={loading}>
          Submit
        </LoadingButton>
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { types }: Actions.AppOptions = await execApi("get", `/modelOptions`);
  return { types };
};
