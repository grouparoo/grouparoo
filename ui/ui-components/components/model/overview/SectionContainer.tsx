import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Media, Row } from "react-bootstrap";
import AppIcon from "../../AppIcon";

interface SectionContainerProps {
  title?: string;
  description?: string;
  iconType?: "app" | "icon";
  icon: string | IconProp;
  actionButtons?: React.ReactNode;
  disabled?: boolean;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  actionButtons,
  title,
  iconType,
  icon,
  description,
  disabled,
  children,
}) => {
  return (
    <Media className={disabled ? "text-muted" : null}>
      {typeof icon === "string" && iconType === "app" ? (
        <AppIcon src={icon} size={52.5} className="mr-3" />
      ) : (
        icon && (
          <FontAwesomeIcon
            icon={icon as IconProp}
            size="3x"
            className="mr-3"
            fixedWidth
          />
        )
      )}
      <Media.Body>
        <Row>
          <Col md={actionButtons ? 8 : 12}>
            {title && <h6>{title}</h6>}
            {description && <p>{description}</p>}
          </Col>
          {actionButtons && (
            <Col className="text-right" md="4">
              {actionButtons}
            </Col>
          )}
        </Row>
        {children}
      </Media.Body>
    </Media>
  );
};

export default SectionContainer;
