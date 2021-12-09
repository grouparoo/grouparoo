import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { UseApi } from "../../hooks/useApi";
import { Actions, OAuth } from "../../utils/apiData";
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
  const token = String(router.query?.token ?? "");
  const [identities, setIdentities] = useState<OAuth.oAuthIdentityType[]>([]);
  const [loading, setLoading] = useState(false);

  const updateOAuthRequest = async () => {
    setLoading(true);
    const response: Actions.OAuthClientEdit = await execApi(
      "put",
      `/oauth/client/request/${requestId}/edit`,
      { token }
    );
    if (response.oAuthRequest) setIdentities(response.oAuthRequest.identities);
    setLoading(false);
  };

  useEffect(() => {
    updateOAuthRequest();
  }, []);

  if (loading) return <Loader />;
  return <>{JSON.stringify(identities)}</>;
}
