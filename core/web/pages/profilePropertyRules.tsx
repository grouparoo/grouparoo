import Head from "next/head";
import { Fragment, useState } from "react";
import { useApi } from "../hooks/useApi";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import { useHistoryPagination } from "../hooks/useHistoryPagination";
import Router from "next/router";
import Link from "next/link";
import { Button, Form, Alert } from "react-bootstrap";
import Moment from "react-moment";
import Pagination from "../components/pagination";
import LoadingTable from "../components/loadingTable";
import StateBadge from "../components/stateBadge";

import { ProfilePropertyRuleAPIData } from "../utils/apiData";

export default function Page(props) {
  const { errorHandler, successHandler, query } = props;
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [newRuleLoading, setNewRuleLoading] = useState(false);
  const [examples, setExamples] = useState(props.examples);
  const [sources, setSources] = useState(props.sources);
  const [newRuleSourceGuid, setNewRuleSourceGuid] = useState(
    props.sources[0]?.guid || ""
  );
  const [profilePropertyRules, setProfilePropertyRules] = useState<
    ProfilePropertyRuleAPIData[]
  >(props.profilePropertyRules);

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
    const response = await execApi("get", `/profilePropertyRules`, {
      limit,
      offset,
    });
    setLoading(false);
    if (response?.profilePropertyRules) {
      setProfilePropertyRules(response.profilePropertyRules);
      setTotal(response.total);
    }
  }

  async function createNewProfilePropertyRule(event) {
    event.preventDefault();
    setNewRuleLoading(true);
    const response = await execApi("post", `/profilePropertyRule`, {
      sourceGuid: newRuleSourceGuid,
      type: "string",
    });
    setNewRuleLoading(false);
    if (response?.profilePropertyRule?.guid) {
      Router.push(
        `/profilePropertyRule/${response.profilePropertyRule.guid}/edit`
      );
    }
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    if (offset && offset !== 0) url += `offset=${offset}&`;

    const routerMethod =
      url === `${window.location.pathname}?` ? "replace" : "push";
    Router[routerMethod](Router.route, url, { shallow: true });
  }

  if (sources.length === 0) {
    return (
      <>
        <Alert variant="primary">
          There are no Sources yet.
          <br />
          <br />
          <Button size="sm" href="/sources">
            Add Source
          </Button>
        </Alert>
      </>
    );
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

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>Key</th>
            <th>Type</th>
            <th>Unique</th>
            <th>Is Array</th>
            <th>Source</th>
            <th>State</th>
            <th>Example Values</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {profilePropertyRules.map((rule) => {
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
                <td>{rule.unique ? "✅" : null}</td>
                <td>{rule.isArray ? "✅" : null}</td>
                <td>
                  <Link
                    href="/source/[guid]/overview"
                    as={`/source/${rule.source.guid}/overview`}
                  >
                    <a>{rule.source.name}</a>
                  </Link>
                </td>
                <td>
                  <StateBadge state={rule.state} />
                </td>
                <td>
                  <em>
                    {examples[rule.guid]
                      ? examples[rule.guid].slice(0, 3).map((ex, idx) => (
                          <Fragment key={`${rule.guid}-${idx}`}>
                            {rule.type === "date"
                              ? new Date(parseInt(ex)).toLocaleString()
                              : ex}
                            <br />
                          </Fragment>
                        ))
                      : null}
                  </em>
                </td>
                <td>
                  <Moment fromNow>{rule.updatedAt}</Moment>
                </td>
              </tr>
            );
          })}
        </tbody>
      </LoadingTable>
      <br />

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      <hr />

      {sources.length > 0 ? (
        <Form inline onSubmit={createNewProfilePropertyRule}>
          <p>
            Add new Profile Property Rule for source{" "}
            <Form.Control
              as="select"
              size="sm"
              value={newRuleSourceGuid}
              onChange={(e) => {
                setNewRuleSourceGuid(e.target.value);
              }}
            >
              {sources.map((source) => (
                <option key={`opt-source-${source.guid}`} value={source.guid}>
                  {source.name}
                </option>
              ))}
            </Form.Control>{" "}
            <Button
              type="submit"
              size="sm"
              disabled={newRuleLoading}
              variant="primary"
            >
              Create
            </Button>
          </p>
        </Form>
      ) : null}
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { limit, offset } = ctx.query;
  const { profilePropertyRules, total, examples } = await execApi(
    "get",
    `/profilePropertyRules`,
    {
      limit,
      offset,
    }
  );
  const { sources } = await execApi("get", "/sources", { state: "ready" });
  return { profilePropertyRules, total, examples, sources };
};
