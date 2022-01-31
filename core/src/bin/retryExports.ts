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
      requiredValue: true,
      formatter: APIData.ensureDate,
      description:
        "Search for failed Exports created on or after this timestamp.",
    },
    startAgo: {
      required: false,
      requiredValue: true,
      formatter: APIData.ensureNumber,
      description:
        "Search for failed Exports created on or after a certain number of seconds ago. See --startAgoUnit to choose a different time unit.",
    },
    startAgoUnit: {
      required: false,
      requiredValue: true,
      default: "second",
      description:
        "Unit for --startAgo (e.g. seconds, minutes, hours, days...)",
      formatter: (val: string) => {
        const normalized = Moment.normalizeUnits(val as Moment.unitOfTime.Base);
        return normalized as Moment.unitOfTime.Base;
      },
      validator: (val: string) => {
        if (!val) throw new Error(`invalid unit of time`);
      },
    },
    end: {
      required: false,
      requiredValue: true,
      formatter: APIData.ensureDate,
      description:
        "Search for failed Exports created on or before this timestamp. Defaults to the current time.",
    },
    preview: {
      default: false,
      formatter: (val: any) => val as boolean,
      description:
        "When set, will not make any changes and only outputs the number of Exports that would be retried.",
      flag: true,
      letter: "p",
    },
    destinationIds: {
      required: false,
      requiredValue: true,
      description:
        "Only retry Exports for specific Destinations. Defaults to all Destinations.",
      letter: "d",
      variadic: true,
    },
  } as const;

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

    const hasRelativeStart = params.startAgo !== undefined;
    const hasAbsoluteStart = params.start !== undefined;

    if (
      (hasRelativeStart && hasAbsoluteStart) ||
      (!hasRelativeStart && !hasAbsoluteStart)
    ) {
      return GrouparooCLI.logger.fatal(
        "One of --start or --startAgo must be specified"
      );
    }

    const startDate =
      params.start ??
      Moment().subtract(params.startAgo, params.startAgoUnit).toDate();
    const endDate = params.end ?? new Date();

    GrouparooCLI.logger.log(`Searching for failed Exports:\n`);
    GrouparooCLI.logger.log(
      `Start: ${startDate.toLocaleString()} ${
        params.startAgo
          ? `(${params.startAgo} ${params.startAgoUnit}s ago)`
          : ""
      }`
    );
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

    if (summaryItems.length) {
      GrouparooCLI.logger.status("Summary", summaryItems);
    } else {
      GrouparooCLI.logger.log("\nNo Destinations\n");
    }

    if (params.preview) {
      GrouparooCLI.logger.log(
        `ℹ️  (Preview) Found ${totalCount} failed Exports to retry.`
      );
    } else {
      if (totalCount) {
        GrouparooCLI.logger.log(
          `✅ Success! ${totalCount} failed Exports marked to be retried. Run \`grouparoo run\` or \`grouparoo start\` to retry them.`
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
