import { ErrorHandler } from "../../utils/errorHandler";
import { SuccessHandler } from "../../utils/successHandler";
import { SessionHandler } from "../../utils/sessionHandler";

const commonProps = {
  errorHandler: new ErrorHandler(),
  successHandler: new SuccessHandler(),
  sessionHandler: new SessionHandler(),
};

export default commonProps;
