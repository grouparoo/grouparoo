import FileTabs from "../../../components/tabs/file";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Button, Image } from "react-bootstrap";
import LoadingButton from "../../../components/loadingButton";
import { Models } from "../../../utils/apiData";
import { ErrorHandler } from "../../../utils/errorHandler";
import { SuccessHandler } from "../../../utils/successHandler";

export default function Page(props) {
  const {
    errorHandler,
    successHandler,
    file,
  }: {
    errorHandler: ErrorHandler;
    successHandler: SuccessHandler;
    file: Models.FileType;
  } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);

  const apiVersion = process.env.API_VERSION || "v1";
  const csrfToken = globalThis?.localStorage?.getItem("session:csrfToken");
  const fileNameParts = file.path.split("/");
  const fileName = fileNameParts[fileNameParts.length - 1];

  async function download(file) {
    console.info("downloading file", file);
    const url = `/api/${apiVersion}/file/${file.guid}?csrfToken=${csrfToken}`;
    window.open(url, "_new");
  }

  async function destroy(file) {
    if (confirm("are you sure?")) {
      setLoading(true);
      const response = await execApi("delete", `/file/${file.guid}`);
      if (response?.success) {
        successHandler.set({ message: "File Deleted" });
        router.push("/files");
      } else {
        setLoading(false);
      }
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {fileName}</title>
      </Head>

      <FileTabs file={file} />

      <h1>{fileName}</h1>

      <Row>
        <Col md={8}>
          {file.type === "image" ? (
            <Image
              thumbnail
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              src={`/api/${apiVersion}/file/${file.guid}?csrfToken=${csrfToken}`}
            />
          ) : (
            <p>
              <em>no preview</em>
            </p>
          )}
        </Col>
        <Col>
          <p>
            <strong>Path:</strong> {file.path}
            <br />
            <strong>Type:</strong> {file.type}
            <br />
            <strong>Extension:</strong> {file.extension}
            <br />
            <strong>Size:</strong>{" "}
            {Math.round((100 * file.sizeBytes) / 1024 / 1024) / 100} mb
            <br />
            <strong>Mime:</strong> {file.mime}
          </p>

          <Button
            size="sm"
            variant="outline-primary"
            onClick={() => {
              download(file);
            }}
          >
            Download
          </Button>
        </Col>
      </Row>

      <hr />

      <LoadingButton
        size="sm"
        variant="danger"
        disabled={loading}
        onClick={() => {
          destroy(file);
        }}
      >
        Delete
      </LoadingButton>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { file } = await execApi("get", `/file/${guid}/details`);
  return { file };
};
