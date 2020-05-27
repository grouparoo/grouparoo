import Head from "next/head";
import { Button } from "react-bootstrap";
import Router from "next/router";
import { useState } from "react";
import { useApi, apiVersion } from "../hooks/useApi";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import { useHistoryPagination } from "../hooks/useHistoryPagination";
import Moment from "react-moment";
import Pagination from "../components/pagination";
import LoadingTable from "../components/loadingTable";

import { FileAPIData } from "../utils/apiData";

export default function Page(props) {
  const { errorHandler, successHandler, query } = props;
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(props.total);
  const [files, setFiles] = useState<FileAPIData[]>(props.files);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  useHistoryPagination(offset, "offset", setOffset);

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
    setLoading(false);
    if (response?.files) {
      setFiles(response.files);
      setTotal(response.total);
    }
  }

  async function download(file) {
    console.info("downloading file", file);
    const csrfToken = await window.localStorage.getItem("session:csrfToken");
    const url = `/api/${apiVersion}/file/${file.guid}?csrfToken=${csrfToken}`;
    window.open(url, "_new");
  }

  async function destroy(file) {
    if (confirm("are you sure?")) {
      setLoading(true);
      const response = await execApi("delete", `/file/${file.guid}`);
      setLoading(false);
      if (response?.success) {
        successHandler.set({ message: "File Delete" });
        await load();
      }
    }
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    if (offset && offset !== 0) {
      url += `offset=${offset}&`;
    }

    const routerMethod =
      url === `${window.location.pathname}?` ? "replace" : "push";
    Router[routerMethod](Router.route, url, { shallow: true });
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
                  <strong>{fileName}</strong>
                  <br />
                  {file.path}
                </td>
                <td>{file.type}</td>
                {/* <td>{file.bucket}</td> */}
                <td>{file.extension}</td>
                <td>
                  {Math.round((100 * file.sizeBytes) / 1024 / 1024) / 100} mb
                </td>
                <td>{file.mime}</td>
                <td>
                  <Moment fromNow>{file.createdAt}</Moment>
                </td>
                <td>
                  <Button
                    size="sm"
                    variant="success"
                    onClick={() => {
                      download(file);
                    }}
                  >
                    Download
                  </Button>
                </td>
                <td>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => {
                      destroy(file);
                    }}
                  >
                    X
                  </Button>
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
        size="sm"
        variant="warning"
        onClick={() => {
          Router.push("/file/new");
        }}
      >
        Add File
      </Button>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(null, ctx);
  const { limit, offset } = ctx.query;
  const { files, total } = await execApi("get", `/files`, { limit, offset });
  return { files, total };
};
