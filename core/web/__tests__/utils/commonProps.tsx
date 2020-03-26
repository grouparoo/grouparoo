import { ErrorHandler } from "../../utils/errorHandler";
import { SuccessHandler } from "../../utils/successHandler";
import { SessionHandler } from "../../utils/sessionHandler";

const commonProps = {
  apiVersion: parseInt(process.env.API_VERSION),
  errorHandler: new ErrorHandler(),
  successHandler: new SuccessHandler(),
  sessionHandler: new SessionHandler(),
};

export default commonProps;
