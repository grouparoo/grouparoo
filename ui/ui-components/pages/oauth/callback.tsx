import { useApi } from "../../contexts/api";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import { Actions } from "../../utils/apiData";
import { grouparooUiEdition } from "../../utils/uiEdition";

export default function OauthCallbackPage() {
  const router = useRouter();
  const { client } = useApi();
  const requestId = String(router.query?.requestId ?? "");

  useEffect(() => {
    const updateOAuthRequest = async () => {
      const response: Actions.OAuthClientEdit = await client.request(
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
    updateOAuthRequest();
  }, [client, requestId, router]);

  return <Loader />;
}
