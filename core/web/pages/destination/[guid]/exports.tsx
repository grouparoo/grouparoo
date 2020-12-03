import Head from "next/head";
import { useApi } from "../../../hooks/useApi";
import { Row, Col } from "react-bootstrap";
import ExportsList from "../../../components/export/list";
import DestinationTabs from "../../../components/tabs/destination";
import AppIcon from "./../../../components/appIcon";
import StateBadge from "./../../../components/stateBadge";
import LockedBadge from "../../../components/lockedBadge";

export default function Page(props) {
  const { destination } = props;

  return (
    <>
      <Head>
        <title>Grouparoo: {destination.name}</title>
      </Head>

      <DestinationTabs destination={destination} />

      <ExportsList
        header={
          <Row>
            <Col md={1}>
              <AppIcon src={destination.app.icon} fluid size={100} />
            </Col>
            <Col>
              <h1>{destination.name} - Exports</h1>
              <StateBadge state={destination.state} />{" "}
              <LockedBadge object={destination} />
            </Col>
          </Row>
        }
        {...props}
      />
    </>
  );
}

Page.getInitialProps = async (ctx) => {
  const { execApi } = useApi(ctx);
  const { guid } = ctx.query;
  const { destination } = await execApi("get", `/destination/${guid}`);
  const exportListInitialProps = await ExportsList.hydrate(ctx);
  return { destination, ...exportListInitialProps };
};
