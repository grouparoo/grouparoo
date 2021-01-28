import { ErrorHandler } from "@grouparoo/ui-components/utils/errorHandler";
import { SuccessHandler } from "@grouparoo/ui-components/utils/successHandler";
import { SessionHandler } from "@grouparoo/ui-components/utils/sessionHandler";

const commonProps = {
  errorHandler: new ErrorHandler(),
  successHandler: new SuccessHandler(),
  sessionHandler: new SessionHandler(),
};

export default commonProps;
