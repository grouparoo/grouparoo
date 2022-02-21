import {
  Table,
  Column,
  HasMany,
  BelongsToMany,
  AfterDestroy,
  BeforeSave,
  DataType,
  AllowNull,
  Default,
  AfterCreate,
  BelongsTo,
  ForeignKey,
  BeforeCreate,
} from "sequelize-typescript";
import { GroupMember } from "./GroupMember";
import { Group } from "./Group";
import { RecordProperty } from "./RecordProperty";
import { Import } from "./Import";
import { Export } from "./Export";
import { StateMachine } from "../modules/stateMachine";
import { RecordOps } from "../modules/ops/record";
import { APIData } from "../modules/apiData";
import { GroupRule } from "./GroupRule";
import { RecordConfigurationObject } from "../classes/codeConfig";
import { Source } from "./Source";
import { GrouparooModel } from "./GrouparooModel";
import { ModelGuard } from "../modules/modelGuard";
import { CommonModel } from "../classes/commonModel";

const STATES = ["draft", "pending", "ready", "deleted"] as const;

const STATE_TRANSITIONS = [
  { from: "draft", to: "pending", checks: [] },
  { from: "draft", to: "ready", checks: [] },
  {
    from: "pending",
    to: "ready",
    checks: [
      async (instance: GrouparooRecord) =>
        await instance.validateRecordPropertiesAreReady(),
    ],
  },
  { from: "ready", to: "pending", checks: [] },
  { from: "draft", to: "deleted", checks: [] },
  { from: "pending", to: "deleted", checks: [] },
  { from: "ready", to: "deleted", checks: [] },
];

@Table({ tableName: "records", paranoid: false })
export class GrouparooRecord extends CommonModel<GrouparooRecord> {
  idPrefix() {
    return "rec";
  }

  @AllowNull(false)
  @Default("pending")
  @Column(DataType.ENUM(...STATES))
  state: typeof STATES[number];

  @AllowNull(false)
  @Default(false)
  @Column(DataType.BOOLEAN)
  invalid: boolean;

  @AllowNull(false)
  @ForeignKey(() => GrouparooModel)
  @Column
  modelId: string;

  @HasMany(() => RecordProperty)
  recordProperties: RecordProperty[];

  @HasMany(() => GroupMember)
  groupMembers: GroupMember[];

  @BelongsToMany(() => Group, () => GroupMember)
  groups: Group[];

  @BelongsTo(() => GrouparooModel)
  model: GrouparooModel;

  @HasMany(() => Import)
  imports: Import[];

  @HasMany(() => Export)
  exports: Export[];

  async apiData() {
    const model = await this.$get("model");
    const properties = await this.getProperties();
    const groups = await this.$get("groups");

    return {
      id: this.id,
      state: this.state,
      modelId: this.modelId,
      modelName: model.name,
      groupIds: groups.map((g) => g.id),
      invalid: this.invalid,
      properties,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  async getProperties() {
    return RecordOps.getProperties(this);
  }

  async simplifiedProperties() {
    const properties = await this.getProperties();
    const simpleProperties: {
      [key: string]: (string | boolean | number | Date)[];
    } = {};

    for (const k in properties) simpleProperties[k] = properties[k].values;
    return simpleProperties;
  }

  async addOrUpdateProperties(
    properties: {
      [key: string]: (string | number | boolean | Date)[];
    },
    toLock = true,
    ignoreMissingProperties = false
  ) {
    return RecordOps.addOrUpdateProperties(
      [this],
      [properties],
      toLock,
      ignoreMissingProperties
    );
  }

  async removeProperty(key: string) {
    return RecordOps.removeProperty(this, key);
  }

  async removeProperties(properties: string[]) {
    return RecordOps.removeProperties(this, properties);
  }

  async buildNullProperties(state: RecordProperty["state"] = "pending") {
    if (this.state !== "deleted") {
      return RecordOps.buildNullProperties([this], state);
    }
  }

  async markPending() {
    await RecordOps.markPendingByIds([this.id]);
    await this.reload();
  }

  async sync(force = true, toExport = true) {
    return RecordOps.sync(this, force, toExport);
  }

  async snapshot(saveExports = false) {
    const exports = await this.sync(undefined, saveExports);
    const properties = await this.getProperties();
    const groups = await this.$get("groups", { include: [GroupRule] });
    const groupApiData = (
      await Promise.all(groups.map((g) => g.apiData()))
    ).sort((a, b) => (a.name > b.name ? 1 : -1));
    const exportsApiData = (
      await Promise.all(exports.map((e) => e.apiData(false)))
    ).sort((a, b) => (a.destinationName > b.destinationName ? 1 : -1));

    return { properties, groups: groupApiData, exports: exportsApiData };
  }

  async updateGroupMembership() {
    const data = await RecordOps.updateGroupMemberships([this]);
    return data[this.id];
  }

  async import(toSave = true, toLock = true) {
    return RecordOps._import(this, toSave, toLock);
  }

  async export(
    force = false,
    additionalGroups?: Group[],
    saveExports = true,
    sync = true,
    toDelete?: boolean
  ) {
    return RecordOps._export(
      this,
      force,
      additionalGroups,
      saveExports,
      sync,
      toDelete
    );
  }

  async validateRecordPropertiesAreReady() {
    const properties = await this.getProperties();
    for (const k in properties) {
      if (properties[k].state !== "ready") {
        throw new Error(
          `cannot transition record ${this.id} to ready state as not all properties are ready (${k})`
        );
      }
    }
  }

  async getConfigObject(): Promise<RecordConfigurationObject> {
    this.model = await this.$get("model");
    const modelId = this.model?.getConfigId();
    const properties = await this.getProperties();
    const primaryKeyProperties: Record<
      string,
      (string | boolean | number | Date)[]
    > = {};

    for (const k in properties) {
      const property = properties[k];
      if (property.isPrimaryKey && property.values.length > 0) {
        primaryKeyProperties[property.configId] = property.values;
      }
    }

    if (!modelId) return;
    if (
      Object.keys(primaryKeyProperties).length === 0 ||
      Object.values(primaryKeyProperties)
        .flat()
        .filter((v) => v !== undefined && v !== null).length === 0
    ) {
      return;
    }

    return {
      id: this.id,
      class: "Record",
      modelId,
      properties: primaryKeyProperties,
    };
  }

  // --- Class Methods --- //

  static async findOrCreateByUniqueRecordProperties(
    hash: {
      [key: string]: (string | number | boolean | Date)[];
    },
    source?: boolean | Source
  ) {
    const response = await RecordOps.findOrCreateByUniqueRecordProperties(
      [hash],
      ["_"],
      source
    );
    if (response[0]?.error) throw response[0]?.error;
    return response[0];
  }

  @BeforeCreate
  @BeforeSave
  static async ensureModel(instance: GrouparooRecord) {
    return ModelGuard.check(instance);
  }

  @BeforeSave
  static async updateState(instance: GrouparooRecord) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @AfterCreate
  static async buildNullPropertiesForNewRecord(instance: GrouparooRecord) {
    await instance.buildNullProperties();
  }

  @AfterDestroy
  static async destroyRecordProperties(instance: GrouparooRecord) {
    await RecordProperty.destroy({
      where: { recordId: instance.id },
    });
  }

  @AfterDestroy
  static async destroyGroupMembers(instance: GrouparooRecord) {
    await GroupMember.destroy({
      where: { recordId: instance.id },
    });
  }

  @AfterDestroy
  static async destroyImports(instance: GrouparooRecord) {
    await Import.destroy({
      where: { recordId: instance.id },
    });
  }
}
