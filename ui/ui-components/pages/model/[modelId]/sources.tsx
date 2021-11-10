import { useState, Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import type { NextPageContext } from "next";
import { UseApi } from "../../../hooks/useApi";
import { useOffset, updateURLParams } from "../../../hooks/URLParams";
import { useSecondaryEffect } from "../../../hooks/useSecondaryEffect";
import Link from "../../../components/GrouparooLink";
import Pagination from "../../../components/Pagination";
import LoadingTable from "../../../components/LoadingTable";
import AppIcon from "../../../components/AppIcon";
import StateBadge from "../../../components/badges/StateBadge";
import { Models, Actions } from "../../../utils/apiData";
import { formatTimestamp } from "../../../utils/formatTimestamp";
import { SuccessHandler } from "../../../utils/successHandler";
import { ErrorHandler } from "../../../utils/errorHandler";
import LoadingButton from "../../../components/LoadingButton";
import LinkButton from "../../../components/LinkButton";
import { grouparooUiEdition } from "../../../utils/uiEdition";

export default function Page(props) {
  const {
    successHandler,
    errorHandler,
    modelName,
  }: {
    successHandler: SuccessHandler;
    errorHandler: ErrorHandler;
    modelName: string;
  } = props;
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
    }
  }

  async function enqueueScheduleRun(source: Models.SourceType) {
    setLoading(true);
    try {
      const response: Actions.ScheduleRun = await execApi(
        "post",
        `/schedule/${source.schedule.id}/run`
      );
      if (response.run) {
        const _runs = Object.assign({}, runs);
        _runs[source.id] = await loadRun(source, execApi);
        setRuns(_runs);
        successHandler.set({ message: `run ${response.run.id} enqueued` });
      }
    } finally {
      setLoading(false);
    }
  }

  async function enqueueAllSchedulesRun() {
    setLoading(true);
    try {
      const response: Actions.SchedulesRun = await execApi(
        "post",
        `/schedules/run`,
        { modelId }
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
      <h1>Sources: {modelName}</h1>
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
                      href={`/model/${source.modelId}/source/${source.id}/overview`}
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
                    <Link href={`/app/${source.app.id}/edit`}>
                      <a>
                        <strong>{source.app.name}</strong>
                      </a>
                    </Link>
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
                        {grouparooUiEdition() !== "config" && (
                          <>
                            <br />
                            Last Run:{" "}
                            {run ? formatTimestamp(run?.createdAt) : "Never"}
                            <br />
                            <LoadingButton
                              variant="outline-success"
                              size="sm"
                              disabled={loading}
                              onClick={() => enqueueScheduleRun(source)}
                            >
                              Run Now
                            </LoadingButton>
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
      <LinkButton
        variant="primary"
        href={`/model/${router.query.modelId}/source/new`}
        hideOn={["community"]}
      >
        Add new Source
      </LinkButton>
      &nbsp;
      <LoadingButton
        variant="outline-primary"
        disabled={loading}
        onClick={() => enqueueAllSchedulesRun()}
        hideOn={["config"]}
      >
        Run all {modelName} Schedules
      </LoadingButton>
    </>
  );
}

Page.getInitialProps = async (ctx: NextPageContext) => {
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

  let modelName = sources.length > 0 ? sources[0].modelName : null;
  if (!modelName) {
    const { model } = await execApi("get", `/model/${modelId}`);
    modelName = model.name;
  }

  return { sources, modelName, total, runs };
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
