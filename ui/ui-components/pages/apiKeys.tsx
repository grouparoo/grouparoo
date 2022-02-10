import { useApi } from "../contexts/api";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useOffset, updateURLParams } from "../hooks/URLParams";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import GrouparooLink from "../components/GrouparooLink";
import Pagination from "../components/Pagination";
import LoadingTable from "../components/LoadingTable";
import { Models, Actions } from "../utils/apiData";
import { formatTimestamp } from "../utils/formatTimestamp";
import LinkButton from "../components/LinkButton";
import { generateClient } from "../client/client";
import { NextPageWithInferredProps } from "../utils/pageHelper";
import { withServerErrorHandler } from "../utils/withServerErrorHandler";

export const getServerSideProps = withServerErrorHandler(async (ctx) => {
  const client = generateClient(ctx);
  const { limit, offset } = ctx.query;
  const { apiKeys, total }: Actions.ApiKeysList = await client.request(
    "get",
    `/apiKeys`,
    {
      limit,
      offset,
    }
  );
  return { props: { apiKeys, total } };
});

const Page: NextPageWithInferredProps<typeof getServerSideProps> = (props) => {
  const router = useRouter();
  const { client } = useApi();
  const [apiKeys, setApiKeys] = useState<Models.ApiKeyType[]>(props.apiKeys);
  const [total, setTotal] = useState(props.total);
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
    const response: Actions.ApiKeysList = await client.request(
      "get",
      `/apiKeys`,
      {
        limit,
        offset,
      }
    );
    setLoading(false);
    if (response?.apiKeys) {
      setApiKeys(response.apiKeys);
      setTotal(response.total);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: API Keys</title>
      </Head>

      <h1>API Keys</h1>

      <p>{total} Api Keys</p>

      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />

      <LoadingTable loading={loading}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Key</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {apiKeys.map((apiKey) => {
            return (
              <tr key={`apiKey-${apiKey.id}`}>
                <td>
                  <GrouparooLink href={`/apiKey/${apiKey.id}/edit`}>
                    <a>
                      <strong>{apiKey.name}</strong>
                    </a>
                  </GrouparooLink>
                </td>
                <td>
                  <code>{apiKey.apiKey}</code>
                </td>
                <td>{formatTimestamp(apiKey.createdAt)}</td>
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

      <LinkButton
        variant="primary"
        href="/apiKey/new"
        displayOn={["enterprise"]}
      >
        Add API Key
      </LinkButton>
    </>
  );
};

export default Page;
