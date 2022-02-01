import { Card, CardProps, Col, Row } from "react-bootstrap";
import Loader from "../Loader";
import SeparatedItems from "./SeparatedItems";

interface Props {
  title: string;
  actions?: React.ReactNode[];
  disabled?: boolean;
  border?: CardProps["border"];
  loading?: boolean;
}

const ManagedCard: React.FC<Props> = ({
  title,
  actions,
  disabled,
  border,
  children,
  loading,
}) => {
  const slugTitle = title.toLowerCase().replace(/ /, "-");
  return (
    <Card className={disabled ? "text-muted" : undefined} border={border}>
      <Card.Header>
        <Row>
          <Col>
            <h5 id={slugTitle} className="my-1">
              {title}{" "}
              {loading && (
                <Loader style={{ verticalAlign: "inherit" }} size="sm" />
              )}
            </h5>
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
};

export default ManagedCard;
