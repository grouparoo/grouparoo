import Head from "next/head";
import { Row, Col } from "react-bootstrap";
import {
  BigTotalNumber,
  RecordsExported,
  GroupsByNewestMember,
  RunningRuns,
  ScheduleRuns,
  PendingImports,
  PendingExports,
} from "../components/visualizations/HomepageWidgets";
import { StatusHandler } from "../utils/statusHandler";

export default function Page(props) {
  const {
    statusHandler,
  }: {
    statusHandler: StatusHandler;
  } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: Dashboard</title>
      </Head>
      <h1>Dashboard</h1>
      <h2>Totals</h2>
      <Row>
        <Col>
          <BigTotalNumber
            statusHandler={statusHandler}
            topic="GrouparooRecord"
            title="Records"
          />
        </Col>

        <Col>
          <BigTotalNumber
            statusHandler={statusHandler}
            topic="Group"
            title="Groups"
          />
        </Col>

        <Col>
          <RecordsExported statusHandler={statusHandler} />
        </Col>
      </Row>

      <br />
      <h2>Runs</h2>
      <RunningRuns statusHandler={statusHandler} />
      <br />
      <ScheduleRuns statusHandler={statusHandler} />

      <br />
      <h2>Updating Data in Grouparoo</h2>
      <PendingImports statusHandler={statusHandler} />

      <br />
      <h2>Exporting Data to Destinations</h2>
      <PendingExports statusHandler={statusHandler} />

      <br />
      <h2>Recently Updated Groups</h2>
      <GroupsByNewestMember statusHandler={statusHandler} />
    </>
  );
}
