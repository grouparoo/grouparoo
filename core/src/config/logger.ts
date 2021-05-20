import * as winston from "winston";

// learn more about winston v3 loggers @
// - https://github.com/winstonjs/winston
// - https://github.com/winstonjs/winston/blob/master/docs/transports.md

export const DEFAULT = {
  logger: (config) => {
    const loggers = [];
    loggers.push(buildConsoleLogger(process.env.GROUPAROO_LOG_LEVEL));
    config.general.paths.log.forEach((p) => {
      loggers.push(buildFileLogger(p));
    });

    return {
      loggers,
      maxLogStringLength: 100, // the maximum length of param to log (we will truncate)
      maxLogArrayLength: 10, // the maximum number of items in an array to log before collapsing into one message
    };
  },
};

export const test = {
  logger: (config) => {
    const loggers = [];
    loggers.push(buildConsoleLogger(process.env.GROUPAROO_LOG_LEVEL || "crit"));
    config.general.paths.log.forEach((p) => {
      loggers.push(buildFileLogger(p, "debug", 1));
    });

    return {
      loggers,
    };
  },
};

// helpers for building the winston loggers

function buildConsoleLogger(level = "info") {
  const formats = [];

  if (!disableColor()) formats.push(winston.format.colorize());
  if (!disableTimestamps()) formats.push(winston.format.timestamp());

  formats.push(
    winston.format.printf((info) => {
      return `${
        info.timestamp && !disableTimestamps() ? `${info.timestamp} - ` : ""
      }${info.level}: ${
        info.message
      } ${stringifyExtraMessagePropertiesForConsole(info)}`;
    })
  );

  return function (config) {
    return winston.createLogger({
      format: winston.format.combine(...formats),
      level,
      levels: winston.config.syslog.levels,
      transports: [new winston.transports.Console()],
    });
  };
}

function stringifyExtraMessagePropertiesForConsole(info) {
  const skippedProperties = ["message", "timestamp", "level"];
  let response = "";

  for (const key in info) {
    const value = info[key];
    if (skippedProperties.includes(key)) {
      continue;
    }
    if (value === undefined || value === null || value === "") {
      continue;
    }
    response += `${key}=${value} `;
  }

  return response;
}

function buildFileLogger(path, level = "info", maxFiles = undefined) {
  return function (config) {
    const filename = `${path}/${config.process.id}-${config.process.env}.log`;
    return winston.createLogger({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
      level,
      levels: winston.config.syslog.levels,
      transports: [
        new winston.transports.File({
          filename,
          maxFiles,
        }),
      ],
    });
  };
}

const disableColor = () =>
  process.env.GROUPAROO_LOGS_STDOUT_DISABLE_COLOR?.toLowerCase() === "true";
const disableTimestamps = () =>
  process.env.GROUPAROO_LOGS_STDOUT_DISABLE_TIMESTAMP?.toLowerCase() === "true";
