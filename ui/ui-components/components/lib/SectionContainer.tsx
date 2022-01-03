import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import AppIcon from "../AppIcon";
import SeparatedItems from "./SeparatedItems";

interface SectionContainerProps {
  title?: string;
  description?: string;
  iconType?: "app" | "icon";
  icon: string | IconProp;
  actions?: React.ReactNode[];
  disabled?: boolean;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  actions,
  title,
  iconType,
  icon,
  description,
  disabled,
  children,
}) => {
  return (
    <div className={`d-flex ${disabled ? "text-muted" : null}`}>
      <div className="flex-shrink-0">
        {typeof icon === "string" && iconType === "app" ? (
          <AppIcon src={icon} size={52.5} className="me-3" />
        ) : (
          icon && (
            <FontAwesomeIcon
              icon={icon as IconProp}
              size="3x"
              className="me-3"
              fixedWidth
            />
          )
        )}
      </div>
      <div className="flex-grow-1 ms-3">
        <Row>
          <Col md={actions ? 8 : 12}>
            {title && <h6>{title}</h6>}
            {description && <p>{description}</p>}
          </Col>
          {actions && (
            <Col className="text-end" md="4">
              <SeparatedItems items={actions} />
            </Col>
          )}
        </Row>
        {children}
      </div>
    </div>
  );
};

export default SectionContainer;
