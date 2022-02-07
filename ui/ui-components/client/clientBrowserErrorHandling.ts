import axios from "axios";
import { errorHandler } from "../eventHandlers";
import { getRedirectFromErrorCode } from "../utils/getRedirectFromErrorCode";
import { isBrowser } from "../utils/isBrowser";

if (isBrowser()) {
  axios.interceptors.response.use(undefined, (error) => {
    errorHandler.set({ message: error });

    const redirect = getRedirectFromErrorCode(
      error.code,
      window.location.pathname
    );

    if (redirect) {
      window.location.href = redirect.destination;
      return new Promise(() => {});
    }

    return {};
  });
}
