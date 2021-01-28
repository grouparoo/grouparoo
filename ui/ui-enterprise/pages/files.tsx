import Head from "next/head";
import { Button, Image } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import {
  useOffset,
  updateURLParams,
} from "@grouparoo/ui-components/hooks/URLParams";
import { useSecondaryEffect } from "@grouparoo/ui-components/hooks/useSecondaryEffect";
import Moment from "react-moment";
import Pagination from "@grouparoo/ui-components/components/pagination";
import LoadingTable from "@grouparoo/ui-components/components/loadingTable";
import LoadingButton from "@grouparoo/ui-components/components/loadingButton";
import { Models, Actions } from "@grouparoo/ui-components/utils/apiData";
import {
  FilePreview,
  downloadFile,
} from "@grouparoo/ui-components/components/filePreview";

const apiVersion = process.env.API_VERSION || "v1";

export default function Page(props) {
  const { errorHandler, successHandler } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState<number>(props.total);
  const [files, setFiles] = useState<Models.FileType[]>(props.files);

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();

  useSecondaryEffect(() => {
    load();
  }, [limit, offset]);

  async function load() {
    updateURLParams(router, { offset });
    setLoading(true);
    const response: Actions.FilesList = await execApi("get", `/files`, {
      limit,
      offset,
    });
    if (response?.files) {
      setFiles(response.files);
      setTotal(response.total);
    }
    setLoading(false);
  }

  async function destroy(file) {
    if (confirm("are you sure?")) {
      setLoading(true);
      const response: Actions.FileDestroy = await execApi(
        "delete",
        `/file/${file.guid}`
      );
      if (response?.success) {
        successHandler.set({ message: "File Deleted" });
        await load();
      }
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Files</title>
      </Head>

      <h1>Files</h1>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Name</th>
            <th>Type</th>
            {/* <th>Bucket</th> */}
            <th>Extension</th>
            <th>Size</th>
            <th>Mime</th>
            <th>Created At</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => {
            const fileNameParts = file.path.split("/");
            const fileName = fileNameParts[fileNameParts.length - 1];

            return (
              <tr key={`file-${file.guid}`}>
                <td>
                  <FilePreview maxWidth={100} maxHeight={100} file={file} />
                </td>
                <td>
                  <strong>
                    <Link
                      href="/file/[guid]/edit"
                      as={`/file/${file.guid}/edit`}
                    >
                      <a>{fileName}</a>
                    </Link>
                  </strong>
                  <br />
                  {file.path}
                </td>
                <td>{file.type}</td>
                {/* <td>{file.bucket}</td> */}
                <td>{file.extension}</td>
                <td>
                  {Math.round((100 * file.sizeBytes) / 1024 / 1024) / 100}mb
                </td>
                <td>{file.mime}</td>
                <td>
                  <Moment fromNow>{file.createdAt}</Moment>
                </td>
                <td>
                  <Button
                    size="sm"
                    variant="outline-primary"
                    onClick={() => {
                      downloadFile(file);
                    }}
                  >
                    Download
                  </Button>
                </td>
                <td>
                  <LoadingButton
                    size="sm"
                    disabled={loading}
                    variant="outline-danger"
                    onClick={() => {
                      destroy(file);
                    }}
                  >
                    X
                  </LoadingButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </LoadingTable>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      <Button
        variant="primary"
        onClick={() => {
          router.push("/file/new");
        }}
      >
        Add File
      </Button>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { limit, offset } = ctx.query;
  const { files, total } = await execApi("get", `/files`, { limit, offset });
  return { files, total };
};
