import { api } from "actionhero";
import { AuthenticatedAction } from "../classes/authenticatedAction";
import { Op } from "sequelize";
import { Group } from "../models/Group";
import { GroupMember } from "../models/GroupMember";
import { Log } from "../models/Log";
import { Import } from "../models/Import";
import { Export } from "../models/Export";
import { Event } from "../models/Event";
import { Profile } from "../models/Profile";
import { ProfileProperty } from "../models/ProfileProperty";
import { Run } from "../models/Run";
import { Team } from "../models/Team";
import { TeamMember } from "../models/TeamMember";

const modelClasses = {
  Group,
  GroupMember,
  Import,
  Export,
  Event,
  Log,
  Profile,
  ProfileProperty,
  Run,
  Team,
  TeamMember,
};

function dateString(d) {
  return d.toJSON().slice(0, 10);
}

function generateDates(
  start = new Date().setDate(new Date().getDate() - 30),
  end = new Date()
) {
  const results = [];
  const dt = new Date(start);

  while (dt <= end) {
    results.push(dateString(new Date(dt)));
    dt.setDate(dt.getDate() + 1);
  }

  return results;
}

export class TotalsAction extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "totals";
    this.description = "return counts for a model";
    this.outputExample = {};
    this.permission = { topic: "system", mode: "read" };
    this.inputs = {
      model: { required: true },
    };
  }

  async run({ params, response }) {
    response.totals = {};
    response.rolling = {};

    const dates = generateDates();
    const model = modelClasses[params.model];
    if (!model) throw new Error(`cannot return totals for ${params.model}`);

    response.total = await model.count();

    //@ts-ignore
    const rolling = await model
      .count({
        where: { createdAt: { [Op.gte]: new Date(dates[0]) } },
        group: [
          api.sequelize.fn("date_trunc", "day", api.sequelize.col("createdAt")),
        ],
      })
      .map((row) => {
        // @ts-ignore
        return {
          date: dateString(row.date_trunc),
          count: row.count,
        };
      });

    const returnedDates = rolling.map((r) => r.date);
    dates.forEach((date) => {
      if (returnedDates.indexOf(date) < 0) {
        rolling.push({ date, count: 0 });
      }
    });

    response.rolling = rolling.sort((a, b) => (b.date > a.date ? 1 : -1));
  }
}
