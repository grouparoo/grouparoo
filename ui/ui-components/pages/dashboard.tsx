import Head from "next/head";
import { Row, Col } from "react-bootstrap";
import {
  BigNumber,
  GroupsByNewestMember,
  RunningRuns,
  ScheduleRuns,
  PendingImports,
  PendingExports,
} from "../components/visualizations/homepageWidgets";
import { useApi } from "../hooks/useApi";

export default function Page(props) {
  const { errorHandler } = props;
  const { execApi } = useApi(props, errorHandler);

  return (
    <>
      <Head>
        <title>Grouparoo: Dashboard</title>
      </Head>
      <h1>Dashboard</h1>
      <h2>Totals</h2>
      <Row>
        <Col>
          <BigNumber
            execApi={execApi}
            href="profiles"
            model="Profile"
            title="Profiles"
          />
        </Col>

        <Col>
          <BigNumber
            execApi={execApi}
            href="groups"
            model="Group"
            title="Groups"
          />
        </Col>
      </Row>

      <br />
      <h2>Runs</h2>
      <RunningRuns execApi={execApi} />
      <br />
      <ScheduleRuns execApi={execApi} />

      <br />
      <h2>Updating Data in Grouparoo</h2>
      <PendingImports execApi={execApi} />

      <br />
      <h2>Exporting Data to Destinations</h2>
      <PendingExports execApi={execApi} />

      <br />
      <h2>Recently Updated Groups</h2>
      <GroupsByNewestMember execApi={execApi} />
    </>
  );
}
