import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import { errorHandler } from "../../eventHandlers";
import { UseApi } from "../../hooks/useApi";
import { Actions } from "../../utils/apiData";
import { grouparooUiEdition } from "../../utils/uiEdition";

export default function OauthCallbackPage(props) {
  const router = useRouter();
  const { execApi } = UseApi(props, errorHandler);
  const requestId = String(router.query?.requestId ?? "");

  const updateOAuthRequest = async () => {
    const response: Actions.OAuthClientEdit = await execApi(
      "put",
      `/oauth/client/request/${requestId}/edit`
    );
    if (response.oAuthRequest) {
      if (
        response.oAuthRequest.type === "user" &&
        grouparooUiEdition() !== "config"
      ) {
        router.replace(`/session/sign-in?requestId=${requestId}`);
      } else if (
        response.oAuthRequest.type === "app" &&
        typeof window?.opener !== "undefined"
      ) {
        window.opener?.postMessage({ requestId });
        window.close();
      } else {
        throw new Error("OAuth Request could not be handled.");
      }
    }
  };

  useEffect(() => {
    updateOAuthRequest();
  }, []);

  return <Loader />;
}
