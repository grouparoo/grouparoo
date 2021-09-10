import Head from "next/head";
import { useState, useEffect } from "react";
import { UseApi } from "../../hooks/useApi";
import { useForm } from "react-hook-form";
import { Form, ProgressBar } from "react-bootstrap";
import { useRouter } from "next/router";
import LoadingButton from "../../components/loadingButton";
import { Actions } from "../../utils/apiData";
import { ErrorHandler } from "../../utils/errorHandler";
import { UploadHandler } from "../../utils/uploadHandler";

export default function Page(props) {
  const {
    errorHandler,
    uploadHandler,
    types,
  }: {
    errorHandler: ErrorHandler;
    uploadHandler: UploadHandler;
    types: Actions.AppOptions["types"];
  } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler, uploadHandler);
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
    const response: Actions.FileCreate = await execApi("post", `/file`, {
      type: data.type,
      _file: data.file[0],
    });
    setLoading(false);
    if (response?.file) {
      router.push("/files");
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
            disabled={loading}
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
          <Form.Control
            required
            type="file"
            name="file"
            ref={register}
            disabled={loading}
          />
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

        <LoadingButton variant="primary" type="submit" disabled={loading}>
          Submit
        </LoadingButton>
      </Form>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { options } = await execApi("get", `/files/options`);
  return { types: options.types };
};
