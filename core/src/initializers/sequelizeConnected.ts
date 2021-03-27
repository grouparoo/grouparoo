import { log, Initializer, api } from "actionhero";

export class SequelizeConnected extends Initializer {
  constructor() {
    super();
    this.name = "sequelizeConnected";
    this.loadPriority = 202; // just after ah-sequelize
  }

  async initialize() {
    const sequelize = api.sequelize;
    switch (sequelize.options.dialect) {
      case "sqlite":
        //return this.sqlite(sequelize);
        return;
      default:
        return;
    }
  }

  async sqlite(sequelize) {
    // https://sqlite.org/wal.html
    // helps with concurrency
    try {
      await sequelize.query("PRAGMA journal_mode=WAL;");
    } catch (err) {
      // it can still work without this, but it's less than ideal so just log
      log(err, "error");
    }
  }
}
