import Head from "next/head";
import { useState } from "react";
import { UseApi } from "../../../../hooks/useApi";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Form } from "react-bootstrap";
import LoadingButton from "../../../../components/LoadingButton";
import { Actions } from "../../../../utils/apiData";
import { ErrorHandler } from "../../../../utils/errorHandler";
import ModelBadge from "../../../../components/badges/ModelBadge";
import { NextPageContext } from "next";

export default function NewGroup(props) {
  const {
    errorHandler,
    model,
  }: {
    errorHandler: ErrorHandler;
    model: Actions.ModelView["model"];
  } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    const response: Actions.GroupCreate = await execApi("post", `/group`, {
      ...data,
      state: "draft",
      modelId: model.id,
    });
    if (response?.group) {
      router.push(
        `/model/${response.group.modelId}/group/${response.group.id}/rules`
      );
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
      <ModelBadge modelName={model.name} modelId={model.id} />

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

        <LoadingButton variant="primary" type="submit" loading={loading}>
          Submit
        </LoadingButton>
      </Form>
    </>
  );
}

NewGroup.getInitialProps = async (ctx: NextPageContext) => {
  const { modelId } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { model } = await execApi("get", `/model/${modelId}`);
  return { model };
};
