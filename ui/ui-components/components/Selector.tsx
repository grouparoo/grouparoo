import AppIcon from "./AppIcon";
import { Row, Col, Badge } from "react-bootstrap";

export interface BadgeProp {
  message?: string;
  variant?: string;
}

export default function Selector({
  src = "",
  title = "",
  size = 50,
  iconClassName = "",
  subheading = "",
  description = "",
  disabled = false,
  badges = [],
  metaBadge,
  className = "",
  onClick = () => {},
}: {
  src: string;
  title: string;
  className: string;
  size?: number;
  iconClassName?: string;
  subheading?: string;
  description?: string;
  disabled?: boolean;
  badges: BadgeProp[];
  metaBadge?: BadgeProp;
  onClick?: any;
}) {
  const clickProp = disabled ? undefined : { onClick };
  return (
    <div
      style={{
        width: 200,
        borderRadius: 4,
        borderColor: "gray",
        color: "white",
        margin: 15,
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 10,
        paddingLeft: 10,
        opacity: disabled ? 0.4 : undefined,
        cursor: disabled ? undefined : "pointer",
      }}
      className={`${className}${disabled ? " text-muted" : ""}`}
      {...clickProp}
    >
      <div className="d-flex flex-column">
        <div
          className="align-self-center mb-3"
          style={{
            backgroundColor: "white",
            width: 140,
            height: 140,
            borderRadius: 4,
            paddingTop: 5,
            textAlign: "center",
            wordWrap: "break-word",
          }}
        >
          <AppIcon className={iconClassName} src={src} size={size} />
        </div>
        {metaBadge && (
          <div className="text-center mb-2">
            <Badge pill variant={metaBadge.variant}>
              {metaBadge.message}
            </Badge>
          </div>
        )}
        <h4 className="align-self-center" style={{ textAlign: "center" }}>
          {title}
        </h4>
        {subheading || description ? (
          <p style={{ textAlign: "center" }}>
            <br />
            <strong>{subheading}</strong>
            <br />
            <br />
            {description}
          </p>
        ) : null}
        {badges ? (
          <Row>
            {badges.map(({ message, variant }, idx) => (
              <Col
                key={`badge-${title}-${idx}`}
                md={6}
                style={{ textAlign: "center" }}
              >
                {message ? (
                  <Badge pill variant={variant}>
                    {message}
                  </Badge>
                ) : null}
              </Col>
            ))}
          </Row>
        ) : null}
      </div>
    </div>
  );
}
