import { api, config } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Op } from "sequelize";
import { Group } from "../models/Group";
import { GroupMember } from "../models/GroupMember";
import { Log } from "../models/Log";
import { Import } from "../models/Import";
import { Export } from "../models/Export";
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
  Log,
  Profile,
  ProfileProperty,
  Run,
  Team,
  TeamMember,
};

function dateString(d: Date | string) {
  if (typeof d === "string") {
    d = new Date(d);
  }

  return d.toJSON().slice(0, 10);
}

function generateDates(
  start = new Date().setDate(new Date().getDate() - 30),
  end = new Date()
) {
  const results: string[] = [];
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

  async runWithinTransaction({ params }: { params: { model: string } }) {
    const dates = generateDates();
    const model: typeof Run = modelClasses[params.model]; // TODO: the type really could be any model
    if (!model) throw new Error(`cannot return totals for ${params.model}`);

    const total = await model.count();

    const groupStatement =
      config.sequelize.dialect === "postgres"
        ? api.sequelize.fn("date_trunc", "day", api.sequelize.col("createdAt"))
        : api.sequelize.literal(`strftime('%Y %m %d', \`createdAt\`)`);
    const rolling: Array<{ date: string; count: number }> = (
      await model.count({
        where: { createdAt: { [Op.gte]: new Date(dates[0]) } },
        group: [groupStatement],
      })
    )
      // @ts-ignore We use a custom group-by clause which returns more than one row as a result
      .map((row) => {
        const dateKey = Object.keys(row).find((r) => r !== "count");
        return {
          date: dateString(row[dateKey]),
          count: row.count,
        };
      });

    const returnedDates = rolling.map((r) => r.date);
    dates.forEach((date) => {
      if (returnedDates.indexOf(date) < 0) {
        rolling.push({ date, count: 0 });
      }
    });

    return {
      total,
      rolling: rolling.sort((a, b) => (b.date > a.date ? 1 : -1)),
    };
  }
}
