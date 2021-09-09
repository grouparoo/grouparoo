import { api, config } from "actionhero";
import { Group } from "../../models/Group";
import { groupExportToCSV } from "../../modules/groupExport";
import { CLSTask } from "../../classes/tasks/clsTask";

export class GroupExportToCSV extends CLSTask {
  constructor() {
    super();
    this.name = "group:exportToCSV";
    this.description = "export group members to csv, and then upload that CSV";
    this.frequency = 0;
    this.queue = "groups";
    this.inputs = {
      groupId: { required: true },
      offset: { required: false },
      limit: { required: false },
    };
  }

  async runWithinTransaction(params) {
    const limit: number = params.limit || config.batchSize.imports;
    const group = await Group.findById(params.groupId);

    // TODO: this is going to take a long time...
    const { filename, cleanName } = await groupExportToCSV(group, limit);
    await api.files.set("csv", `${cleanName}.csv`, filename);
  }
}
