// Note: There are some imports here from './index rather than the Models themselves.
// This is important to prevent a circular-dependency tree that won't load.
// You can test this with `npm prepare && npm start` if you change the import statements back to the models.

import { api, Initializer, log } from "actionhero";
import { ProfilePropertyRule } from "../index";
import { plugin } from "../modules/plugin";
import { SourceOptionsMethodResponse } from "../classes/plugin";
import { App } from "../models/App";
import { Event } from "../models/Event";
import { EventData } from "../models/EventData";
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
          maxInstances: 1,
          minInstances: 1,
          methods: {
            test: async () => {
              return { success: (await Event.count()) >= 0 };
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
    await addEventsApp();
  }
}

const eventSourceOptions: SourceOptionsMethod = async () => {
  const sourceOptions: SourceOptionsMethodResponse = {
    type: { type: "list", options: [] },
  };
  const types = await Event.getTypes();
  types.map((type) => {
    sourceOptions.type.options.push(type);
  });
  return sourceOptions;
};

const eventSourcePreview: SourcePreviewMethod = async ({ sourceOptions }) => {
  const limit = 25;
  const events = await Event.findAll({
    where: {
      type: sourceOptions.type,
    },
    include: [EventData],
    limit,
  });

  // we only want to show users some of the properties in the preview
  const eventPreviews = [];
  for (const i in events) {
    const e = events[i];
    eventPreviews.push({
      profileGuid: e.profileGuid,
      type: e.type,
      userId: e.userId,
      ipAddress: e.ipAddress,
      occurredAt: e.occurredAt,
      data: await e.getData(),
    });
  }

  // attempt to typecast to numbers
  // TODO: This is not a good way to guess types... what about dates and booleans?
  for (const i in eventPreviews) {
    for (const k in eventPreviews[i]["data"]) {
      const float = parseFloat(eventPreviews[i]["data"][k]);
      if (!isNaN(float)) {
        eventPreviews[i]["data"][k] = float;
      }
    }
  }

  return eventPreviews;
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

  const dataKeys = await Event.dataKeys(args.sourceOptions.type);
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
    displayName: "Column",
    required: true,
    description: "where the data comes from",
    type: "typeahead",
    options: eventProfilePropertyRuleOptionOptions,
  },
  {
    key: "aggregationMethod",
    displayName: "Aggregation Method",
    required: true,
    description: "how we combine the data",
    type: "list",
    options: async () => {
      return [
        {
          key: "all values",
          description:
            "collect all values from all events (use with an array profile property)",
        },
        {
          key: "most recent value",
          description: "use the value of the newest event",
        },
        {
          key: "least recent value",
          description: "use the value of the oldest event",
        },
        { key: "avg", description: "take the average" },
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
    const example = optionsWithExamples[i].examples.filter(
      (e) => e !== null
    )[0];

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
  let events: Event[];
  if (!profilePropertyRuleOptions["column"]) return;
  if (!profilePropertyRuleOptions["aggregationMethod"]) return;

  const dataKey = profilePropertyRuleOptions["column"].replace(
    /^\[data\]-/,
    ""
  );
  const aggregationMethod = profilePropertyRuleOptions["aggregationMethod"];

  if (aggregationMethod === "all values") {
    const where = { profileGuid: profile.guid, type: sourceOptions["type"] };
    const includeWhere = {};
    Event.applyProfilePropertyRuleFilters(
      where,
      includeWhere,
      profilePropertyRuleFilters
    );
    events = await Event.findAll({
      where,
      include:
        Object.keys(includeWhere).length > 0
          ? [
              {
                model: EventData,
                required: true,
                where: includeWhere,
                attributes: [],
              },
            ]
          : undefined,
      order: [["occurredAt", "asc"]],
    });
  } else if (aggregationMethod === "most recent value") {
    const where = { profileGuid: profile.guid, type: sourceOptions["type"] };
    const includeWhere = {};
    Event.applyProfilePropertyRuleFilters(
      where,
      includeWhere,
      profilePropertyRuleFilters
    );
    events = await Event.findAll({
      where,
      include:
        Object.keys(includeWhere).length > 0
          ? [
              {
                model: EventData,
                required: true,
                where: includeWhere,
                attributes: [],
              },
            ]
          : undefined,
      order: [["occurredAt", "desc"]],
      limit: 1,
    });
  } else if (aggregationMethod === "least recent value") {
    const where = { profileGuid: profile.guid, type: sourceOptions["type"] };
    const includeWhere = {};
    Event.applyProfilePropertyRuleFilters(
      where,
      includeWhere,
      profilePropertyRuleFilters
    );
    events = await Event.findAll({
      where,
      include:
        Object.keys(includeWhere).length > 0
          ? [
              {
                model: EventData,
                required: true,
                where: includeWhere,
                attributes: [],
              },
            ]
          : undefined,
      order: [["occurredAt", "asc"]],
      limit: 1,
    });
  } else {
    if (!profilePropertyRuleOptions["column"].match(/^\[data\]-/)) {
      throw new Error(
        "aggregation method not available outside of event data properties"
      );
    }

    const where = { key: dataKey };
    const includeWhere = {
      profileGuid: profile.guid,
      type: sourceOptions["type"],
    };

    Event.applyProfilePropertyRuleFilters(
      includeWhere,
      where,
      profilePropertyRuleFilters
    );

    if (aggregationMethod === "count") {
      const count = await EventData.count({
        where,
        include: [
          {
            model: Event,
            required: true,
            where: includeWhere,
            attributes: [],
          },
        ],
      });
      return [count];
    } else {
      const results = await EventData.findAll({
        where,
        attributes: [
          [
            api.sequelize.fn(
              aggregationMethod,
              api.sequelize.cast(api.sequelize.col("value"), "float")
            ),
            "value",
          ],
        ],
        group: ["key"],
        include: [
          {
            model: Event,
            required: true,
            where: includeWhere,
            attributes: [],
          },
        ],
      });

      return results[0] ? [results[0].value] : [0];
    }
  }

  if (!events) {
    return null;
  } else {
    if (profilePropertyRuleOptions["column"].match(/^\[data\]-/)) {
      const eventData = await Promise.all(events.map((e) => e.getData()));
      return eventData
        .map((eventData) => eventData[dataKey])
        .map((value) => {
          try {
            const parsed = JSON.parse(value);
            if (Array.isArray(parsed)) return parsed;
            return value;
          } catch (e) {
            return value;
          }
        })
        .flat();
    } else {
      return events.map((event) => event[profilePropertyRuleOptions["column"]]);
    }
  }
};

async function addEventsApp() {
  let eventsApp = await App.scope(null).findOne({
    where: { type: "events" },
  });

  if (!eventsApp) {
    eventsApp = App.build({
      type: "events",
      name: "Grouparoo Events",
      state: "draft",
    });
    App.generateGuid(eventsApp);
    // @ts-ignore
    await eventsApp.save({ hooks: false });
    log(`created events app (${eventsApp.guid})`);
  }
}
