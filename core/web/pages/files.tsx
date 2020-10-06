import Head from "next/head";
import { Button, Image } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { useApi } from "../hooks/useApi";
import { useOffset } from "../hooks/useOffset";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import { useHistoryPagination } from "../hooks/useHistoryPagination";
import Moment from "react-moment";
import Pagination from "../components/pagination";
import LoadingTable from "../components/loadingTable";
import LoadingButton from "../components/loadingButton";

import { FileAPIData } from "../utils/apiData";

const apiVersion = process.env.API_VERSION || "v1";

export default function Page(props) {
  const { errorHandler, successHandler } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(props.total);
  const [files, setFiles] = useState<FileAPIData[]>(props.files);

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();
  useHistoryPagination(offset, "offset", setOffset);
  const csrfToken = globalThis?.localStorage?.getItem("session:csrfToken");

  useSecondaryEffect(() => {
    load();
  }, [limit, offset]);

  async function load() {
    updateURLParams();
    setLoading(true);
    const response = await execApi("get", `/files`, {
      limit,
      offset,
    });
    if (response?.files) {
      setFiles(response.files);
      setTotal(response.total);
    }
    setLoading(false);
  }

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
        await load();
      }
      setLoading(false);
    }
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    if (offset && offset !== 0) url += `offset=${offset}&`;

    const routerMethod =
      url === `${window.location.pathname}?` ? "replace" : "push";
    router[routerMethod](router.route, url, { shallow: true });
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
                  {file.type === "image" ? (
                    <Image
                      thumbnail
                      style={{ maxWidth: 100, maxHeight: 100 }}
                      src={`/api/${apiVersion}/file/${file.guid}?csrfToken=${csrfToken}`}
                    />
                  ) : (
                    <p>
                      <em>no preview</em>
                    </p>
                  )}
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
                      download(file);
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
