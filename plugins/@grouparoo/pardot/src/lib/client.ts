import axios, { AxiosInstance } from "axios";
import { escapeXML } from "./utils";

interface PardotClientOptions {
  businessUnitId: string;
  loginUrl?: string;
  pardotUrl?: string;
}

interface SalesforceUserInfo {
  organizationName: string;
  userFullName: string;
}

class PardotClient {
  private loginUrl: string;
  private pardotUrl: string;
  private businessUnitId: string;

  userInfo?: SalesforceUserInfo;
  request?: AxiosInstance;

  constructor(options?: PardotClientOptions) {
    this.loginUrl = options?.loginUrl || "https://login.salesforce.com";
    this.pardotUrl = options?.pardotUrl || "https://pi.pardot.com";
    this.businessUnitId = options.businessUnitId;
  }

  // Salesforce SOAP Login
  async login(username: string, password: string, securityToken?: string) {
    const fullPassword =
      (password || "").toString() + (securityToken || "").toString();

    try {
      const res = await axios.post(
        `${this.loginUrl}/services/Soap/u/51.0`,
        `<?xml version="1.0" encoding="utf-8" ?>
        <env:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xmlns:env="http://schemas.xmlsoap.org/soap/envelope/">
          <env:Body>
            <login xmlns="urn:partner.soap.sforce.com">
              <username>${escapeXML(username)}</username>
              <password>${escapeXML(fullPassword)}</password>
            </login>
          </env:Body>
        </env:Envelope>
        `,
        {
          headers: {
            "Content-Type": "text/xml",
            Accept: "text/xml",
            SOAPAction: "login",
          },
        }
      );

      const tokenMatch = res.data.match(/<sessionId>([^<]+)<\/sessionId>/);
      const accessToken = tokenMatch && tokenMatch[1];

      const orgNameMatch = res.data.match(
        /<organizationName>([^<]+)<\/organizationName>/
      );
      const organizationName = orgNameMatch && orgNameMatch[1];

      const userNameMatch = res.data.match(
        /<userFullName>([^<]+)<\/userFullName>/
      );
      const userFullName = userNameMatch && userNameMatch[1];

      this.userInfo = {
        organizationName,
        userFullName,
      };

      this.request = axios.create({
        baseURL: `${this.pardotUrl}/api`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Pardot-Business-Unit-Id": this.businessUnitId,
        },
      });
    } catch (err) {
      if (err?.response?.status >= 400) {
        const faultMatch = err.response.data?.match(
          /<faultstring>([^<]+)<\/faultstring>/
        );
        const faultString = faultMatch && faultMatch[1];
        throw new Error(faultString || err.response.data);
      }

      throw err;
    }
  }

  async getProspects() {
    const res = await this.request.get(
      "/prospect/version/4/do/query?format=json"
    );
    return res.data.result;
  }
}

export default PardotClient;
