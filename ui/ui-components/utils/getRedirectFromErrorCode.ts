import { Redirect } from "next";

export const getRedirectFromErrorCode = (
  code: string,
  requestPath: string
): Redirect => {
  if (code === "NO_TEAMS_ERROR") {
    return {
      destination: `/`,
      permanent: false,
    };
  }

  if (code === "AUTHENTICATION_ERROR" && requestPath !== "/session/sign-in") {
    return {
      destination: `/session/sign-in${
        requestPath ? `?nextPage=${requestPath}` : ""
      }`,
      permanent: false,
    };
  }

  return undefined;
};
