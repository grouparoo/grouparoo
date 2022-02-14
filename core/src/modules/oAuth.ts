import "isomorphic-fetch";
import { config } from "actionhero";

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

export class oAuthAccessTokenGetter {
  private accessToken: string;
  private expirationDate: number = Date.now();

  constructor(
    private oAuthProviderName: string,
    private refreshToken: string
  ) {}

  private async isAccessTokenExpired() {
    return !this.accessToken || this.expirationDate <= Date.now();
  }

  private async requestAccessToken() {
    try {
      for (
        let retries = 3;
        retries > 0 && this.isAccessTokenExpired();
        retries--
      ) {
        const url = `${config.oAuth.host}/api/v1/oauth/${this.oAuthProviderName}/client/refresh`;
        const response: {
          error?: Error;
          token: string;
          expirationSeconds: number;
        } = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refreshToken: this.refreshToken }),
        }).then((r) => r.json());

        if (response.error?.message) {
          throw new Error(
            `Failed to refresh access token: ${response.error.message}`
          );
        }

        const { token, expirationSeconds } = response;

        const expirationMs = Math.max(0, (expirationSeconds - 60) * 1000);

        this.accessToken = token;
        this.expirationDate = Date.now() + expirationMs;
      }
      // TODO: Throw error if access token is still expired
    } catch (e) {
      // TODO: Something's up and we need to figure out why
      throw e;
    }
  }

  public async getAccessToken(): Promise<string> {
    if (this.isAccessTokenExpired()) {
      await this.requestAccessToken();
    }

    return this.accessToken;
  }
}
