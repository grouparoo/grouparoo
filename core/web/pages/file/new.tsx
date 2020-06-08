import Head from "next/head";
import { useState } from "react";
import { useApi } from "../../hooks/useApi";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Router from "next/router";

export default function Page(props) {
  const { errorHandler, successHandler, types } = props;
  const { execApi } = useApi(props, errorHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    const response = await execApi("post", `/file`, {
      type: data.type,
      file: data.file[0],
    });
    setLoading(false);
    if (response?.file) {
      Router.push("/files");
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: New File</title>
      </Head>

      <h1>Add File</h1>

      <Form id="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>File Type</Form.Label>
          <Form.Control as="select" name="type" ref={register}>
            <option disabled>choose a type</option>
            {types.map((type) => (
              <option key={`file-type-${type}`}>{type}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>File</Form.Label>
          <Form.Control required type="file" name="file" ref={register} />
          <Form.Control.Feedback type="invalid">
            Type is required
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          Submit
        </Button>
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { options } = await execApi("get", `/files/options`);
  return { types: options.types };
};
