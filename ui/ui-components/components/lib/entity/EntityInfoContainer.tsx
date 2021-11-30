import { Media } from "react-bootstrap";
import { Models } from "../../../utils/apiData";
import AppIcon from "../../AppIcon";

interface Props {
  app?: Models.AppType;
}

const EntityInfoContainer: React.FC<Props> = ({ app, children }) => {
  return app?.icon ? (
    <Media>
      <AppIcon src={app.icon} size={52.5} className="mr-3" />
      <Media.Body>{children}</Media.Body>
    </Media>
  ) : (
    <>{children}</>
  );
};

export default EntityInfoContainer;
