import { ErrorHandler } from "../../eventHandlers/errorHandler";
import { SuccessHandler } from "../../eventHandlers/successHandler";
import { SessionHandler } from "../../eventHandlers/sessionHandler";

const commonProps = {
  errorHandler: new ErrorHandler(),
  successHandler: new SuccessHandler(),
  sessionHandler: new SessionHandler(),
};

export default commonProps;
