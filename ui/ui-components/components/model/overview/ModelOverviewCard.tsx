import { Card, Col, Row } from "react-bootstrap";

interface Props {
  title: string;
  actionButtons?: React.ReactNode;
}

const ModelOverviewCard: React.FC<Props> = ({
  title,
  actionButtons,
  children,
}) => {
  return (
    <Card>
      <Card.Header>
        <Row>
          <Col md="4">
            <h5>{title}</h5>
          </Col>
          {actionButtons && (
            <Col className="text-right" md={{ span: 4, offset: 4 }}>
              {actionButtons}
            </Col>
          )}
        </Row>
      </Card.Header>
      {children}
    </Card>
  );
};

export default ModelOverviewCard;
