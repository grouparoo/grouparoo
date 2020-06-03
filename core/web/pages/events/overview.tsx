import Head from "next/head";
import { useState } from "react";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import { Row, Col, Alert, Button } from "react-bootstrap";
import { useApi } from "../../hooks/useApi";
import Router from "next/router";
import { DefinedRange } from "react-date-range";
import Loader from "../../components/loader";
import { ResponsiveLine } from "@nivo/line";
import EventsList from "../../components/events/list";
import EventsTypesList from "../../components/events/types";
const NodeMoment = require("moment");

export default function Page(props) {
  const { errorHandler, query } = props;
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(props.total);
  const [counts, setCounts] = useState(props.counts);
  const { execApi } = useApi(props, errorHandler);
  const [startDate, setStartDate] = useState(
    query.startTime
      ? new Date(parseInt(query.startTime))
      : NodeMoment().subtract(1, "month").toDate()
  );
  const [endDate, setEndDate] = useState(
    query.endTime
      ? new Date(parseInt(query.endTime))
      : NodeMoment().add(1, "day").toDate()
  );

  const chartData = {};
  counts.map((c) => {
    if (!chartData[c.type]) {
      chartData[c.type] = { id: c.type, data: [] };
    }
    chartData[c.type].data.push({
      x: NodeMoment(c.time).format("YYYY-MM-DDTHH:mm:ss"),
      y: c.count,
    });
  });

  useSecondaryEffect(() => {
    load();
  }, [startDate, endDate]);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/events/counts`, {
      startTime: startDate.getTime(),
      endTime: endDate.getTime(),
    });
    setLoading(false);
    if (response?.counts) {
      setCounts(response.counts);
      setTotal(response.total);
    }

    updateURLParams();
  }

  function updateURLParams() {
    let url = `${window.location.pathname}?`;
    url += `startTime=${startDate.getTime()}&`;
    url += `endTime=${endDate.getTime()}&`;

    const routerMethod =
      url === `${window.location.pathname}?` ? "replace" : "push";
    Router[routerMethod](Router.route, url, { shallow: true });
  }

  return (
    <>
      <Head>
        <title>Grouparoo: Events</title>
      </Head>

      <h1>Events</h1>

      <h2>Overview</h2>

      <p>{total} events in this range</p>

      <Row>
        <Col md={2}>
          <DefinedRange
            onChange={({ selection }) => {
              setStartDate(selection.startDate);
              setEndDate(selection.endDate);
            }}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={[
              {
                startDate,
                endDate,
                key: "selection",
              },
            ]}
            direction="horizontal"
          />
        </Col>
        <Col style={{ height: 450 }}>
          {loading ? (
            <Loader />
          ) : (
            <EventsBar data={Object.keys(chartData).map((k) => chartData[k])} />
          )}
        </Col>
      </Row>

      <h2>Types</h2>
      <Button href="/events/types">See All Types</Button>
      <br />
      <EventsTypesList {...props} hidePagination limit={25} />

      <h2>Stream</h2>
      <Button href="/events/stream">See Full Stream</Button>
      <br />
      <EventsList {...props} hideSearch hidePagination limit={25} />

      <br />
      <br />

      <Alert variant="info">
        Looking for deeper event insights? Contact{" "}
        <a href="mailto:sales@grouparoo.com">Grouparoo Sales.</a>
      </Alert>
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { startTime, endTime } = ctx.query;
  const { counts, total } = await execApi("get", `/events/counts`, {
    startTime,
    endTime,
  });
  const eventsStreamInitialProps = await EventsList.hydrate(ctx, { limit: 25 });
  const eventsTypesInitialProps = await EventsTypesList.hydrate(ctx, {
    limit: 25,
  });

  return {
    counts,
    total,
    ...eventsStreamInitialProps,
    ...eventsTypesInitialProps,
  };
};

function EventsBar({ data }) {
  if (data.length === 0) {
    return <p>no data</p>;
  }

  return (
    <ResponsiveLine
      data={data}
      colors={{ scheme: "category10" }}
      useMesh={true}
      animate={false}
      margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
      curve={"monotoneX"}
      lineWidth={3}
      pointSize={6}
      xScale={{
        type: "time",
        format: "%Y-%m-%dT%H:%M:%S",
        precision: "second",
      }}
      xFormat="time:%Y-%m-%dT%H:%M:%S"
      yScale={{
        type: "linear",
      }}
      axisBottom={{
        format: "%Y-%m-%d %H:%M",
        tickValues: 5,
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "events",
        legendOffset: -40,
        legendPosition: "middle",
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
  );
}
