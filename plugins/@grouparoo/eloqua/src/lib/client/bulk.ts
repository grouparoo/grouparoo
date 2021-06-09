import EloquaClient from "./client";

export default class List {
  client: EloquaClient;

  constructor(client: EloquaClient) {
    this.client = client;
  }

  createImport(
    objectName: string,
    importName: string,
    fields: any,
    filter: string
  ) {
    return this.client._request({
      method: "POST",
      url: `/api/bulk/2.0/${objectName}/imports`,
      data: {
        fields,
        filter,
        name: importName,
        areSystemTimestampsInUTC: true,
      },
    });
  }

  createSync(importUri: string) {
    return this.client._request({
      method: "POST",
      url: "/api/bulk/2.0/syncs",
      data: { syncedInstanceUri: importUri },
    });
  }

  checkSync(syncUri: string) {
    return this.client._request({
      method: "GET",
      url: `/api/bulk/2.0${syncUri}`,
    });
  }

  async pollSync(syncUri: string): Promise<any> {
    const results = await this.checkSync(syncUri);
    const { status } = results;
    if (["active", "pending"].includes(status)) {
      await new Promise((resolve) => setTimeout(resolve, 10000));
      return this.pollSync(syncUri);
    }
    return results;
  }

  getSyncData(syncUri: string, limit: number = 1000, offset: number = 0) {
    return this.client._request({
      method: "GET",
      url: `/api/bulk/2.0${syncUri}/data`,
      params: { limit, offset },
    });
  }

  async completeImport(
    objectName: string,
    importName: string,
    fields: any,
    filter: string
  ) {
    const bulkImport = await this.createImport(
      objectName,
      importName,
      fields,
      filter
    );
    const sync = await this.createSync(bulkImport.uri);
    const syncUri = sync.uri;
    const results = await this.pollSync(syncUri);
    const { status } = results;
    return { syncUri, status };
  }

  async runImport(
    objectName: string,
    importName: string,
    fields: any,
    filter: string
  ) {
    const { status, syncUri } = await this.completeImport(
      objectName,
      importName,
      fields,
      filter
    );
    if (status === "success") {
      return this.getSyncData(syncUri);
    }
    return;
  }
}
