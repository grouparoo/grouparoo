import Head from "next/head";
import { useState, Fragment } from "react";
import { UseApi } from "../../../hooks/useApi";
import { useOffset, updateURLParams } from "../../../hooks/URLParams";
import { useSecondaryEffect } from "../../../hooks/useSecondaryEffect";
import Link from "../../../components/enterpriseLink";
import { useRouter } from "next/router";
import Pagination from "../../../components/pagination";
import LoadingTable from "../../../components/loadingTable";
import AppIcon from "../../../components/appIcon";
import StateBadge from "../../../components/badges/stateBadge";
import { Models, Actions } from "../../../utils/apiData";
import { Button } from "react-bootstrap";
import { formatTimestamp } from "../../../utils/formatTimestamp";
import { SuccessHandler } from "../../../utils/successHandler";
import { ErrorHandler } from "../../../utils/errorHandler";
import ModelBadge from "../../../components/badges/modelBadge";

export default function Page(props) {
  const {
    successHandler,
    errorHandler,
  }: { successHandler: SuccessHandler; errorHandler: ErrorHandler } = props;
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const [loading, setLoading] = useState(false);
  const [sources, setSources] = useState<Models.SourceType[]>(props.sources);
  const [runs, setRuns] = useState<{ [key: string]: Models.RunType }>(
    props.runs
  );
  const [total, setTotal] = useState(props.total);
  const { modelId } = router.query;

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();

  useSecondaryEffect(() => {
    load();
  }, [offset, limit, modelId]);

  async function load() {
    updateURLParams(router, { offset });
    setLoading(true);
    const response: Actions.SourcesList = await execApi("get", `/sources`, {
      limit,
      offset,
      modelId,
    });

    const _runs = {};
    for (const i in sources) {
      _runs[sources[i].id] = await loadRun(sources[i], execApi);
    }

    setLoading(false);
    if (response?.sources) {
      setSources(response.sources);
      setTotal(response.total);
      setRuns(_runs);

      if (response.total === 0) {
        router.push(
          "/model/[modelId]/source/new",
          `/model/${router.query.modelId}/source/new`
        );
      }
    }
  }

  async function enqueueScheduleRun(source: Models.SourceType) {
    setLoading(true);
    try {
      const response: Actions.ScheduleRun = await execApi(
        "post",
        `/schedule/${source.schedule.id}/run`
      );
      successHandler.set({ message: `run ${response.run.id} enqueued` });
    } finally {
      setLoading(false);
      load();
    }
  }

  async function enqueueAllSchedulesRun() {
    setLoading(true);
    try {
      const response: Actions.SchedulesRun = await execApi(
        "post",
        `/schedules/run`
      );
      successHandler.set({ message: `${response.runs.length} runs enqueued` });
    } finally {
      setLoading(false);
      load();
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
            <th>Model</th>
            <th>State</th>
            <th>Created At</th>
            <th>Schedule</th>
          </tr>
        </thead>
        <tbody>
          {sources.map((source) => {
            const schedule = source.schedule;
            const recurringFrequencyMinutes = schedule?.recurringFrequency
              ? schedule.recurringFrequency / (60 * 1000)
              : null;
            const run = runs[source.id];

            return (
              <Fragment key={`source-${source.id}`}>
                <tr>
                  <td>
                    <AppIcon src={source.app?.icon} />
                  </td>
                  <td>
                    <Link
                      href="/model/[modelId]/source/[sourceId]/overview"
                      as={`/model/${source.modelId}/source/${source.id}/overview`}
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
                  <td>{source.connection.displayName}</td>
                  <td>
                    <Link
                      href="/app/[id]/edit"
                      as={`/app/${source.app.id}/edit`}
                    >
                      <a>
                        <strong>{source.app.name}</strong>
                      </a>
                    </Link>
                  </td>
                  <td>
                    <ModelBadge
                      modelName={source.modelName}
                      modelId={source.modelId}
                    />
                  </td>
                  <td>
                    <StateBadge state={source.state} />
                  </td>
                  <td>{formatTimestamp(source.createdAt)}</td>
                  <td>
                    {schedule ? (
                      <>
                        Frequency:{" "}
                        {schedule.recurring
                          ? `Every ${recurringFrequencyMinutes} minutes`
                          : "Not recurring"}
                        {process.env.GROUPAROO_UI_EDITION !== "config" && (
                          <>
                            <br />
                            Last Run:{" "}
                            {run ? formatTimestamp(run?.createdAt) : "Never"}
                            <br />
                            <Button
                              variant="outline-success"
                              size="sm"
                              disabled={run?.state === "running"}
                              onClick={() => enqueueScheduleRun(source)}
                            >
                              Run Now
                            </Button>
                          </>
                        )}
                      </>
                    ) : (
                      "No Schedule"
                    )}
                  </td>
                </tr>
              </Fragment>
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
      {process.env.GROUPAROO_UI_EDITION !== "community" ? (
        <Button
          variant="primary"
          onClick={() => {
            router.push(
              "/model/[modelId]/source/new",
              `/model/${router.query.modelId}/source/new`
            );
          }}
        >
          Add new Source
        </Button>
      ) : null}
      &nbsp;
      {process.env.GROUPAROO_UI_EDITION !== "config" ? (
        <Button
          variant="outline-primary"
          onClick={() => enqueueAllSchedulesRun()}
        >
          Run all Schedules
        </Button>
      ) : null}
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = UseApi(ctx);
  const { modelId, limit, offset } = ctx.query;
  const { sources, total } = await execApi("get", `/sources`, {
    limit,
    offset,
    modelId,
  });

  const runs = {};
  for (const i in sources) {
    runs[sources[i].id] = await loadRun(sources[i], execApi);
  }

  return { sources, total, runs };
};

async function loadRun(source: Models.SourceType, execApi) {
  if (!source.schedule) return;
  const { runs }: { runs: Models.RunType[] } = await execApi(
    "get",
    `/runs`,
    {
      id: source.schedule.id,
      limit: 1,
    },
    null,
    null,
    false
  );
  return runs[0];
}
