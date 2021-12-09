export type oAuthType = "user" | "app";

export type oAuthProvider = {
  name: string;
  description: string;
  icon: string;
  authTypes: oAuthType[];
};

export type oAuthIdentity = {
  email: string;
  name: string;
  description: string;
};

export type telemetryOAuthRequest = {
  id: string;
  type: string;
  provider: string;
  requestId: string;
  telemetryCustomerId: string;
  callbackUrl: string;
  identities: oAuthIdentity[];
  confirmed: boolean;
};
