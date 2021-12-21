import { useState, Fragment, useMemo } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import type { NextPageContext } from "next";
import { UseApi } from "../../../hooks/useApi";
import { useOffset, updateURLParams } from "../../../hooks/URLParams";
import { useSecondaryEffect } from "../../../hooks/useSecondaryEffect";
import Link from "../../../components/GrouparooLink";
import Pagination from "../../../components/Pagination";
import AppIcon from "../../../components/AppIcon";
import StateBadge from "../../../components/badges/StateBadge";
import { Models, Actions } from "../../../utils/apiData";
import { formatTimestamp } from "../../../utils/formatTimestamp";
import { SuccessHandler } from "../../../utils/successHandler";
import { ErrorHandler } from "../../../utils/errorHandler";
import LoadingButton from "../../../components/LoadingButton";
import LinkButton from "../../../components/LinkButton";
import { grouparooUiEdition } from "../../../utils/uiEdition";
import { formatSchedule } from "../../../utils/formatSchedule";
import { formatName } from "../../../utils/formatName";
import RunAllSchedulesButton from "../../../components/schedule/RunAllSchedulesButton";
import { Table } from "react-bootstrap";

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
  const modelId = router.query.modelId as string;

  // pagination
  const limit = 100;
  const { offset, setOffset } = useOffset();

  const hasSchedules = useMemo(
    () =>
      sources.reduce((acc, source) => {
        return acc || !!source.schedule;
      }, false),
    [sources]
  );

  useSecondaryEffect(() => {
    load();
  }, [offset, limit, modelId]);

  const canCreateNewSource = !total || sources[0].state === "ready";

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
      <Table>
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
                        <strong>{formatName(source)}</strong>
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
                        Frequency: {formatSchedule(schedule)}
                        {grouparooUiEdition() !== "config" && (
                          <>
                            <br />
                            Last Run:{" "}
                            {run ? formatTimestamp(run?.createdAt) : "Never"}
                            <br />
                            <LoadingButton
                              variant="outline-success"
                              size="sm"
                              loading={loading}
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
      </Table>
      <Pagination
        total={total}
        limit={limit}
        offset={offset}
        onPress={setOffset}
      />
      <br />
      {canCreateNewSource && (
        <>
          <LinkButton
            variant="primary"
            href={`/model/${router.query.modelId}/source/new`}
            hideOn={["community"]}
          >
            Add new Source
          </LinkButton>{" "}
        </>
      )}
      {hasSchedules && (
        <RunAllSchedulesButton
          modelId={modelId}
          execApi={execApi}
          disabled={loading}
          onStart={() => setLoading(true)}
          onComplete={() => {
            setLoading(false);
            load();
          }}
        />
      )}
      {!canCreateNewSource && (
        <p>
          <small>
            Cannot create new Sources for this Model until the first Source is
            <StateBadge state="ready" marginBottom={0} />.
          </small>
        </p>
      )}
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
