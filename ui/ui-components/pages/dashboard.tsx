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

export default function Page(props) {
  return (
    <>
      <Head>
        <title>Grouparoo: Dashboard</title>
      </Head>
      <h1>Dashboard</h1>
      <h2>Totals</h2>
      <Row>
        <Col>
          <BigTotalNumber topic="GrouparooRecord" title="Records" />
        </Col>

        <Col>
          <BigTotalNumber topic="Group" title="Groups" />
        </Col>

        <Col>
          <RecordsExported />
        </Col>
      </Row>

      <br />
      <h2>Runs</h2>
      <RunningRuns />
      <br />
      <ScheduleRuns />

      <br />
      <h2>Updating Data in Grouparoo</h2>
      <PendingImports />

      <br />
      <h2>Exporting Data to Destinations</h2>
      <PendingExports />

      <br />
      <h2>Recently Updated Groups</h2>
      <GroupsByNewestMember />
    </>
  );
}
