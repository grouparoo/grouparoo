import { useApi } from "../../../../contexts/api";
import { NextPageContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import LoadingButton from "../../../../components/LoadingButton";
import { errorHandler } from "../../../../eventHandlers";
import { Actions } from "../../../../utils/apiData";
import ModelBadge from "../../../../components/badges/ModelBadge";

export default function NewGroup(props) {
  const {
    model,
  }: {
    model: Actions.ModelView["model"];
  } = props;
  const router = useRouter();
  const { client } = useApi();
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    const response: Actions.GroupCreate = await client.request(
      "post",
      `/group`,
      {
        ...data,
        state: "draft",
        modelId: model.id,
      }
    );
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
  const { client } = useApi();
  const { model } = await client.request("get", `/model/${modelId}`);
  return { model };
};
