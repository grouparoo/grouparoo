import { useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { Row, Col, Badge, Alert } from "react-bootstrap";
import Moment from "react-moment";
import Link from "next/link";
import { ResponsiveLine } from "@nivo/line";
import RunTabs from "../../../components/tabs/run";
import Head from "next/head";

export default function Page({ run, quantizedTimeline }) {
  const chartData = buildChartData(quantizedTimeline);

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
              <a>{run.creatorGuid}</a>
            </Link>
          </p>
          <p>
            State:{" "}
            <Badge variant={run.state === "complete" ? "success" : "warning"}>
              {run.state}
            </Badge>
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
              <Alert variant="secondary">
                <Row>
                  <Col>
                    <Link
                      href="/imports/[creatorGuid]"
                      as={`/imports/${run.guid}`}
                    >
                      <a>Imports Created: {run.importsCreated}</a>
                    </Link>
                  </Col>
                  <Col>Profiles Created: {run.profilesCreated}</Col>
                  <Col>Profiles Imported: {run.profilesImported}</Col>
                  <Col>Profiles Exported: {run.profilesExported}</Col>
                </Row>
              </Alert>
            </Col>
          </Row>

          <Row>
            <Col>
              <strong>Error</strong>
              {run.error ? (
                <Alert variant="warning">{run.error}</Alert>
              ) : (
                <p>no error</p>
              )}
            </Col>
          </Row>

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
  const associatePoints = [];
  const updatePoints = [];
  const groupPoints = [];
  const exportPoints = [];
  quantizedTimeline.forEach((chunk) => {
    const x = new Date(chunk.lastBoundary);
    associatePoints.push({ x, y: chunk.steps.associate });
    updatePoints.push({ x, y: chunk.steps.update });
    groupPoints.push({ x, y: chunk.steps.groups });
    exportPoints.push({ x, y: chunk.steps.export });
  });

  return [
    {
      id: "associate",
      data: associatePoints,
    },
    {
      id: "update",
      data: updatePoints,
    },
    {
      id: "group",
      data: groupPoints,
    },
    {
      id: "export",
      data: exportPoints,
    },
  ];
}
