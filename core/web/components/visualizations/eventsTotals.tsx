import { Row, Col, Button, Accordion, Form } from "react-bootstrap";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import { updateURLParams } from "../../hooks/URLParams";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import Loader from "../loader";
import { useRouter } from "next/router";
import { ResponsiveLine } from "@nivo/line";
import { useApi } from "../../hooks/useApi";
const NodeMoment = require("moment");

const limit = 1000; // we want to allow for many more data points here...

export default function EventsTotals(props) {
  const { errorHandler } = props;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState<number>(props.total);
  const [counts, setCounts] = useState(props.counts);
  const { execApi } = useApi(props, errorHandler);
  const [dateTrunc, setDateTrunc] = useState(
    router.query.dateTrunc?.toString() || "day"
  );
  const [startDate, setStartDate] = useState<Date>(
    router.query.startTime
      ? new Date(parseInt(router.query.startTime.toString()))
      : NodeMoment().subtract(1, "month").toDate()
  );
  const [endDate, setEndDate] = useState<Date>(
    router.query.endTime
      ? new Date(parseInt(router.query.endTime.toString()))
      : NodeMoment().add(1, "day").toDate()
  );

  const { hideDateRange } = router.query;

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

  const dateTruncOptions = ["month", "day", "hour", "minute"];

  useSecondaryEffect(() => {
    load();
  }, [startDate, endDate, dateTrunc]);

  async function load() {
    setLoading(true);
    const response = await execApi("get", `/events/counts`, {
      startTime: startDate.getTime(),
      endTime: endDate.getTime(),
      dateTrunc,
      limit,
    });
    setLoading(false);
    if (response?.counts) {
      setCounts(response.counts);
      setTotal(response.total);
    }

    updateURLParams(router, {
      startTime: startDate.getTime(),
      endTime: endDate.getTime(),
      dateTrunc,
    });
  }

  return (
    <>
      {hideDateRange ? null : (
        <Accordion>
          <Row>
            <Col>
              <Form inline>
                <p>
                  Showing {total} events from{" "}
                  <Accordion.Toggle
                    as={Button}
                    variant="outline-dark"
                    size="sm"
                    eventKey="date-range"
                  >
                    {startDate.toLocaleDateString()} to{" "}
                    {endDate.toLocaleDateString()}
                  </Accordion.Toggle>{" "}
                  by{" "}
                  <Form.Control
                    as="select"
                    size="sm"
                    value={dateTrunc}
                    onChange={(e) => {
                      setDateTrunc(e.target.value);
                    }}
                  >
                    {dateTruncOptions.map((opt) => (
                      <option key={`events-totals-${opt}`}>{opt}</option>
                    ))}
                  </Form.Control>
                </p>
              </Form>
            </Col>
          </Row>

          <Accordion.Collapse eventKey="date-range">
            <Row>
              <Col>
                <DateRangePicker
                  onChange={({ selection }) => {
                    setStartDate(selection.startDate);
                    setEndDate(selection.endDate);
                  }}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={2}
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
            </Row>
          </Accordion.Collapse>
        </Accordion>
      )}

      <Row>
        <Col style={{ height: 450 }}>
          {loading ? (
            <Loader />
          ) : (
            <EventsBar data={Object.keys(chartData).map((k) => chartData[k])} />
          )}
        </Col>
      </Row>
    </>
  );
}

EventsTotals.hydrate = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { startTime, endTime, dateTrunc } = ctx.query;
  const { counts, total } = await execApi("get", `/events/counts`, {
    startTime,
    endTime,
    dateTrunc,
    limit,
  });

  return { counts, total };
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
