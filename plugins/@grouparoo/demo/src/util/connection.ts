export default class Connection {
  seed: boolean;
  constructor() {
    this.seed = false;
  }
  getAppOptions(): any {
    return {};
  }
  seeding() {
    this.seed = true;
  }
  seedOnly(): boolean {
    return false;
  }
  isWriting(): boolean {
    if (!this.seed && this.seedOnly()) {
      return false;
    }
    return true;
  }
  async sessionStart(): Promise<void> {}
  async sessionEnd(): Promise<void> {}
  async disconnect(): Promise<void> {}
  async connect(): Promise<any> {
    return null;
  }
  async createTable(
    tableName: string,
    typeColumn: string,
    keys: string[]
  ): Promise<void> {}
  async insertRow(
    tableName: string,
    keys: string[],
    row: { [key: string]: string | number | Date }
  ): Promise<void> {}
  name() {
    return null;
  }
}
