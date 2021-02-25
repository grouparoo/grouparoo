import { Row, Col, Button, Accordion, Form } from "react-bootstrap";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import { updateURLParams } from "../../hooks/URLParams";
import { useSecondaryEffect } from "../../hooks/useSecondaryEffect";
import Loader from "../loader";
import { useRouter } from "next/router";
import { GrouparooChart, ChartLinData } from "../visualizations/grouparooChart";
import { useApi } from "../../hooks/useApi";
import { Actions } from "../../utils/apiData";

const NodeMoment = require("moment");

const limit = 1000; // we want to allow for many more data points here...

export default function EventsTotals(props) {
  const { errorHandler } = props;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState<number>(props.total);
  const [counts, setCounts] = useState<Actions.EventsCounts["counts"]>(
    props.counts
  );
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

  const types = [];
  const chartData: ChartLinData = [];

  counts.map((c) => {
    if (!types.includes(c.type)) types.push(c.type);
    const idx = types.indexOf(c.type);
    if (!chartData[idx]) chartData[idx] = [];
    chartData[idx].push({ x: new Date(c.time).getTime(), y: c.count });
  });

  const dateTruncOptions = ["month", "day", "hour", "minute"];

  useSecondaryEffect(() => {
    load();
  }, [startDate, endDate, dateTrunc]);

  async function load() {
    setLoading(true);
    const response: Actions.EventsCounts = await execApi(
      "get",
      `/events/counts`,
      {
        startTime: startDate.getTime(),
        endTime: endDate.getTime(),
        dateTrunc,
        limit,
      }
    );
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
            <GrouparooChart keys={types} data={chartData} />
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
