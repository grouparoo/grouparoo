import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Media } from "react-bootstrap";
import AppIcon from "../../AppIcon";

interface SectionContainerProps {
  title: string;
  description: string;
  iconType?: "app" | "icon";
  icon: string | IconProp;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  iconType,
  icon,
  description,
  children,
}) => {
  return (
    <Media>
      {icon && iconType === "app" ? (
        <AppIcon src={icon as string} size={42} className="mr-3" />
      ) : (
        icon && (
          <FontAwesomeIcon icon={icon as IconProp} size="3x" className="mr-3" />
        )
      )}
      <Media.Body>
        <h6>{title}</h6>
        <p>{description}</p>
        {children}
      </Media.Body>
    </Media>
  );
};

export default SectionContainer;
