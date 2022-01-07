import Mixpanel from "./mixpanel";

export interface MixpanelDataResponse {
  results?: any[];
}

export default class Profile {
  client: Mixpanel;
  baseUrl: string;

  constructor(client: Mixpanel, baseUrl: string) {
    this.client = client;
    this.baseUrl = baseUrl;
  }

  async getByDistinctId(distinctId: string) {
    const response: MixpanelDataResponse = await this.client._request({
      method: "POST",
      url: `/api/2.0/engage`,
      params: { project_id: this.client.projectId },
      data: { distinct_id: distinctId },
      baseURL: this.baseUrl,
    });
    if (response?.results?.length > 0) {
      return response.results[0];
    }
    return null;
  }

  async getByDistinctIds(distinctIds: string[]) {
    const response: MixpanelDataResponse = await this.client._request({
      method: "POST",
      url: `/api/2.0/engage`,
      params: { project_id: this.client.projectId },
      baseURL: this.baseUrl,
      data: { distinct_ids: distinctIds },
    });
    if (response?.results?.length > 0) {
      return response.results;
    }
    return [];
  }

  async getSavedCohorts() {
    return await this.client._request({
      method: "POST",
      url: `/api/2.0/cohorts/list`,
      params: { project_id: this.client.projectId },
      baseURL: this.baseUrl,
      data: {},
    });
  }

  async update(distinctId, data) {
    data = {
      $token: this.client.token,
      $distinct_id: distinctId,
      $set: data,
    };
    const response = await this.client._request({
      method: "POST",
      url: `/engage#profile-set`,
      baseURL: this.baseUrl,
      data: `data=${JSON.stringify(data)}`,
    });
    if (response === 0) {
      throw new Error(
        `Something went wrong updating the profile represented by ${data.$distinct_id}.`
      );
    }
    return response;
  }

  async delete(distinctId) {
    const data = {
      $token: this.client.token,
      $distinct_id: distinctId,
      $delete: "",
      $ignore_alias: false,
    };
    const response = await this.client._request({
      method: "POST",
      url: `/engage#profile-delete`,
      baseURL: this.baseUrl,
      data: `data=${JSON.stringify(data)}`,
    });
    if (response === 0) {
      throw new Error(
        `Something went wrong deleting the profile represented by ${distinctId}.`
      );
    }
    return response;
  }
}
