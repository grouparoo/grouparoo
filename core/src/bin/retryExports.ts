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
        "Search for failed Exports created on or after this timestamp.",
    },
    startAgoSeconds: {
      required: false,
      description:
        "Search for failed Exports created on or after a certain number of seconds ago.",
    },
    end: {
      required: false,
      formatter: APIData.formatDate,
      description:
        "Search for failed Exports created on or before this timestamp. Defaults to the current time.",
    },
    preview: {
      default: false,
      formatter: APIData.ensureBoolean,
      description:
        "When set, will not make any changes and only outputs the number of Exports that would be retried.",
      flag: true,
      letter: "p",
    },
    destinationIds: {
      required: false,
      formatter: (val: any) => val as boolean | string[],
      description:
        "Only retry Exports for specific Destinations. Defaults to all Destinations.",
      letter: "d",
      variadic: true,
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

  async run({ params }: { params: Partial<ParamsFrom<RetryExportsCLI>> }) {
    GrouparooCLI.logCLI(this.name, false);

    const hasRelativeStart =
      params.startAgoSeconds !== undefined && params.startAgoSeconds !== null;
    const hasAbsoluteStart =
      params.start !== undefined && params.start !== null;

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

    if (typeof params.destinationIds === "boolean") {
      return GrouparooCLI.logger.fatal(
        `Please specify which destination ids to check or remove the --destinationIds param to check all Destinations.`
      );
    }

    const startDate = hasAbsoluteStart
      ? new Date(params.start)
      : Moment().subtract(startAgoSeconds, "seconds").toDate();
    const endDate = params.end ? new Date(params.end) : new Date();

    GrouparooCLI.logger.log(`Searching for failed Exports:\n`);
    GrouparooCLI.logger.log(`Start: ${startDate.toLocaleString()}`);
    GrouparooCLI.logger.log(`End: ${endDate.toLocaleString()}`);

    const summaryItems: GrouparooCLI.LogStatusArray = [];

    const destinations = await this.getDestinations(params.destinationIds);
    let totalCount = 0;
    for (const destination of destinations) {
      const count = await Export.retryFailed(
        startDate,
        endDate,
        destination,
        !params.preview
      );

      summaryItems.push({
        header: `${destination.name} (${destination.id})`,
        status: { "Failed Exports": [count] },
      });

      totalCount += count;
    }

    GrouparooCLI.logger.status("Summary", summaryItems);

    if (params.preview) {
      GrouparooCLI.logger.log(
        `ℹ️  (Preview) Found ${totalCount} failed Exports to retry.`
      );
    } else {
      if (totalCount) {
        GrouparooCLI.logger.log(
          `✅ Success! ${totalCount} failed Exports marked to be retried.`
        );
      } else {
        GrouparooCLI.logger.log(
          `✨ Success! No failed Exports found to retry.`
        );
      }
    }

    return true;
  }

  async getDestinations(destinationIds?: string[]) {
    const destinations = await Destination.findAll({
      where: destinationIds ? { id: destinationIds } : {},
    });

    if (destinationIds) {
      const foundDestinationIds = destinations.map((d) => d.id);
      destinationIds.forEach((id) => {
        if (!foundDestinationIds.includes(id))
          return GrouparooCLI.logger.fatal(
            `Destination with id "${id}" was not found`
          );
      });
    }

    return destinations;
  }
}
