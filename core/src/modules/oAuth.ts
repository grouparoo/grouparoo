export type oAuthProvider = {
  name: string;
  description: string;
  icon: string;
  authTypes: ("user" | "app")[];
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
