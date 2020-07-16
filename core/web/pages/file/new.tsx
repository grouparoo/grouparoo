import Head from "next/head";
import { useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useForm } from "react-hook-form";
import { Form, Button, ProgressBar } from "react-bootstrap";
import Router from "next/router";

export default function Page(props) {
  const { errorHandler, uploadHandler, types } = props;
  const { execApi } = useApi(props, errorHandler, uploadHandler);
  const { handleSubmit, register } = useForm();
  const [loading, setLoading] = useState(false);
  const [uploadPercentage, setUploadPercentage] = useState(0);

  useEffect(() => {
    uploadHandler.subscribe(
      "fileAdd",
      ({ uploadPercentage: _uploadPercentage }) => {
        setUploadPercentage(_uploadPercentage);
      }
    );

    return () => {
      uploadHandler.unsubscribe("fileAdd");
    };
  }, []);

  async function onSubmit(data) {
    setLoading(true);
    const response = await execApi("post", `/file`, {
      type: data.type,
      _file: data.file[0],
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
          <Form.Control
            required
            as="select"
            name="type"
            defaultValue=""
            ref={register}
          >
            <option disabled value="">
              Choose a file type
            </option>
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

        <br />

        {uploadPercentage > 0 ? (
          <>
            <p>Uploading...</p>
            <ProgressBar
              striped
              variant="info"
              animated
              now={uploadPercentage * 100}
            />
            <br />
          </>
        ) : null}

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
