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
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { GroupMember } from "./GroupMember";
import { Group } from "./Group";
import { Log } from "./Log";
import { RecordProperty } from "./RecordProperty";
import { Import } from "./Import";
import { Export } from "./Export";
import { StateMachine } from "../modules/stateMachine";
import { RecordOps } from "../modules/ops/record";
import { APIData } from "../modules/apiData";
import { GroupRule } from "./GroupRule";
import { RecordConfigurationObject } from "../classes/codeConfig";
import { Source } from "./Source";

const STATES = ["draft", "pending", "ready"] as const;

const STATE_TRANSITIONS = [
  { from: "draft", to: "pending", checks: [] },
  { from: "draft", to: "ready", checks: [] },
  {
    from: "pending",
    to: "ready",
    checks: [
      (instance: GrouparooRecord) =>
        instance.validateRecordPropertiesAreReady(),
    ],
  },
  { from: "ready", to: "pending", checks: [] },
];

@Table({ tableName: "records", paranoid: false })
export class GrouparooRecord extends LoggedModel<GrouparooRecord> {
  idPrefix() {
    return "rec";
  }

  @AllowNull(false)
  @Default("pending")
  @Column(DataType.ENUM(...STATES))
  state: typeof STATES[number];

  @AllowNull(false)
  @Default("x") // TODO
  @Column(DataType.STRING)
  modelId: string;

  @HasMany(() => RecordProperty)
  recordProperties: RecordProperty[];

  @HasMany(() => GroupMember)
  groupMembers: GroupMember[];

  @HasMany(() => Log)
  logs: Log[];

  @BelongsToMany(() => Group, () => GroupMember)
  groups: Group[];

  @HasMany(() => Import)
  imports: Import[];

  @HasMany(() => Export)
  exports: Export[];

  async apiData() {
    const properties = await this.getProperties();

    return {
      id: this.id,
      state: this.state,
      modelId: this.modelId,
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
      [key: string]: Array<string | boolean | number | Date>;
    } = {};

    for (const k in properties) simpleProperties[k] = properties[k].values;
    return simpleProperties;
  }

  async addOrUpdateProperties(
    properties: {
      [key: string]: Array<string | number | boolean | Date>;
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

  async removeProperties(properties: Array<string>) {
    return RecordOps.removeProperties(this, properties);
  }

  async buildNullProperties(state = "pending") {
    return RecordOps.buildNullProperties([this], state);
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
    oldGroupsOverride?: Group[],
    saveExports = true,
    sync = true
  ) {
    return RecordOps._export(this, force, oldGroupsOverride, saveExports, sync);
  }

  async logMessage(verb: "create" | "update" | "destroy") {
    let message = "";

    switch (verb) {
      case "create":
        message = `record created`;
        break;
      case "update":
        message = `record updated`;
        break;
      case "destroy":
        message = `record destroyed`;
        break;
    }

    return message;
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
    const properties = await this.getProperties();
    const directlyMappedProps: {
      [key: string]: Array<string | boolean | number | Date>;
    } = {};

    for (const k in properties) {
      const property = properties[k];
      if (property.directlyMapped && property.values.length > 0) {
        directlyMappedProps[property.configId] = property.values;
      }
    }

    return {
      id: this.id,
      class: "GrouparooRecord",
      properties: directlyMappedProps,
    };
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  static async findOrCreateByUniqueRecordProperties(
    hash: {
      [key: string]: Array<string | number | boolean | Date>;
    },
    source?: boolean | Source
  ) {
    return RecordOps.findOrCreateByUniqueRecordProperties(hash, source);
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
  static async removeFromDestinations(instance: GrouparooRecord) {
    await instance.export();
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

  @AfterDestroy
  static async destroyExports(instance: GrouparooRecord) {
    await Export.destroy({
      where: { recordId: instance.id },
    });
  }
}
