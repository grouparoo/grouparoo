import Head from "next/head";
import { useState } from "react";
import { UseApi } from "../../hooks/useApi";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import LoadingButton from "../../components/loadingButton";
import { Actions, Models } from "../../utils/apiData";
import { ErrorHandler } from "../../utils/errorHandler";

export default function NewGroup(props) {
  const {
    models,
  }: {
    models: Models.GrouparooModelType[];
  } = props;

  const { errorHandler }: { errorHandler: ErrorHandler } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    const state = data.type === "manual" ? "ready" : "draft";
    const response: Actions.GroupCreate = await execApi(
      "post",
      `/group`,
      Object.assign({}, data, { state })
    );
    if (response?.group) {
      const path = response.group.type === "calculated" ? "rules" : "edit";
      router.push(`/group/[id]/${path}`, `/group/${response.group.id}/${path}`);
    } else {
      setLoading(false);
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
            disabled={loading}
            placeholder="Group Name"
          />
          <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Group Type</Form.Label>
          <Form.Control
            as="select"
            name="type"
            ref={register}
            disabled={loading}
          >
            <option>calculated</option>
            <option>manual</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Grouparoo Model</Form.Label>
          <Form.Control
            as="select"
            defaultValue=""
            name="modelId"
            ref={register}
            disabled={loading}
          >
            {models.map((model) => (
              <option key={`model-${model.id}`} value={model.id}>
                {model.name}
              </option>
            ))}
          </Form.Control>
          <Form.Text className="text-muted">
            This source will only contribute to the chosen Grouparoo Model
          </Form.Text>
        </Form.Group>

        <LoadingButton variant="primary" type="submit" disabled={loading}>
          Submit
        </LoadingButton>
      </Form>
    </>
  );
}

NewGroup.getInitialProps = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { models } = await execApi("get", `/models`);
  return { models };
};
