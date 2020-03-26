import { Fragment, useState, useEffect } from "react";
import { useApi } from "../../hooks/useApi";
import Router from "next/router";
import Link from "next/link";
import Moment from "react-moment";
import Pagination from "../pagination";
import LoadingTable from "../loadingTable";

export default function ({ apiVersion, errorHandler, query }) {
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [profilePropertyRules, setProfilePropertyRules] = useState([]);
  const [examples, setExamples] = useState({});
  const [sources, setSources] = useState([]);

  // pagination
  const limit = 1000;
  const [offset, setOffset] = useState(query.offset || 0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    updateURLParams();
    loadSources();
    loadProfilePropertyRules();
  }, [offset, limit]);

  async function loadProfilePropertyRules() {
    setLoading(true);
    const response = await execApi(
      "get",
      `/api/${apiVersion}/profilePropertyRules`
    );
    setLoading(false);
    if (response?.profilePropertyRules) {
      setProfilePropertyRules(response.profilePropertyRules);
      setExamples(response.examples);
      setTotal(response.total);
    }
  }

  async function loadSources() {
    setLoading(true);
    const response = await execApi("get", `/api/${apiVersion}/sources`);
    setLoading(false);
    if (response?.sources) {
      setSources(response.sources);
    }
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    if (offset && offset !== 0) {
      url += `offset=${offset}&`;
    }

    Router.push(Router.route, url, { shallow: true });
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
            type: {source.type}
            <br />
            app: {source.app.name} ({source.app.type})
            <LoadingTable loading={loading}>
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Type</th>
                  <th>Unique</th>
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
