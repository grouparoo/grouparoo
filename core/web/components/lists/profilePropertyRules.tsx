import { Fragment, useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import { useHistoryPagination } from "../../hooks/useHistoryPagination";
import Router from "next/router";
import Link from "next/link";
import Moment from "react-moment";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";
import StateBadge from "../stateBadge";
import ProfilePropertyRuleAddButton from "./../forms/profilePropertyRule/add";

export default function ({ apiVersion, errorHandler, successHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [examples, setExamples] = useState({});
  const [sources, setSources] = useState([]);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  const [total, setTotal] = useState(0);
  useHistoryPagination(offset, "offset", setOffset);

  useEffect(() => {
    updateURLParams();
    loadSources();
    loadProfilePropertyRules();
  }, [offset, limit]);

  async function loadProfilePropertyRules() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/profilePropertyRules`,
      {
        limit: limit * (total === 0 ? 1 : total),
        offset: 0,
      }
    );
    setLoading(false);
    if (response?.profilePropertyRules) {
      setExamples(response.examples);
    }
  }

  async function loadSources() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/sources`, {
      limit,
      offset,
      state: "ready",
    });
    setLoading(false);
    if (response?.sources) {
      setSources(response.sources);
      setTotal(response.total);
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
      <p>{total} profile property rules</p>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      {sources.map((source) => {
        return (
          <div key={`src-${source.guid}`}>
            <h4>
              <Link href="/source/[guid]" as={`/source/${source.guid}`}>
                <a>{source.name}</a>
              </Link>
            </h4>
            <strong>Type</strong>: {source.type}
            <br />
            <strong>App</strong>: {source.app.name} ({source.app.type})
            <p style={{ marginTop: 10 }}>
              <ProfilePropertyRuleAddButton
                apiVersion={apiVersion}
                errorHandler={errorHandler}
                successHandler={successHandler}
                source={source}
              />
            </p>
            <LoadingTable loading={loading}>
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Type</th>
                  <th>Unique</th>
                  <th>State</th>
                  <th>Updated At</th>
                  <th>Example Values</th>
                </tr>
              </thead>
              <tbody>
                {source.profilePropertyRules.map((rule) => {
                  return (
                    <tr key={`profilePropertyRule-${rule.guid}`}>
                      <td>
                        <Link
                          href="/profilePropertyRule/[guid]"
                          as={`/profilePropertyRule/${rule.guid}`}
                        >
                          <a>
                            <strong>{rule.key}</strong>
                          </a>
                        </Link>
                      </td>
                      <td>{rule.type}</td>
                      <td>
                        <input readOnly type="checkbox" checked={rule.unique} />
                      </td>
                      <td>
                        <StateBadge state={rule.state} />
                      </td>
                      <td>
                        <Moment fromNow>{rule.updatedAt}</Moment>
                      </td>
                      <td>
                        <em>
                          {examples[rule.guid]
                            ? examples[rule.guid].slice(0, 3).map((ex, idx) => (
                                <Fragment key={`${rule.guid}-${idx}`}>
                                  {ex}
                                  <br />
                                </Fragment>
                              ))
                            : null}
                        </em>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </LoadingTable>
            <br />
          </div>
        );
      })}

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />
    </>
  );
}
