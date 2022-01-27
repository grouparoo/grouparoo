import { GetServerSidePropsContext } from "next";
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
import { UseApi } from "../hooks/useApi";
import { withServerErrorHandler } from "../utils/withServerErrorHandler";

export default function Page() {
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

// this getServerSideProps doesn't actually return anything, but we to want to make a request to see if the user is signed in
export const getServerSideProps = withServerErrorHandler(
  async (ctx: GetServerSidePropsContext) => {
    const { execApi } = UseApi(ctx);
    await execApi("get", `/session`);
    return { props: {} };
  }
);
