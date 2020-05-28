import { ErrorHandler } from "../../utils/errorHandler";
import { SuccessHandler } from "../../utils/successHandler";
import { SessionHandler } from "../../utils/sessionHandler";

const commonProps = {
  errorHandler: new ErrorHandler(),
  successHandler: new SuccessHandler(),
  sessionHandler: new SessionHandler(),
  apiVersion: "v1",
  webUrl: "http://test-localhost:12345",
};

export default commonProps;
