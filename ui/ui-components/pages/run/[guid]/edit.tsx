import { useApi } from "../../../hooks/useApi";
import { useState } from "react";
import { Row, Col, Badge, Alert } from "react-bootstrap";
import Moment from "react-moment";
import Link from "../../../components/enterpriseLink";
import { ResponsiveLine } from "@nivo/line";
import RunTabs from "../../../components/tabs/run";
import Head from "next/head";
import LoadingButton from "../../../components/loadingButton";
import { Models, Actions } from "../../../utils/apiData";

export default function Page(props) {
  const { quantizedTimeline, successHandler, errorHandler } = props;
  const { execApi } = useApi(props, errorHandler);
  const [run, setRun] = useState<Models.RunType>(props.run);
  const chartData = buildChartData(quantizedTimeline);
  const [loading, setLoading] = useState(false);

  async function stopRun() {
    setLoading(true);
    const response: Actions.RunEdit = await execApi("put", `/run/${run.guid}`, {
      state: "stopped",
    });
    setLoading(false);
    if (response?.run) {
      successHandler.set({ message: "Run stopped" });
      setRun(response.run);
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo: {run.guid}</title>
      </Head>

      <RunTabs run={run} />

      <Row>
        <Col>
          <h1>Run {run.guid}</h1>
          <p>
            Creator:{" "}
            <Link href="/object/[guid]" as={`/object/${run.creatorGuid}`}>
              <a>
                {run.creatorType}: {run.creatorName}
              </a>
            </Link>
          </p>
          <p>
            State:{" "}
            <Badge variant={run.state === "complete" ? "success" : "warning"}>
              {run.state} ({run.percentComplete}%)
            </Badge>
            {run.state === "running" ? (
              <>
                <br />
                <br />
                <LoadingButton
                  variant="warning"
                  size="sm"
                  disabled={loading}
                  onClick={stopRun}
                >
                  Stop run
                </LoadingButton>
              </>
            ) : null}
          </p>
          <p>
            Completed{" "}
            {run.completedAt ? (
              <>
                <Moment fromNow>{run.completedAt}</Moment>
                <br />
                <small>
                  Total Duration:{" "}
                  <Moment duration={run.createdAt} date={run.completedAt} />
                </small>
              </>
            ) : null}
          </p>

          <Row>
            <Col>
              <Link href="/imports/[creatorGuid]" as={`/imports/${run.guid}`}>
                <a>Imports Created: {run.importsCreated}</a>
              </Link>
              <br />
              Profiles Created: {run.profilesCreated}
              <br />
              Profiles Imported: {run.profilesImported}
            </Col>
            <Col>
              Group Member Limit: {run.groupMemberLimit}
              <br />
              Group Member Offset: {run.groupMemberOffset}
              <br />
              Group Member High Water Mark: {run.groupHighWaterMark}
              <br />
              Source Offset: {run.sourceOffset}
              {run.highWaterMark ? (
                <>
                  <br />
                  {Object.keys(run.highWaterMark)[0]}:{" "}
                  {Object.values(run.highWaterMark)[0]}
                </>
              ) : null}
            </Col>
          </Row>

          <br />

          {run.error ? (
            <Row>
              <Col>
                <strong>Error</strong>
                <Alert variant="danger">{run.error}</Alert>
              </Col>
            </Row>
          ) : null}

          <h2>Timeline</h2>
          <div style={{ height: 500 }}>
            <ResponsiveLine
              data={chartData}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              colors={{ scheme: "category10" }}
              lineWidth={2}
              animate={false}
              enableSlices={"x"}
              useMesh={true}
              curve={"monotoneX"}
              xScale={{
                type: "time",
                format: "native",
                precision: "second",
              }}
              xFormat="time:%H:%M:%S"
              yScale={{
                type: "linear",
              }}
              axisBottom={{
                format: "%H:%M:%S",
              }}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { guid } = ctx.query;
  const { execApi } = useApi(ctx);
  const { run, quantizedTimeline } = await execApi("get", `/run/${guid}`);
  return { run, quantizedTimeline };
};

function buildChartData(quantizedTimeline) {
  const keys = Object.keys(quantizedTimeline[0].steps);
  const points = {};
  keys.forEach((k) => {
    points[k] = [];
  });

  quantizedTimeline.forEach((chunk) => {
    const x = new Date(chunk.lastBoundary);
    keys.forEach((k) => {
      points[k].push({ x, y: chunk.steps[k] });
    });
  });

  return keys.map((k) => {
    return { id: k, data: points[k] };
  });
}
