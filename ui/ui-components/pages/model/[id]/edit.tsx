import Head from "next/head";
import { useState } from "react";
import { UseApi } from "../../../hooks/useApi";
import { Row, Col, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import PageHeader from "../../../components/pageHeader";

import ModelTabs from "../../../components/tabs/model";
import LoadingButton from "../../../components/loadingButton";

import { Actions, Models } from "../../../utils/apiData";
import { ErrorHandler } from "../../../utils/errorHandler";
import { SuccessHandler } from "../../../utils/successHandler";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    types,
  }: {
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
    types: Actions.ModelOptions["types"];
  } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const [model, setModel] = useState<Models.GrouparooModelType>(props.model);
  const [loading, setLoading] = useState(false);
  const { id } = router.query;

  async function edit(event) {
    event.preventDefault();
    setLoading(true);
    const response: Actions.ModelEdit = await execApi(
      "put",
      `/model/${id}`,
      Object.assign({}, model)
    );
    if (response?.model) {
      setLoading(false);
      successHandler.set({ message: "Model Updated" });
      setModel(response.model);
    } else {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (window.confirm("are you sure?")) {
      setLoading(true);
      const response: Actions.ModelDestroy = await execApi(
        "delete",
        `/model/${id}`
      );
      if (response?.success) {
        successHandler.set({ message: "Model Deleted" });
        router.push("/models");
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

      <PageHeader model="grouparooModel" icon={model.icon} title={model.name} />

      <Row>
        <Col>
          <Form id="form" onSubmit={edit} autoComplete="off">
            <fieldset disabled={model.locked !== null}>
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

            <fieldset disabled={model.locked !== null}>
              <LoadingButton variant="primary" type="submit" disabled={loading}>
                Update
              </LoadingButton>

              <br />
              <br />

              <LoadingButton
                variant="danger"
                size="sm"
                onClick={handleDelete}
                disabled={loading}
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

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { model } = await execApi("get", `/model/${id}`);
  const { types } = await execApi("get", `/modelOptions`);
  return { model, types };
};
