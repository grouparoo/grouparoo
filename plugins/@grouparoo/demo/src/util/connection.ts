export default class Connection {
  constructor() {}
  getAppOptions(): any {
    return {};
  }
  async disconnect(): Promise<void> {}
  async connect(): Promise<any> {
    return null;
  }
  async createTable(
    tableName: string,
    userId: string,
    keys: string[]
  ): Promise<void> {}
  async insertRow(
    tableName: string,
    keys: string[],
    row: { [key: string]: string | number | Date }
  ): Promise<void> {}
  defaultConfigDir() {
    return null;
  }
}
