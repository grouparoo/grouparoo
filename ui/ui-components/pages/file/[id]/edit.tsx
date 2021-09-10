import FileTabs from "../../../components/tabs/file";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { UseApi } from "../../../hooks/useApi";
import { Row, Col, Button } from "react-bootstrap";
import LoadingButton from "../../../components/loadingButton";
import { Models, Actions } from "../../../utils/apiData";
import { ErrorHandler } from "../../../utils/errorHandler";
import { SuccessHandler } from "../../../utils/successHandler";
import { FilePreview, downloadFile } from "../../../components/filePreview";

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
  const { execApi } = UseApi(props, errorHandler);
  const [loading, setLoading] = useState(false);

  const fileNameParts = file.path.split("/");
  const fileName = fileNameParts[fileNameParts.length - 1];

  async function destroy(file) {
    if (confirm("are you sure?")) {
      setLoading(true);
      const response: Actions.FileDestroy = await execApi(
        "delete",
        `/file/${file.id}`
      );
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
          <FilePreview maxWidth="100%" maxHeight="100%" file={file} />
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
              downloadFile(file);
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
  const { id } = ctx.query;
  const { execApi } = UseApi(ctx);
  const { file } = await execApi("get", `/file/${id}/details`);
  return { file };
};
