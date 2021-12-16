import { Initializer, loggers, id, env } from "actionhero";
import { URL } from "url";
import * as winston from "winston";
import WinstonCloudWatch from "winston-cloudwatch";

const packageJSON = require("./../../package.json");

export default class CloudwatchInitializer extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
    this.loadPriority = 1;
  }

  async initialize() {
    if (!process.env.AWS_ACCESS_KEY_ID) return;
    if (!process.env.AWS_SECRET_ACCESS_KEY) return;
    if (!process.env.AWS_REGION) return;

    // try to extract the name of the instance from the URL we are using
    // we could alternatively use the ClusterName setting
    let name = `grouparoo-${env}`;
    if (process.env.WEB_URL) {
      const parsed = new URL(process.env.WEB_URL);
      name = parsed.host.split(":")[0].replace(/\./g, "-") + `-${env}`;
    }

    const cloudwatchLogger = new WinstonCloudWatch({
      name,
      level: process.env.GROUPAROO_LOG_LEVEL ?? "notice",
      logGroupName: name,
      logStreamName: () => {
        let date = new Date().toISOString().split("T")[0];
        return `${name}-${id}-${date}`;
      },
      jsonMessage: true,
      retentionInDays: process.env.AWS_CLOUDWATCH_LOG_RETENTION_DAYS
        ? parseInt(process.env.AWS_CLOUDWATCH_LOG_RETENTION_DAYS)
        : 90, // store the logs for 90 days by default
      awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
      awsSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
      awsRegion: process.env.AWS_REGION,
    });

    // stop method from https://github.com/lazywithclass/winston-cloudwatch#programmatically-flush-logs-and-exit
    cloudwatchLogger.kthxbye = () => {};

    const preparedLogger = winston.createLogger({
      levels: winston.config.syslog.levels,
      transports: [cloudwatchLogger],
    });

    loggers.push(preparedLogger);
  }
}
