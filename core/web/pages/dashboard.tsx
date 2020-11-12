import Head from "next/head";
import { Row, Col } from "react-bootstrap";
import {
  BigNumber,
  GroupsByNewestMember,
} from "../components/visualizations/totals";
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

      <GroupsByNewestMember execApi={execApi} />
    </>
  );
}
