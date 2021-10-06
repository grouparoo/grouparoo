import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { NextPageContext } from "next";
import { Button, Alert } from "react-bootstrap";

import { UseApi } from "../../../hooks/useApi";
import { useOffset, updateURLParams } from "../../../hooks/URLParams";
import { useSecondaryEffect } from "../../../hooks/useSecondaryEffect";
import Link from "../../../components/enterpriseLink";
import Pagination from "../../../components/pagination";
import LoadingTable from "../../../components/loadingTable";
import StateBadge from "../../../components/badges/stateBadge";
import { Models, Actions } from "../../../utils/apiData";
import { ErrorHandler } from "../../../utils/errorHandler";
import { formatTimestamp } from "../../../utils/formatTimestamp";

export default function Page(props) {
  const {
    errorHandler,
    sources,
  }: {
    errorHandler: ErrorHandler;
    sources: Models.SourceType[];
  } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [examples, setExamples] = useState(props.examples);
  const { modelId } = router.query;

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
  }, [offset, limit, modelId]);

  async function loadProperties() {
    setLoading(true);
    const response: Actions.PropertiesList = await execApi(
      "get",
      `/properties`,
      {
        includeExamples: true,
        limit: limit * (total === 0 ? 1 : total),
        offset: 0,
        modelId,
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
        modelId,
      }
    );
    setLoading(false);
    if (response?.properties) {
      setProperties(response.properties);
      setTotal(response.total);
    }
  }

  if (sources.length === 0) {
    return (
      <>
        <Alert variant="primary">
          There are no Sources yet.
          <br />
          <br />
          <Button size="sm" href={`/model/${router.query.modelId}/sources`}>
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
            const source = sources.find((s) => s.id === rule.sourceId);
            return (
              <tr key={`property-${rule.id}`}>
                <td>
                  <Link
                    href="/model/[modelId]/property/[propertyId]/edit"
                    as={`/model/${source.modelId}/property/${rule.id}/edit`}
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
                    href="/model/[modelId]/source/[sourceId]/overview"
                    as={`/model/${source.modelId}/source/${source.id}/overview`}
                  >
                    <a>{source.name}</a>
                  </Link>
                </td>
                <td>
                  <StateBadge state={rule.state} />
                </td>
                <td>
                  <em>
                    {examples[rule.id]
                      ? examples[rule.id].slice(0, 3).map((ex, idx) => (
                          <Fragment key={`${rule.id}-${idx}`}>
                            {rule.type === "date"
                              ? new Date(parseInt(ex)).toLocaleString()
                              : ex}
                            <br />
                          </Fragment>
                        ))
                      : null}
                  </em>
                </td>
                <td>{formatTimestamp(rule.updatedAt)}</td>
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
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
  const { execApi } = UseApi(ctx);
  const { limit, offset, modelId } = ctx.query;

  const { properties, total, examples } = await execApi("get", `/properties`, {
    includeExamples: true,
    limit,
    offset,
    modelId,
  });
  const { sources } = await execApi("get", "/sources", {
    state: ["ready", "deleted"],
  });
  return { properties, total, examples, sources };
};
