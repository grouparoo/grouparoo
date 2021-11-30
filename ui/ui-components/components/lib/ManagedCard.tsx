import { Card, Col, Row } from "react-bootstrap";
import SeparatedItems from "./SeparatedItems";

interface Props {
  title: string;
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
        <Col md={actions ? 8 : 12}>
          <h5 className="my-1">{title}</h5>
        </Col>
        {actions && (
          <Col className="text-right" md="4">
            <SeparatedItems items={actions} />
          </Col>
        )}
      </Row>
    </Card.Header>
    {children}
  </Card>
);

export default ManagedCard;
