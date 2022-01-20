import { useApi } from "../contexts/api";
import { useState } from "react";
import { useOffset, updateURLParams } from "../hooks/URLParams";
import { useSecondaryEffect } from "../hooks/useSecondaryEffect";
import { useCallback } from "react";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "../components/GrouparooLink";
import Pagination from "../components/Pagination";
import LoadingTable from "../components/LoadingTable";
import AppIcon from "../components/AppIcon";
import StateBadge from "../components/badges/StateBadge";
import { Models, Actions } from "../utils/apiData";
import { formatTimestamp } from "../utils/formatTimestamp";
import LinkButton from "../components/LinkButton";
import LoadingButton from "../components/LoadingButton";
import { grouparooUiEdition } from "../utils/uiEdition";
import { formatName } from "../utils/formatName";
import { NextPageWithInferredProps } from "../utils/pageHelper";
import { successHandler } from "../eventHandlers";
import { generateClient } from "../client/client";

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const client = generateClient(ctx);
  const { limit, offset } = ctx.query;
  const { apps, total } = await client.request<Actions.AppsList>(
    "get",
    `/apps`,
    {
      limit,
      offset,
    }
  );
  return { props: { apps, total } };
};

const Page: NextPageWithInferredProps<typeof getServerSideProps> = ({
  ...props
}) => {
  const router = useRouter();
  const { client } = useApi();
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
    const response: Actions.AppsList = await client.request("get", `/apps`, {
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

  const runRefreshQuery = useCallback(
    async (app: typeof apps[number]) => {
      setLoading(true);
      const appRefreshQuery = app.appRefreshQuery;
      try {
        const response: Actions.AppRefreshQueryRun = await client.request(
          "post",
          `/appRefreshQuery/${appRefreshQuery.id}/run`
        );
        if (response?.valueUpdated == true) {
          successHandler.set({
            message: `Query returned ${response.appRefreshQuery.value}. Enqueueing Schedules.`,
          });
        } else {
          successHandler.set({
            message: `Query returned ${response.appRefreshQuery.value}. No schedules enqueued.`,
          });
        }
        const { apps }: Actions.AppsList = await client.request("get", `/apps`);
        setApps(apps);
      } finally {
        setLoading(false);
      }
    },
    [client]
  );

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
            <th>Refresh</th>
          </tr>
        </thead>
        <tbody>
          {apps.map((app) => {
            const recurringFrequencyMinutes =
              Math.round(
                app.appRefreshQuery?.recurringFrequency / (60 * 1000)
              ) || null;
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
                <td>
                  {app.appRefreshQuery ? (
                    <>
                      Query: {app.appRefreshQuery.refreshQuery}
                      <br />
                      {grouparooUiEdition() !== "config" && (
                        <>
                          Value: {app.appRefreshQuery.value}
                          <br />
                          Last Checked:{" "}
                          {formatTimestamp(app.appRefreshQuery.lastConfirmedAt)}
                          <br />
                        </>
                      )}
                      Frequency: Every{" "}
                      {recurringFrequencyMinutes > 1 &&
                        recurringFrequencyMinutes}{" "}
                      Minute{recurringFrequencyMinutes > 1 && "s"}
                      <br />
                      {grouparooUiEdition() !== "config" && (
                        <LoadingButton
                          variant="outline-success"
                          size="sm"
                          loading={loading}
                          onClick={() => runRefreshQuery(app)}
                        >
                          Run Now
                        </LoadingButton>
                      )}
                    </>
                  ) : (
                    "No Refresh"
                  )}
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

      <LinkButton variant="primary" href="/app/new" hideOn={["community"]}>
        Add App
      </LinkButton>
    </>
  );
};

export default Page;
