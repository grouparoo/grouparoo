import { Models } from "../../../utils/apiData";
import AppIcon from "../../AppIcon";

interface Props {
  app?: Models.AppType;
}

const EntityInfoContainer: React.FC<Props> = ({ app, children }) => {
  return app?.icon ? (
    <div className="d-flex">
      <div className="flex-shrink-0">
        <AppIcon src={app.icon} size={52.5} className="mr-3" />
      </div>
      <div className="flex-grow-1 ms-3">{children}</div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default EntityInfoContainer;
