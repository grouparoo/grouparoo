import Head from "next/head";
import { Fragment, useState } from "react";
import { useApi } from "../hooks/useApi";
import { useOffset, updateURLParams } from "../hooks/URLParams";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button, Form, Alert } from "react-bootstrap";
import LoadingButton from "../components/loadingButton";
import Moment from "react-moment";
import Pagination from "../components/pagination";
import LoadingTable from "../components/loadingTable";
import StateBadge from "../components/badges/stateBadge";
import { Models, Actions } from "../utils/apiData";
import { ErrorHandler } from "../utils/errorHandler";

export default function Page(props) {
  const {
    errorHandler,
    sources,
  }: { errorHandler: ErrorHandler; sources: Models.SourceType[] } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [newRuleLoading, setNewRuleLoading] = useState(false);
  const [examples, setExamples] = useState(props.examples);
  const [newRuleSourceGuid, setNewRuleSourceGuid] = useState(
    props.sources[0]?.guid || ""
  );
  const [properties, setProperties] = useState<Models.PropertyType[]>(
    props.properties
  );

  // pagination
  const limit = 1000;
  const { offset, setOffset } = useOffset();
  const [total, setTotal] = useState(props.total);

  useSecondaryEffect(() => {
    updateURLParams(router, { offset });
    loadSources();
    loadProperties();
  }, [offset, limit]);

  async function loadProperties() {
    setLoading(true);
    const response: Actions.PropertiesList = await execApi(
      "get",
      `/properties`,
      {
        limit: limit * (total === 0 ? 1 : total),
        offset: 0,
      }
    );
    setLoading(false);
    if (response?.properties) {
      setExamples(response.examples);
    }
  }

  async function loadSources() {
    setLoading(true);
    const response: Actions.PropertiesList = await execApi(
      "get",
      `/properties`,
      {
        limit,
        offset,
      }
    );
    setLoading(false);
    if (response?.properties) {
      setProperties(response.properties);
      setTotal(response.total);
    }
  }

  async function createNewProperty(event) {
    event.preventDefault();
    setNewRuleLoading(true);
    const response: Actions.PropertyCreate = await execApi(
      "post",
      `/property`,
      {
        sourceGuid: newRuleSourceGuid,
        type: "string",
      }
    );
    if (response?.property?.guid) {
      router.push(
        `/property/${response.property.guid}/edit?nextPage=/properties`
      );
    } else {
      setNewRuleLoading(false);
    }
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
        <title>Grouparoo: Properties</title>
      </Head>

      <h1>Properties</h1>

      <p>{total} Properties</p>

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
          {properties.map((rule) => {
            const source = sources.find((s) => s.guid === rule.sourceGuid);
            return (
              <tr key={`property-${rule.guid}`}>
                <td>
                  <Link
                    href="/property/[guid]/edit"
                    as={`/property/${rule.guid}/edit`}
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
                    as={`/source/${source.guid}/overview`}
                  >
                    <a>{source.name}</a>
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
        <Form inline onSubmit={createNewProperty}>
          <p>
            Add new Property for source{" "}
            <Form.Control
              as="select"
              size="sm"
              value={newRuleSourceGuid}
              disabled={loading}
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
            <LoadingButton
              type="submit"
              size="sm"
              disabled={newRuleLoading}
              variant="primary"
            >
              Create
            </LoadingButton>
          </p>
        </Form>
      ) : null}
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { limit, offset } = ctx.query;
  const { properties, total, examples } = await execApi("get", `/properties`, {
    limit,
    offset,
  });
  const { sources } = await execApi("get", "/sources", { state: "ready" });
  return { properties, total, examples, sources };
};
