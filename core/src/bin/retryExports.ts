import Moment from "moment";
import { CLI, ParamsFrom } from "actionhero";
import { GrouparooCLI } from "../modules/cli";
import { APIData } from "../modules/apiData";
import { Export } from "../models/Export";
import { Destination } from "../models/Destination";

export class RetryExportsCLI extends CLI {
  name = "retryExports";
  description =
    "Marks failed Exports that were created in a given time frame to be retried.";
  inputs = {
    start: {
      required: false,
      formatter: APIData.formatDate,
      description:
        "Search for failed Exports created on or after this timestamp. Used in combination with `--end` to specify a time range.",
    },
    startAgoSeconds: {
      required: false,
      description:
        "Search for failed Exports created on or after this timestamp. Used in combination with `--end` to specify a time range.",
    },
    end: {
      required: false,
      formatter: APIData.formatDate,
      description:
        "Search for failed Exports created on or before this timestamp. Used in combination with `--start` to specify a time range. Defaults to now.",
    },
    preview: {
      default: false,
      formatter: APIData.ensureBoolean,
      description:
        "When set, will not make any changes and only outputs the number of Exports that would be retried.",
      flag: true,
      letter: "p",
    },
    destinationId: {
      description:
        "Only retry Exports for a specific Destination. Defaults to all Destinations.",
      letter: "d",
      required: false,
    },
  };

  constructor() {
    super();
    GrouparooCLI.timestampOption(this);
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.setNextDevelopmentMode();
  };

  parseDate() {}

  async run({ params }: { params: ParamsFrom<RetryExportsCLI> }) {
    GrouparooCLI.logCLI(this.name, false);

    const hasRelativeStart = params.startAgoSeconds !== undefined;
    const hasAbsoluteStart = params.start !== null;

    if (
      (hasRelativeStart && hasAbsoluteStart) ||
      (!hasRelativeStart && !hasAbsoluteStart)
    ) {
      return GrouparooCLI.logger.fatal(
        "One of --start or --startAgoSeconds must be specified"
      );
    }

    const startAgoSeconds = Number(params.startAgoSeconds);

    if (hasAbsoluteStart && Number.isNaN(params.start))
      return GrouparooCLI.logger.fatal(`Invalid start date specified`);
    if (Number.isNaN(params.end))
      return GrouparooCLI.logger.fatal(`Invalid end date specified`);
    if (hasRelativeStart && Number.isNaN(startAgoSeconds))
      return GrouparooCLI.logger.fatal(`--startAgoSeconds must be a number`);

    let destination: Destination;
    if (params.destinationId) {
      destination = await Destination.findById(params.destinationId);
    }

    const startDate = hasAbsoluteStart
      ? new Date(params.start)
      : Moment().subtract(startAgoSeconds, "seconds").toDate();
    const endDate = params.end ? new Date(params.end) : new Date();

    GrouparooCLI.logger.log(`Searching for failed Exports:\n`);
    GrouparooCLI.logger.log(`Start: ${startDate.toLocaleString()}`);
    GrouparooCLI.logger.log(`End: ${endDate.toLocaleString()}`);
    if (destination) {
      GrouparooCLI.logger.log(
        `Destination: ${destination.name} (${destination.id})`
      );
    }

    const count = await Export.retryFailed(
      startDate,
      endDate,
      destination,
      !params.preview
    );

    GrouparooCLI.logger.log("");

    if (params.preview) {
      GrouparooCLI.logger.log(
        `ℹ️  (Preview) Found ${count} failed Exports to retry.`
      );
    } else {
      if (count) {
        GrouparooCLI.logger.log(
          `✅ ${count} failed Exports marked to be retried.`
        );
      } else {
        GrouparooCLI.logger.log(`✅ No failed Exports found.`);
      }
    }

    return true;
  }
}
