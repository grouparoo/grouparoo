import "isomorphic-fetch";
import { config, log } from "actionhero";

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
  private expirationDate: number;

  constructor(readonly providerName: string, public refreshToken: string) {}

  private isAccessTokenExpired() {
    return (
      !this.accessToken ||
      !this.expirationDate ||
      this.expirationDate <= Date.now()
    );
  }

  private async requestAccessToken() {
    try {
      for (
        let retries = 3;
        retries > 0 && this.isAccessTokenExpired();
        retries--
      ) {
        const url = `${config.oAuth.host}/api/v1/oauth/${this.providerName}/client/refresh`;
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refreshToken: this.refreshToken }),
        });

        if (!response.ok) {
          const authErrorResponse = await response.json();
          if (authErrorResponse.error?.message) {
            log(authErrorResponse.error?.message, "error");
          }
          // Try again
          continue;
        }

        const {
          token,
          expirationSeconds,
        }: {
          token: string;
          expirationSeconds: number;
        } = await response.json();

        const expirationMs = Math.max(0, (expirationSeconds - 60) * 1000);

        this.accessToken = token;
        this.expirationDate = Date.now() + expirationMs;
      }
    } catch (e) {
      throw e;
    }

    if (this.isAccessTokenExpired()) {
      throw new Error(
        `Failed to get auth for ${this.providerName}. Please reauthorize ${this.providerName} App.`
      );
    }
  }

  public async getAccessToken(): Promise<string> {
    if (this.isAccessTokenExpired()) {
      await this.requestAccessToken();
    }

    return this.accessToken;
  }
}
