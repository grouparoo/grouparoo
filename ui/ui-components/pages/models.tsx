import { useState } from "react";
import { UseApi } from "../hooks/useApi";
import { useOffset, updateURLParams } from "../hooks/URLParams";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import Head from "next/head";
import { useRouter } from "next/router";
import Pagination from "../components/Pagination";
import LoadingTable from "../components/LoadingTable";
import ModelIcon from "../components/ModelIcon";
import { Models, Actions } from "../utils/apiData";
import { formatTimestamp } from "../utils/formatTimestamp";
import { ErrorHandler } from "../utils/errorHandler";
import GrouparooLink from "../components/GrouparooLink";
import StateBadge from "../components/badges/StateBadge";
import LinkButton from "../components/LinkButton";

export default function Page(props) {
  const { errorHandler }: { errorHandler: ErrorHandler } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const [models, setModels] = useState<Models.GrouparooModelType[]>(
    props.models
  );
  const [total, setTotal] = useState<number>(props.total);
  const [loading, setLoading] = useState(false);

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();

  useSecondaryEffect(() => {
    load();
  }, [limit, offset]);

  async function load() {
    updateURLParams(router, { offset });
    setLoading(true);
    const response: Actions.ModelsList = await execApi("get", `/models`, {
      limit,
      offset,
    });
    setLoading(false);
    if (response?.models) {
      setModels(response.models);
      setTotal(response.total);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Models</title>
      </Head>

      <h1>Models</h1>
      <p>{total} models</p>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Type</th>
            <th>State</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model) => {
            return (
              <tr key={`model-${model.id}`}>
                <td>
                  <ModelIcon model={model} />
                </td>
                <td>
                  <GrouparooLink href={`/model/${model.id}/overview`}>
                    <a>
                      <strong>{model.name}</strong>
                    </a>
                  </GrouparooLink>
                </td>
                <td>{model.type}</td>
                <td>
                  <StateBadge state={model.state} />
                </td>
                <td>{formatTimestamp(model.createdAt)}</td>
                <td>{formatTimestamp(model.updatedAt)}</td>
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

      <br />

      <LinkButton variant="primary" hideOn={["community"]} href="/model/new">
        Add Model
      </LinkButton>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { limit, offset } = ctx.query;
  const { models, total } = await execApi("get", `/models`, { limit, offset });
  return { models, total };
};
