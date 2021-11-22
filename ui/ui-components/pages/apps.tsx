import { useState } from "react";
import { UseApi } from "../hooks/useApi";
import { useOffset, updateURLParams } from "../hooks/URLParams";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "../components/GrouparooLink";
import Pagination from "../components/Pagination";
import LoadingTable from "../components/LoadingTable";
import AppIcon from "../components/AppIcon";
import StateBadge from "../components/badges/StateBadge";
import { Models, Actions } from "../utils/apiData";
import { formatTimestamp } from "../utils/formatTimestamp";
import { ErrorHandler } from "../utils/errorHandler";
import LinkButton from "../components/LinkButton";
import { formatName } from "../utils/formatName";

export default function Page(props) {
  const { errorHandler }: { errorHandler: ErrorHandler } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const [apps, setApps] = useState<Models.AppType[]>(props.apps);
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
    const response: Actions.AppsList = await execApi("get", `/apps`, {
      limit,
      offset,
    });
    setLoading(false);
    if (response?.apps) {
      setApps(response.apps);
      setTotal(response.total);

      if (response.total === 0) {
        router.push("/app/new");
      }
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Apps</title>
      </Head>

      <h1>Apps</h1>
      <p>{total} apps</p>

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
          {apps.map((app) => {
            return (
              <tr key={`model-${app.id}`}>
                <td>
                  <AppIcon src={app.icon} />
                </td>
                <td>
                  <Link href={`/app/${app.id}/edit`}>
                    <a>
                      <strong>{formatName(app)}</strong>
                    </a>
                  </Link>
                </td>
                <td>{app.pluginApp.displayName}</td>
                <td>
                  <StateBadge state={app.state} />
                </td>
                <td>{formatTimestamp(app.createdAt)}</td>
                <td>{formatTimestamp(app.updatedAt)}</td>
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

      <LinkButton variant="primary" href="/app/new" hideOn={["community"]}>
        Add App
      </LinkButton>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { limit, offset } = ctx.query;
  const { apps, total } = await execApi("get", `/apps`, { limit, offset });
  return { apps, total };
};
