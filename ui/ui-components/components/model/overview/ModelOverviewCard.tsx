import { Card, Col, Row } from "react-bootstrap";

interface Props {
  title: string;
  actionButtons?: React.ReactNode;
  disabled?: boolean;
}

const ModelOverviewCard: React.FC<Props> = ({
  title,
  actionButtons,
  disabled,
  children,
}) => {
  return (
    <Card className={disabled ? "text-muted" : undefined}>
      <Card.Header>
        <Row>
          <Col md={actionButtons ? 8 : 12}>
            <h5 className="my-1">{title}</h5>
          </Col>
          {actionButtons && (
            <Col className="text-right" md="4">
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
