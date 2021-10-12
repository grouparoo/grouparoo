import axios, { AxiosInstance } from "axios";
import jsforce from "jsforce";
import FormData from "form-data";

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

  constructor(options: PardotClientOptions) {
    this.pardotUrl = options.pardotUrl || "https://pi.pardot.com";
    this.businessUnitId = options.businessUnitId;

    this.conn = new jsforce.Connection({
      loginUrl: options.loginUrl || "https://login.salesforce.com",
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
    const res = await this.request.get<Record<string, any>>(
      "/customField/version/4/do/query",
      {
        params: {
          format: "json",
          output: "mobile", // mobile output does not require pagination
        },
      }
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

  async getProspectByEmail(email: string) {
    try {
      const res = await this.request.get<Record<string, any>>(
        `/prospect/version/4/do/read/email/${encodeURIComponent(email)}`,
        {
          params: {
            format: "json",
          },
        }
      );

      if (Array.isArray(res.data.prospect)) {
        return res.data.prospect[0];
      }

      return res.data.prospect;
    } catch (error) {
      if (
        error.response?.status === 400 &&
        error.response?.data["@attributes"]?.err_code === 4
      ) {
        return null;
      }

      throw error;
    }
  }

  async getProspectById(id: number) {
    try {
      const res = await this.request.get<Record<string, any>>(
        `/prospect/version/4/do/read/id/${id}`,
        {
          params: {
            format: "json",
          },
        }
      );

      if (Array.isArray(res.data.prospect)) {
        return res.data.prospect[0];
      }

      return res.data.prospect;
    } catch (error) {
      if (
        error.response?.status === 400 &&
        error.response?.data["@attributes"]?.err_code === 4
      ) {
        return null;
      }

      throw error;
    }
  }

  async queryProspects(
    options?: Record<string, any>
  ): Promise<Record<string, any>[]> {
    const res = await this.request.get<Record<string, any>>(
      "/prospect/version/4/do/query",
      {
        params: {
          format: "json",
          ...options,
        },
      }
    );

    const { result } = res.data;
    if (result.total_results === 0) {
      return [];
    } else if (result.total_results === 1) {
      return [result.prospect];
    }

    return result.prospect;
  }

  async batchUpsertProspects(prospects: Record<string, any>[]) {
    const form = new FormData();
    form.append("prospects", JSON.stringify({ prospects }));

    const res = await this.request.post<Record<string, any>>(
      "/prospect/version/4/do/batchUpsert",
      form,
      {
        headers: form.getHeaders(),
        params: {
          format: "json",
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
    const res = await this.request.get<Record<string, any>>(
      "/list/version/4/do/query",
      {
        params: {
          format: "json",
          name: listName,
        },
      }
    );

    const { result } = res.data;

    if (result.total_results === 1) {
      return result.list;
    } else if (result.total_results >= 1) {
      return result.list[0];
    }

    return null;
  }

  async createList(listName: string): Promise<Record<string, any>> {
    const res = await this.request.post<Record<string, any>>(
      "/list/version/4/do/create",
      {},
      {
        params: {
          format: "json",
          name: listName,
        },
      }
    );

    const response = res.data;

    if (response.err) {
      throw new Error(response.err);
    }

    return response.list;
  }
}

export default PardotClient;
