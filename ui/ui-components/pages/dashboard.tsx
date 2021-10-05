import Head from "next/head";
import { Row, Col } from "react-bootstrap";
import {
  BigTotalNumber,
  GroupsByNewestMember,
  RunningRuns,
  ScheduleRuns,
  PendingImports,
  PendingExports,
} from "../components/visualizations/homepageWidgets";
import { StatusHandler } from "../utils/statusHandler";
import { Actions } from "../utils/apiData";

export default function Page(props) {
  const {
    statusHandler,
    navModel,
  }: {
    statusHandler: StatusHandler;
    navModel: Actions.NavigationList["navModel"];
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
            model="GrouparooRecord"
            title="Records"
          />
        </Col>

        <Col>
          <BigTotalNumber
            statusHandler={statusHandler}
            model="Group"
            title="Groups"
          />
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
