import { useApi } from "../../../hooks/useApi";
import { useState, Fragment } from "react";
import { Row, Col, Badge, Alert, Card } from "react-bootstrap";
import Moment from "react-moment";
import Link from "../../../components/enterpriseLink";
import { GrouparooChart } from "../../../components/visualizations/grouparooChart";
import RunTabs from "../../../components/tabs/run";
import Head from "next/head";
import LoadingButton from "../../../components/loadingButton";
import { Models, Actions } from "../../../utils/apiData";
import { formatTimestamp } from "../../../utils/formatTimestamp";
import { SuccessHandler } from "../../../utils/successHandler";
import { ErrorHandler } from "../../../utils/errorHandler";

export default function Page(props) {
  const {
    quantizedTimeline,
    successHandler,
    errorHandler,
  }: {
    quantizedTimeline: any;
    successHandler: SuccessHandler;
    errorHandler: ErrorHandler;
  } = props;
  const { execApi } = useApi(props, errorHandler);
  const [run, setRun] = useState<Models.RunType>(props.run);
  const { chartData, chartKeys } = buildChartData(quantizedTimeline);
  const [loading, setLoading] = useState(false);

  async function stopRun() {
    setLoading(true);
    const response: Actions.RunEdit = await execApi("put", `/run/${run.id}`, {
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
        <title>Grouparoo: {run.id}</title>
      </Head>

      <RunTabs run={run} />

      <h1>Run {run.id}</h1>

      <Card>
        <Card.Body>
          <h2>Details</h2>
          <p>
            Creator:{" "}
            <Link href="/object/[id]" as={`/object/${run.creatorId}`}>
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
                {formatTimestamp(run.completedAt)}
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
              <Link href="/imports/[creatorId]" as={`/imports/${run.id}`}>
                <a>Imports Created: {run.importsCreated}</a>
              </Link>
              <br />
              Records Created: {run.recordsCreated}
              <br />
              Records Imported: {run.recordsImported}
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
                <Alert variant="danger">
                  {run.error.split("\n").map((err, errIdx) => (
                    <Fragment key={`err-${errIdx}`}>
                      {err}
                      <br />
                    </Fragment>
                  ))}
                </Alert>
              </Col>
            </Row>
          ) : null}
        </Card.Body>
      </Card>

      <br />

      <Card>
        <Card.Body style={{ height: 500 }}>
          <h2>Timeline</h2>
          <GrouparooChart keys={chartKeys} data={chartData} />
        </Card.Body>
      </Card>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const { execApi } = useApi(ctx);
  const { run, quantizedTimeline } = await execApi("get", `/run/${id}`);
  return { run, quantizedTimeline };
};

function buildChartData(quantizedTimeline) {
  const chartData: { x: number; y: number }[][] = [];
  const chartKeys = Object.keys(quantizedTimeline[0].steps);

  quantizedTimeline.forEach((chunk) => {
    const x = new Date(chunk.lastBoundary).getTime();
    chartKeys.forEach((k, idx) => {
      if (!chartData[idx]) chartData[idx] = [];
      chartData[idx].push({ x, y: chunk.steps[k] });
    });
  });

  return { chartData, chartKeys };
}
