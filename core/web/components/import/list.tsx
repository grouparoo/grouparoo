import { Fragment, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { useOffset, updateURLParams } from "../../hooks/URLParams";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import Link from "next/link";
import { useRouter } from "next/router";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";
import { Alert } from "react-bootstrap";
import Moment from "react-moment";
import { Models, Actions } from "../../utils/apiData";
import { ErrorHandler } from "../../utils/errorHandler";
import { ImportProfilePropertiesDiff, ImportGroupsDiff } from "./diff";

export default function ImportList(props) {
  const {
    errorHandler,
    groups,
  }: { errorHandler: ErrorHandler; groups: Models.GroupType[] } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [imports, setImports] = useState<Models.ImportType[]>(props.imports);
  const [total, setTotal] = useState(props.total);

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();

  let profileGuid: string;
  let creatorGuid: string;
  if (router.query.guid) {
    if (router.pathname.match("/profile/")) {
      profileGuid = router.query.guid.toString();
    } else {
      creatorGuid = router.query.guid.toString();
    }
  }

  useSecondaryEffect(() => {
    load();
  }, [offset, limit]);

  async function load() {
    updateURLParams(router, { offset });
    setLoading(true);

    const response: Actions.ImportsList = await execApi("get", `/imports`, {
      limit,
      offset,
      creatorGuid,
      profileGuid,
    });
    setLoading(false);
    if (response?.imports) {
      setImports(response.imports);
      setTotal(response.total);
    }
  }

  return (
    <>
      {props.header ? props.header : <h1>Imports</h1>}

      <p>
        {total} imports {creatorGuid ? `for ${creatorGuid}` : null}{" "}
        {profileGuid ? `for profile ${profileGuid}` : null}
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
            <th>Profile Properties</th>
            <th>Groups</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {imports.map((_import) => {
            return (
              <Fragment key={`import-${_import.guid}`}>
                <tr>
                  <td>
                    Guid:
                    <Link
                      href="/import/[guid]/edit"
                      as={`/import/${_import.guid}/edit`}
                    >
                      <a> {_import.guid}</a>
                    </Link>
                    <br /> Profile:{" "}
                    {_import.profileGuid ? (
                      <Link
                        href="/profile/[guid]/edit"
                        as={`/profile/${_import.profileGuid}/edit`}
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
                        href="/run/[guid]/edit"
                        as={`/run/${_import.creatorGuid}/edit`}
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
                  </td>
                  <td>
                    <ImportProfilePropertiesDiff _import={_import} />
                  </td>
                  <td>
                    <ImportGroupsDiff _import={_import} groups={groups} />
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

ImportList.hydrate = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { guid, limit, offset } = ctx.query;

  let profileGuid: string;
  let creatorGuid: string;
  if (guid) {
    if (ctx.pathname.match("/profile/")) {
      profileGuid = guid;
    } else {
      creatorGuid = guid;
    }
  }
  const { imports, total } = await execApi("get", `/imports`, {
    limit,
    offset,
    creatorGuid,
    profileGuid,
  });

  const { groups } = await execApi("get", `/groups`);
  return { groups, imports, total };
};

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
