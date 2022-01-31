import { useApi } from "../../../contexts/api";
import Head from "next/head";
import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import { successHandler } from "../../../eventHandlers";
import PageHeader from "../../../components/PageHeader";
import ModelTabs from "../../../components/tabs/Model";
import LoadingButton from "../../../components/LoadingButton";
import { Actions } from "../../../utils/apiData";
import { generateClient } from "../../../client/client";
import { NextPageContext } from "next";
import { useGrouparooModel } from "../../../contexts/grouparooModel";

export default function Page(props) {
  const {
    types,
  }: {
    types: Actions.ModelOptions["types"];
  } = props;
  const router = useRouter();
  const { client } = useApi();
  const { model: currentModel } = useGrouparooModel();
  const [model, setModel] = useState(currentModel);
  const [loading, setLoading] = useState(false);

  async function edit(event) {
    event.preventDefault();
    setLoading(true);

    const response: Actions.ModelEdit = await client.request(
      "put",
      `/model/${model.id}`,
      Object.assign({}, model)
    );
    if (response?.model) {
      setLoading(false);
      successHandler.set({ message: "Model Updated" });
      router.replace(router.asPath);
    } else {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const response: Actions.ModelDestroy = await client.request(
        "delete",
        `/model/${model.id}`
      );
      if (response?.success) {
        successHandler.set({ message: "Model Deleted" });
        router.push("/");
      } else {
        setLoading(false);
      }
    }
  }

  const update = async (event) => {
    const _model = Object.assign({}, model);
    _model[event.target.id] = event.target.value;
    setModel(_model);
  };

  return (
    <>
      <Head>
        <title>Grouparoo: {model.name}</title>
      </Head>

      <ModelTabs model={model} />

      <PageHeader
        iconType="grouparooModel"
        icon={model.icon}
        title={model.name}
      />

      <Row>
        <Col>
          <Form id="form" onSubmit={edit} autoComplete="off">
            <fieldset disabled={Boolean(model.locked)}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Name"
                  value={model.name}
                  disabled={loading}
                  onChange={(e) => update(e)}
                />
                <Form.Control.Feedback type="invalid">
                  Name is required
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="type">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  as="select"
                  value={model.type}
                  onChange={(e) => update(e)}
                  disabled
                >
                  {types.map((type) => (
                    <option key={`type-${type}`}>{type}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </fieldset>
            <fieldset disabled={Boolean(model.locked)}>
              <LoadingButton variant="primary" type="submit" loading={loading}>
                Update
              </LoadingButton>

              <br />
              <br />

              <LoadingButton
                variant="danger"
                size="sm"
                onClick={handleDelete}
                loading={loading}
              >
                Delete
              </LoadingButton>
            </fieldset>
          </Form>
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const client = generateClient(ctx);
  const { types } = await client.request("get", `/modelOptions`);

  return { types };
};
