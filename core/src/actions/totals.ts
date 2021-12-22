import { config, ParamsFrom } from "actionhero";
import Sequelize from "sequelize";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { Op } from "sequelize";
import { Group } from "../models/Group";
import { GroupMember } from "../models/GroupMember";
import { Log } from "../models/Log";
import { Import } from "../models/Import";
import { Export } from "../models/Export";
import { GrouparooRecord } from "../models/GrouparooRecord";
import { RecordProperty } from "../models/RecordProperty";
import { Run } from "../models/Run";
import { Team } from "../models/Team";
import { TeamMember } from "../models/TeamMember";
import { ActionPermission } from "../models/Permission";

const modelClasses = {
  Group,
  GroupMember,
  Import,
  Export,
  Log,
  GrouparooRecord,
  RecordProperty,
  Run,
  Team,
  TeamMember,
} as const;

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
  name = "totals";
  description = "return counts for a model";
  outputExample = {};
  permission: ActionPermission = { topic: "system", mode: "read" };
  inputs = {
    model: { required: true },
  };

  async runWithinTransaction({ params }: { params: ParamsFrom<TotalsAction> }) {
    const dates = generateDates();
    //@ts-ignore
    const model: typeof Run = // TODO: the type really could be any model
      modelClasses[params.model as keyof typeof modelClasses];
    if (!model) throw new Error(`cannot return totals for ${params.model}`);

    const total = await model.count();

    const groupStatement =
      config.sequelize.dialect === "postgres"
        ? Sequelize.fn("date_trunc", "day", Sequelize.col("createdAt"))
        : (Sequelize.literal(
            `strftime('%Y %m %d', \`createdAt\`)`
          ) as unknown as string);
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
