import {
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  BeforeCreate,
  DataType,
  BeforeSave,
  BeforeDestroy,
  DefaultScope,
  Default,
} from "sequelize-typescript";
import { Source } from "./Source";
import { ModelConfigurationObject } from "../classes/codeConfig";
import { LoggedModel } from "../classes/loggedModel";
import { APIData } from "../modules/apiData";
import { ConfigWriter } from "../modules/configWriter";
import { LockableHelper } from "../modules/lockableHelper";
import { Destination } from "./Destination";
import { Group } from "./Group";
import { RunOps } from "../modules/ops/runs";

export const ModelTypes = ["profile"] as const;
export type ModelType = typeof ModelTypes[number];

const STATES = ["ready", "deleted"] as const;
const STATE_TRANSITIONS = [
  { from: "ready", to: "deleted", checks: [] },
  {
    from: "deleted",
    to: "ready",
    checks: [],
  },
];

@DefaultScope(() => ({
  where: { state: "ready" },
}))
@Table({ tableName: "models", paranoid: false })
export class GrouparooModel extends LoggedModel<GrouparooModel> {
  idPrefix() {
    return "mod";
  }

  @Column({ primaryKey: true })
  id: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column(DataType.ENUM(...ModelTypes))
  type: ModelType;

  @AllowNull(true)
  @Column
  locked: string;

  @AllowNull(false)
  @Default("ready")
  @Column(DataType.ENUM(...STATES))
  state: typeof STATES[number];

  getIcon() {
    switch (this.type) {
      case "profile":
        return "user";
      default:
        throw new Error(`no icon for ${this.type} model`);
    }
  }

  async run(force = false, destinationId?: string) {
    return RunOps.run(this, force, destinationId);
  }

  async stopPreviousRuns() {
    return RunOps.stopPreviousRuns(this);
  }

  async apiData() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      state: this.state,
      locked: this.locked,
      icon: this.getIcon(),
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  getConfigId() {
    return this.idIsDefault() ? ConfigWriter.generateId(this.name) : this.id;
  }

  async getConfigObject(): Promise<ModelConfigurationObject> {
    if (!this.name) return;

    return {
      class: "Model",
      id: this.getConfigId(),
      name: this.name,
      type: this.type,
    };
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeCreate
  @BeforeSave
  static async ensureValidType(instance: GrouparooModel) {
    if (!ModelTypes.includes(instance.type)) {
      throw new Error(
        `${instance.type} is not a valid model type (${ModelTypes.join(", ")})`
      );
    }
  }

  @BeforeSave
  static async noUpdateIfLocked(instance) {
    await LockableHelper.beforeSave(instance);
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance) {
    await LockableHelper.beforeDestroy(instance);
  }

  @BeforeDestroy
  static async ensureNotInUse(instance: GrouparooModel) {
    const sources = await Source.scope(null).findAll({
      where: { modelId: instance.id },
    });
    if (sources.length > 0) {
      throw new Error(
        `cannot delete this model, source ${sources[0].id} relies on it`
      );
    }
    const destinations = await Destination.scope(null).findAll({
      where: { modelId: instance.id },
    });
    if (destinations.length > 0) {
      throw new Error(
        `cannot delete this model, destination ${destinations[0].id} relies on it`
      );
    }
    const groups = await Group.scope(null).findAll({
      where: { modelId: instance.id },
    });
    if (groups.length > 0) {
      throw new Error(
        `cannot delete this model, group ${groups[0].id} relies on it`
      );
    }
  }
}
