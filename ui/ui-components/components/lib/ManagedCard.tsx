import { Card, Col, Row } from "react-bootstrap";
import SeparatedItems from "./SeparatedItems";

interface Props {
  title: React.ReactNode;
  actions?: React.ReactNode[];
  disabled?: boolean;
}

const ManagedCard: React.FC<Props> = ({
  title,
  actions,
  disabled,
  children,
}) => (
  <Card className={disabled ? "text-muted" : undefined}>
    <Card.Header>
      <Row>
        <Col>
          <h5 className="my-1">{title}</h5>
        </Col>
        {actions && (
          <Col className="text-right" md="7" lg="6" sm="12">
            <SeparatedItems items={actions} />
          </Col>
        )}
      </Row>
    </Card.Header>
    {children}
  </Card>
);

export default ManagedCard;
