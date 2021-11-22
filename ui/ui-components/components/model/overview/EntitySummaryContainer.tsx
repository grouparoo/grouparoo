import { Media } from "react-bootstrap";
import { Models } from "../../../utils/apiData";
import AppIcon from "../../AppIcon";

interface SummaryContainerProps {
  app?: Models.AppType;
}

const EntitySummaryContainer: React.FC<SummaryContainerProps> = ({
  app,
  children,
}) => {
  return app && app.icon ? (
    <Media>
      <AppIcon src={app.icon} size={42} className="mr-3" />
      <Media.Body>{children}</Media.Body>
    </Media>
  ) : (
    <>{children}</>
  );
};

export default EntitySummaryContainer;
