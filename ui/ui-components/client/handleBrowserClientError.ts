import { errorHandler } from "../eventHandlers";
import { getRedirectFromErrorCode } from "../utils/getRedirectFromErrorCode";

export const handleBrowserClientError = async <Response>(
  error: Error & { code?: string }
): Promise<Response> => {
  errorHandler.set({ message: error });

  const redirect = getRedirectFromErrorCode(
    error.code,
    window.location.pathname
  );

  if (redirect) {
    window.location.href = redirect.destination;
    return new Promise(() => {});
  }

  return {} as Response;
};
