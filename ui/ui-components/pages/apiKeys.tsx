import Head from "next/head";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { useApi } from "../hooks/useApi";
import { useOffset, updateURLParams } from "../hooks/URLParams";
import { useState } from "react";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import Link from "../components/enterpriseLink";
import Pagination from "../components/pagination";
import LoadingTable from "../components/loadingTable";
import { Models, Actions } from "../utils/apiData";
import { formatTimestamp } from "../utils/formatTimestamp";
import { ErrorHandler } from "../utils/errorHandler";

export default function Page(props) {
  const { errorHandler }: { errorHandler: ErrorHandler } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
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
    const response: Actions.ApiKeysList = await execApi("get", `/apiKeys`, {
      limit,
      offset,
    });
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
                  <Link
                    href="/apiKey/[id]/edit"
                    as={`/apiKey/${apiKey.id}/edit`}
                  >
                    <a>
                      <strong>{apiKey.name}</strong>
                    </a>
                  </Link>
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

      {process.env.GROUPAROO_UI_EDITION === "enterprise" ? (
        <Button
          variant="primary"
          onClick={() => {
            router.push("/apiKey/new");
          }}
        >
          Add API Key
        </Button>
      ) : null}
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { limit, offset } = ctx.query;
  const { apiKeys, total }: Actions.ApiKeysList = await execApi(
    "get",
    `/apiKeys`,
    {
      limit,
      offset,
    }
  );
  return { apiKeys, total };
};
