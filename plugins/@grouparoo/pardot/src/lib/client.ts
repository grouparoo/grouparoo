import axios, { AxiosInstance } from "axios";
import jsforce from "jsforce";

interface PardotClientOptions {
  businessUnitId: string;
  loginUrl?: string;
  pardotUrl?: string;
}

interface PardotCustomField {
  id: number;
  name: string;
  fieldId: string;
  type: string;
  isRecordMultipleResponses: boolean;
}

class PardotClient {
  private pardotUrl: string;
  private businessUnitId: string;

  conn: jsforce.Connection;
  request?: AxiosInstance;

  constructor(options?: PardotClientOptions) {
    this.pardotUrl = options?.pardotUrl || "https://pi.pardot.com";
    this.businessUnitId = options.businessUnitId;

    this.conn = new jsforce.Connection({
      loginUrl: options?.loginUrl || "https://login.salesforce.com",
    });
  }

  async login(username: string, password: string, securityToken?: string) {
    const fullPassword =
      (password || "").toString() + (securityToken || "").toString();

    await this.conn.login(username, fullPassword);

    this.request = axios.create({
      baseURL: `${this.pardotUrl}/api`,
      headers: {
        Authorization: `Bearer ${this.conn.accessToken}`,
        "Pardot-Business-Unit-Id": this.businessUnitId,
      },
    });
  }

  async getCustomFields(): Promise<PardotCustomField[]> {
    // TODO: This is paginated, with a limit up to 200.
    // &output=mobile apparently is NOT paginated, so we could try using that
    const res = await this.request.get(
      "/customField/version/4/do/query?format=json"
    );

    const { result } = res.data;

    const mapResult = (field: any): PardotCustomField => ({
      id: field.id,
      name: field.name,
      fieldId: field.field_id,
      type: field.type,
      isRecordMultipleResponses: field.is_record_multiple_responses,
    });

    if (result.total_results === 0) {
      return [];
    } else if (result.total_results === 1) {
      return [mapResult(result.customField)];
    }

    return result.customField.map(mapResult);
  }

  async queryProspects(
    options?: Record<string, any>
  ): Promise<Record<string, any>[]> {
    const res = await this.request.get("/prospect/version/4/do/query", {
      params: {
        format: "json",
        ...options,
      },
    });

    const { result } = res.data;
    if (result.total_results === 0) {
      return [];
    } else if (result.total_results === 1) {
      return [result.prospect];
    }

    return result.prospect;
  }

  async batchUpsertProspects(prospects: Record<string, any>[]) {
    const res = await this.request.post(
      "/prospect/version/4/do/batchUpsert",
      {},
      {
        params: {
          format: "json",
          prospects: JSON.stringify({
            prospects,
          }),
        },
      }
    );

    const errors: Record<string, string> = res.data.errors;
    return errors;
  }

  async deleteProspectById(prospectId: number) {
    await this.request.post(`/prospect/version/4/do/delete/id/${prospectId}`);
  }

  async getListByName(listName: string) {
    const res = await this.request.get("/list/version/4/do/query", {
      params: {
        format: "json",
        name: listName,
      },
    });

    const { result } = res.data;
    if (result.total_results === 1) {
      return result.list;
    } else if (result.total_results > 1) {
      // Name is unique, this should not occur
      throw new Error("Unexpectedly received more than one list by name");
    }

    return null;
  }
}

export default PardotClient;
