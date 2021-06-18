import EloquaClient from "./client";

export default class List {
  client: EloquaClient;
  objectName: string;

  constructor(client: EloquaClient, objectName: string) {
    this.client = client;
    this.objectName = objectName;
  }

  createImport(importName: string, identifierFieldName: string, fields: any) {
    return this.client._request({
      method: "POST",
      url: `/api/bulk/2.0/${this.objectName}/imports`,
      data: {
        name: importName,
        identifierFieldName,
        areSystemTimestampsInUTC: true,
        isSyncTriggeredOnImport: false,
        isUpdatingMultipleMatchedRecords: true,
        fields,
      },
    });
  }

  importData(importUri: string, data) {
    return this.client._request({
      method: "POST",
      url: `/api/bulk/2.0${importUri}/data`,
      data,
    });
  }

  getSyncData(syncUri: string, limit: number = 50000, offset: number = 0) {
    return this.client._request({
      method: "GET",
      url: `/api/bulk/2.0${syncUri}/data`,
      params: { limit, offset },
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
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return this.pollSync(syncUri);
    }
    return results;
  }

  async completeImport(objectName: string, importName: string, filter: string) {
    const bulkImport = await this.createImport(objectName, importName, filter);
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
      filter
    );
    if (status === "success") {
      return this.getSyncData(syncUri);
    }
    return;
  }
}
