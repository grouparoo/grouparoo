import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import { UseApi } from "../../hooks/useApi";
import { Actions } from "../../utils/apiData";
import { ErrorHandler } from "../../utils/errorHandler";

export default function OauthCallbackPage(props) {
  const router = useRouter();
  const {
    errorHandler,
  }: {
    errorHandler: ErrorHandler;
  } = props;
  const { execApi } = UseApi(props, errorHandler);
  const requestId = String(router.query?.requestId ?? "");

  const updateOAuthRequest = async () => {
    const response: Actions.OAuthClientEdit = await execApi(
      "put",
      `/oauth/client/request/${requestId}/edit`
    );
    if (response.oAuthRequest) {
      if (response.oAuthRequest.type === "user") {
        router.replace(`/session/sign-in?requestId=${requestId}`);
      } else {
        router.replace(
          `/object/${response.oAuthRequest.appId}?requestId=${requestId}&appOption=${response.oAuthRequest.appOption}`
        );
      }
    }
  };

  useEffect(() => {
    updateOAuthRequest();
  }, []);

  return <Loader />;
}
