import Head from "next/head";
import { Fragment, useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { useHistoryPagination } from "../../../hooks/useHistoryPagination";
import { useSecondaryEffect } from "../../../hooks/useSecondaryEffect";
import Link from "next/link";
import Router from "next/router";
import Pagination from "../../../components/pagination";
import LoadingTable from "../../../components/loadingTable";
import { Alert, Badge } from "react-bootstrap";
import Moment from "react-moment";
import getProfileDisplayName from "../../../components/profile/getProfileDisplayName";
import ProfileTabs from "../../../components/tabs/profile";

import { ImportAPIData } from "../../../utils/apiData";

export default function Page(props) {
  const { query, errorHandler, profile, groups } = props;
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [imports, setImports] = useState<ImportAPIData[]>(props.imports);
  const [total, setTotal] = useState(props.total);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  useHistoryPagination(offset, "offset", setOffset);

  useSecondaryEffect(() => {
    load();
  }, [offset, limit]);

  async function load() {
    updateURLParams();
    setLoading(true);

    const response = await execApi("get", `/imports`, {
      limit,
      offset,
      profileGuid: query.guid,
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

  function groupLink(groupGuid) {
    const group = groups.filter((g) => g.guid === groupGuid)[0];

    if (group) {
      return (
        <Link href="/group/[guid]" as={`/group/${group.guid}`}>
          <a>{group.name}</a>
        </Link>
      );
    } else {
      return <span>{group.name}</span>;
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {getProfileDisplayName(profile)}</title>
      </Head>

      <ProfileTabs name={getProfileDisplayName(profile)} />

      <h1>Imports</h1>

      <p>
        {total} imports {query.creatorGuid ? `for ${query.creatorGuid}` : null}
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
                    <span className="text-info">
                      Guid:
                      <Link
                        href="/import/[guid]/edit"
                        as={`/import/${_import.guid}/edit`}
                      >
                        <a> {_import.guid}</a>
                      </Link>
                    </span>
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
                        href="/run/[creatorGuid]"
                        as={`/run/${_import.creatorGuid}`}
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
                    <ul>
                      {Object.keys(_import.oldProfileProperties).map((k) => {
                        return (
                          <li key={`${_import.guid}-prp-${k}`}>
                            {k}:{" "}
                            {_import.oldProfileProperties[k] !==
                            _import.newProfileProperties[k] ? (
                              <>
                                <Badge variant="danger">
                                  {_import.oldProfileProperties[k]?.toString()}
                                </Badge>
                                |
                                <Badge variant="success">
                                  {_import.newProfileProperties[k]?.toString()}
                                </Badge>
                              </>
                            ) : (
                              <Badge variant="light">
                                {_import.oldProfileProperties[k]?.toString()}
                              </Badge>
                            )}
                          </li>
                        );
                      })}

                      {Object.keys(_import.newProfileProperties).map((k) =>
                        _import.oldProfileProperties[k] === undefined ? (
                          <li key={`${_import.guid}-prp-${k}`}>
                            {k}:{" "}
                            <Badge variant="success">
                              {_import.newProfileProperties[k]?.toString()}
                            </Badge>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {_import.oldGroupGuids.map((g) => {
                        return (
                          <li key={`${_import.guid}-grp-${g}`}>
                            <Badge
                              variant={
                                !_import.newGroupGuids.includes(g)
                                  ? "danger"
                                  : "light"
                              }
                            >
                              {groupLink(g)}
                            </Badge>
                          </li>
                        );
                      })}

                      {_import.newGroupGuids.map((g) =>
                        !_import.oldGroupGuids.includes(g) ? (
                          <li key={`${_import.guid}-grp-${g}`}>
                            <Badge variant="success">{groupLink(g)}</Badge>
                          </li>
                        ) : null
                      )}
                    </ul>
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

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(null, ctx?.req?.headers?.cookie);
  const { limit, offset, creatorGuid, guid } = ctx.query;
  const { profile } = await execApi("get", `/profile/${guid}`);
  const { imports, total } = await execApi("get", `/imports`, {
    limit,
    offset,
    creatorGuid,
    profileGuid: guid,
  });
  const { groups } = await execApi("get", `/groups`);
  return { profile, groups, imports, total };
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
