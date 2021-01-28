import Head from "next/head";
import { useState } from "react";
import { useApi } from "@grouparoo/ui-components/hooks/useApi";
import {
  useOffset,
  updateURLParams,
} from "@grouparoo/ui-components/hooks/URLParams";
import { useSecondaryEffect } from "@grouparoo/ui-components/hooks/useSecondaryEffect";
import Link from "next/link";
import { useRouter } from "next/router";
import Pagination from "@grouparoo/ui-components/components/pagination";
import LoadingTable from "@grouparoo/ui-components/components/loadingTable";
import Moment from "react-moment";
import AppIcon from "@grouparoo/ui-components/components/appIcon";
import StateBadge from "@grouparoo/ui-components/components/badges/stateBadge";
import { Models, Actions } from "@grouparoo/ui-components/utils/apiData";
import { Button } from "react-bootstrap";

export default function Page(props) {
  const { errorHandler } = props;
  const router = useRouter();
  const { execApi } = useApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [sources, setSources] = useState<Models.SourceType[]>(props.sources);
  const [total, setTotal] = useState(props.total);

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();

  useSecondaryEffect(() => {
    load();
  }, [offset, limit]);

  async function load() {
    updateURLParams(router, { offset });
    setLoading(true);
    const response: Actions.SourcesList = await execApi("get", `/sources`, {
      limit,
      offset,
    });
    setLoading(false);
    if (response?.sources) {
      setSources(response.sources);
      setTotal(response.total);

      if (response.total === 0) {
        router.push("/source/new");
      }
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Sources</title>
      </Head>

      <h1>Sources</h1>

      <p>{total} sources</p>

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
            <th>App</th>
            <th>State</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {sources.map((source) => {
            return (
              <tr key={`source-${source.guid}`}>
                <td>
                  <AppIcon src={source.app?.icon} />
                </td>
                <td>
                  <Link
                    href="/source/[guid]/overview"
                    as={`/source/${source.guid}/overview`}
                  >
                    <a>
                      <strong>
                        {source.name ||
                          `${source.state} created on ${
                            new Date(source.createdAt)
                              .toLocaleString()
                              .split(",")[0]
                          }`}
                      </strong>
                    </a>
                  </Link>
                </td>
                <td>{source.type}</td>
                <td>
                  <Link
                    href="/app/[guid]/edit"
                    as={`/app/${source.app.guid}/edit`}
                  >
                    <a>
                      <strong>{source.app.name}</strong>
                    </a>
                  </Link>
                </td>
                <td>
                  <StateBadge state={source.state} />
                </td>
                <td>
                  <Moment fromNow>{source.createdAt}</Moment>
                </td>
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

      <Button
        variant="primary"
        onClick={() => {
          router.push("/source/new");
        }}
      >
        Add new Source
      </Button>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { limit, offset } = ctx.query;
  const { sources, total } = await execApi("get", `/sources`, {
    limit,
    offset,
  });
  return { sources, total };
};
