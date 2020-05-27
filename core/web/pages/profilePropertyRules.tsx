import Head from "next/head";
import { Fragment, useState } from "react";
import { useApi } from "../hooks/useApi";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import { useHistoryPagination } from "../hooks/useHistoryPagination";
import Router from "next/router";
import Link from "next/link";
import Moment from "react-moment";
import Pagination from "../components/pagination";
import LoadingTable from "../components/loadingTable";
import StateBadge from "../components/stateBadge";
import ProfilePropertyRuleAddButton from "../components/profilePropertyRule/add";

export default function Page(props) {
  const { errorHandler, successHandler, query } = props;
  const { execApi } = useApi(errorHandler);
  const [loading, setLoading] = useState(false);
  const [examples, setExamples] = useState(props.examples);
  const [sources, setSources] = useState(props.sources);

  // pagination
  const limit = 100;
  const [offset, setOffset] = useState(query.offset || 0);
  const [total, setTotal] = useState(props.total);
  useHistoryPagination(offset, "offset", setOffset);

  useSecondaryEffect(() => {
    updateURLParams();
    loadSources();
    loadProfilePropertyRules();
  }, [offset, limit]);

  async function loadProfilePropertyRules() {
    setLoading(true);
    const response = await execApi("get", `/profilePropertyRules`, {
      limit: limit * (total === 0 ? 1 : total),
      offset: 0,
    });
    setLoading(false);
    if (response?.profilePropertyRules) {
      setExamples(response.examples);
    }
  }

  async function loadSources() {
    setLoading(true);
    const response = await execApi("get", `/sources`, {
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
      <Head>
        <title>Grouparoo: Profile Property Rules</title>
      </Head>

      <h1>Profile Property Rules</h1>

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
              <Link
                href="/source/[guid]/overview"
                as={`/source/${source.guid}/overview`}
              >
                <a>{source.name}</a>
              </Link>
            </h4>
            <strong>Type</strong>: {source.type}
            <br />
            <strong>App</strong>: {source.app.name} ({source.app.type})
            <p style={{ marginTop: 10 }}>
              <ProfilePropertyRuleAddButton
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
                          href="/profilePropertyRule/[guid]/edit"
                          as={`/profilePropertyRule/${rule.guid}/edit`}
                        >
                          <a>
                            <strong>
                              {rule.key ||
                                `${rule.state} created on ${
                                  new Date(rule.createdAt)
                                    .toLocaleString()
                                    .split(",")[0]
                                }`}
                            </strong>
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

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(null, ctx);
  const { limit, offset } = ctx.query;
  const { sources, total } = await execApi("get", `/sources`, {
    limit,
    offset,
    state: "ready",
  });
  const { examples } = await execApi("get", `/profilePropertyRules`, {
    limit: 100 * (total === 0 ? 1 : total),
    offset: 0,
  });
  return { sources, total, examples };
};
