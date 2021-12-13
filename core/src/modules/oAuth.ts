export type oAuthType = "user" | "app";

export interface oAuthProvider {
  name: string;
  displayName: string;
  description: string;
  icon: string;
  authTypes: oAuthType[];
}

export interface oAuthIdentity {
  email: string;
  name: string;
  description: string;
}
