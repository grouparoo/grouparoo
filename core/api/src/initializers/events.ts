import { api, Initializer, task } from "actionhero";
import { ProfilePropertyRule } from "../index";
import { plugin } from "../modules/plugin";
import { addEventsApp, EventPrototype } from "../classes/events";
import {
  SourceOptionsMethod,
  SourcePreviewMethod,
  PluginConnectionProfilePropertyRuleOption,
  SourceFilterMethod,
  ProfilePropertyPluginMethod,
} from "./../index";

export class Events extends Initializer {
  constructor() {
    super();
    this.name = "events";
    this.startPriority = 200;
  }

  async initialize() {
    api.events = {
      backend: undefined,
      model: undefined,
    };

    // add the plugin
    plugin.registerPlugin({
      name: "@grouparoo/core/events",
      icon: "/public/@grouparoo/events/events.png",
      apps: [
        {
          name: "events",
          options: [
            {
              key: "identifyingProfilePropertyRuleGuid",
              required: true,
              description:
                "The profile property rule which will map to the event field 'userId'.  Only unique profile property rules can be used.",
            },
          ],
          addible: false,
          methods: {
            test: async () => {
              return api.events.model.count();
            },
            appOptions: async () => {
              const uniqueRules = await ProfilePropertyRule.findAll({
                where: { unique: true },
              });

              return {
                identifyingProfilePropertyRuleGuid: {
                  type: "list",
                  options: uniqueRules.map((rule) => rule.guid),
                  descriptions: uniqueRules.map((rule) => rule.key),
                },
              };
            },
          },
        },
      ],
      connections: [
        {
          name: "events-table-import",
          direction: "import",
          description: "import or update profiles from Grouparoo events",
          app: "events",
          skipSourceMapping: true,
          options: [
            {
              key: "type",
              required: true,
              description: "the type of event to use",
            },
          ],
          profilePropertyRuleOptions: eventProfilePropertyRuleOptions,
          methods: {
            sourceOptions: eventSourceOptions,
            sourcePreview: eventSourcePreview,
            sourceFilters: eventSourceFilters,
            profileProperty: eventProfileProperty,
          },
        },
      ],
    });
  }

  async start() {
    // default to sequelizeEvents if no event backend was loaded by a plugin
    if (!api.events.backend) {
      const {
        Event,
        EventBackend,
      } = require("../classes/eventBackendSequelize");

      api.events.backend = new EventBackend();
      api.events.model = Event;
    }

    // wrap event#save to include enqueuing the processing task
    const eventSaveMethod = api.events.model.prototype.save;
    api.events.model.prototype.save = async function (...args) {
      await eventSaveMethod.apply(this, args);
      await task.enqueue("event:associateProfile", { eventGuid: this.guid });
      return this;
    };

    await api.events.backend?.start();
    await addEventsApp();
  }

  async stop() {
    await api.events.backend?.stop();
  }
}

const eventSourceOptions: SourceOptionsMethod = async () => {
  const sourceOptions = {
    type: { type: "list", options: [] },
  };
  const types: string[] = await api.events.model.types({ limit: null });
  types.map((type) => {
    sourceOptions.type.options.push(type);
  });
  return sourceOptions;
};

const eventSourcePreview: SourcePreviewMethod = async ({ sourceOptions }) => {
  const limit = 25;
  const events: EventPrototype[] = await api.events.model.findAll({
    type: sourceOptions.type,
    limit,
  });
  return events;
};

const eventProfilePropertyRuleOptionOptions = async (args) => {
  const rows = await eventSourcePreview(args);
  const columns = ["ipAddress", "type", "userId", "occurredAt"];
  const result = columns.map((col) => {
    return {
      key: col,
      examples: rows.map((row) => row[col]),
    };
  });

  const dataKeys: string[] = await api.events.model.dataKeys(
    args.sourceOptions.type
  );
  dataKeys.map((dataKey) => {
    result.push({
      key: `[data]-${dataKey}`,
      examples: rows.map((row) => row.data[dataKey]),
    });
  });

  return result;
};

const eventProfilePropertyRuleOptions: PluginConnectionProfilePropertyRuleOption[] = [
  {
    key: "column",
    required: true,
    description: "where the data comes from",
    type: "list",
    options: eventProfilePropertyRuleOptionOptions,
  },
  {
    key: "aggregation method",
    required: true,
    description: "how we combine the data",
    type: "list",
    options: async () => {
      return [
        {
          key: "exact-most-recent",
          description: "use the value of the newest event",
        },
        {
          key: "exact-least-recent",
          description: "use the value of the oldest event",
        },
        { key: "average", description: "take the average" },
        { key: "count", description: "count the occurrences" },
        { key: "sum", description: "add it up" },
        { key: "min", description: "find the smallest value" },
        { key: "max", description: "find the largest value" },
      ];
    },
  },
];

const eventSourceFilters: SourceFilterMethod = async (args) => {
  const options = [];
  const optionsWithExamples = await eventProfilePropertyRuleOptionOptions(args);
  for (const i in optionsWithExamples) {
    const ops = ["equals", "does not equal"];
    const example = optionsWithExamples[i].examples[0];

    if (typeof example === "string") {
      ops.push("contains");
      ops.push("does not contain");
    } else if (typeof example === "number") {
      ops.push("greater than");
      ops.push("less than");
    } else if (example instanceof Date) {
      ops.push("greater than");
      ops.push("less than");
    }

    options.push({
      key: optionsWithExamples[i].key,
      ops: ops,
      canHaveRelativeMatch: false,
    });
  }

  return options;
};

const eventProfileProperty: ProfilePropertyPluginMethod = async ({
  profile,
  sourceOptions,
  profilePropertyRuleOptions,
  profilePropertyRuleFilters,
}) => {
  let event: EventPrototype;
  const dataKey = profilePropertyRuleOptions["column"].replace(
    /^\[data\]-/,
    ""
  );

  if (
    profilePropertyRuleOptions["aggregation method"] === "exact-most-recent"
  ) {
    event = (
      await api.events.model.findAll({
        profileGuid: profile.guid,
        type: sourceOptions["type"],
        order: [["occurredAt", "desc"]],
        limit: 1,
      })
    )[0];
  } else if (
    profilePropertyRuleOptions["aggregation method"] === "exact-least-recent"
  ) {
    event = (
      await api.events.model.findAll({
        profileGuid: profile.guid,
        type: sourceOptions["type"],
        order: [["occurredAt", "asc"]],
        limit: 1,
      })
    )[0];
  } else {
    if (!profilePropertyRuleOptions["column"].match(/^\[data\]-/)) {
      throw new Error(
        "aggregation method not available outside of event data properties"
      );
    }

    return api.events.model.aggregateEventData({
      profileGuid: profile.guid,
      type: sourceOptions["type"],
      aggregation: profilePropertyRuleOptions["aggregation method"],
      key: dataKey,
    });
  }

  if (!event) {
    return null;
  } else {
    if (profilePropertyRuleOptions["column"].match(/^\[data\]-/)) {
      return event.data[dataKey];
    } else {
      return event[profilePropertyRuleOptions["column"]];
    }
  }
};
