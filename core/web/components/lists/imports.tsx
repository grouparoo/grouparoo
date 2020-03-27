import { Fragment, useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useHistoryPagination } from "../../hooks/useHistoryPagination";
import Link from "next/link";
import Router from "next/router";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";
import { Alert } from "react-bootstrap";
import Moment from "react-moment";

export default function ({ apiVersion, errorHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [imports, setImports] = useState([]);
  const [total, setTotal] = useState(0);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  const [creatorGuid, setCreatorGuid] = useState(query.creatorGuid || null);
  useHistoryPagination(offset, "offset", setOffset);

  useEffect(() => {
    load();
  }, [offset, limit, creatorGuid]);

  async function load() {
    updateURLParams();
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/imports`, {
      limit,
      offset,
      creatorGuid,
    });
    setLoading(false);
    if (response?.imports) {
      setImports(response.imports);
      setTotal(response.total);
    }
  }

  async function updateURLParams() {
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
      <p>
        {total} imports {creatorGuid ? `for ${creatorGuid}` : null}
      </p>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>Guids</th>
            <th>Times</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {imports.map((_import) => {
            return (
              <Fragment key={`import-${_import.guid}`}>
                <tr>
                  <td>
                    <span className="text-info">
                      Guid:
                      <Link
                        href="/import/[guid]"
                        as={`/import/${_import.guid}`}
                      >
                        <a> {_import.guid}</a>
                      </Link>
                    </span>
                    <br /> Profile:{" "}
                    {_import.profileGuid ? (
                      <Link
                        href="/profile/[guid]"
                        as={`/profile/${_import.profileGuid}`}
                      >
                        <a>{_import.profileGuid}</a>
                      </Link>
                    ) : (
                      "none"
                    )}
                    <br />
                    Creator:{" "}
                    {_import.creatorType === "run" ? (
                      <Link
                        href="/imports/[creatorGuid]"
                        as={`/imports/${_import.creatorGuid}`}
                      >
                        <a>{_import.creatorGuid}</a>
                      </Link>
                    ) : (
                      _import.creatorGuid
                    )}
                  </td>
                  <td>
                    Created: <Moment fromNow>{_import.createdAt}</Moment>
                    <br /> Profile Associated:{" "}
                    {_import.profileAssociatedAt ? (
                      <Moment fromNow>{_import.profileAssociatedAt}</Moment>
                    ) : (
                      <span>x</span>
                    )}
                    <br /> Profile Updated:{" "}
                    {_import.profileUpdatedAt ? (
                      <Moment fromNow>{_import.profileUpdatedAt}</Moment>
                    ) : (
                      <span>x</span>
                    )}
                    <br /> Groups Updated:{" "}
                    {_import.groupsUpdatedAt ? (
                      <Moment fromNow>{_import.groupsUpdatedAt}</Moment>
                    ) : (
                      <span>x</span>
                    )}
                    <br /> Exported:{" "}
                    {_import.exportedAt ? (
                      <Moment fromNow>{_import.exportedAt}</Moment>
                    ) : (
                      <span>x</span>
                    )}
                  </td>
                  <td>
                    {Object.keys(_import.data).map((k) => (
                      <li key={`import-${_import.guid}-${k}`}>
                        {k}: {_import.data[k].toString()}
                      </li>
                    ))}
                  </td>
                </tr>

                {_import.errorMessage ? (
                  <tr>
                    <td colSpan={7} style={{ border: 0 }}>
                      <Alert variant="warning">
                        {_import.errorMessage}
                        {_import.errorMetadata ? (
                          <EventErrorMetadata import={_import} />
                        ) : null}
                      </Alert>
                    </td>
                  </tr>
                ) : null}
              </Fragment>
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
    </>
  );
}

function EventErrorMetadata({ import: _import }) {
  const data = JSON.parse(_import.errorMetadata);

  return (
    <>
      <br />
      <br />
      <p>
        step: <code>{data.step}</code>
      </p>
    </>
  );
}
