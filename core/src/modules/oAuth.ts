export type oAuthType = "user" | "app";

export type oAuthProvider = {
  name: string;
  displayName: string;
  description: string;
  icon: string;
  authTypes: oAuthType[];
};

export type oAuthIdentity = {
  email: string;
  name: string;
  description: string;
};
