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
} from "sequelize-typescript";
import { task } from "actionhero";
import { LoggedModel } from "../classes/loggedModel";
import { GroupMember } from "./GroupMember";
import { Group } from "./Group";
import { Log } from "./Log";
import { ProfileProperty } from "./ProfileProperty";
import { ProfilePropertyRule } from "./ProfilePropertyRule";
import { Import } from "./Import";
import { Export } from "./Export";
import { Event } from "./Event";
import { StateMachine } from "./../modules/stateMachine";
import { ProfileOps } from "../modules/ops/profile";

const STATES = ["draft", "pending", "ready"] as const;

const STATE_TRANSITIONS = [
  { from: "draft", to: "pending", checks: [] },
  { from: "draft", to: "ready", checks: [] },
  { from: "pending", to: "ready", checks: [] },
  { from: "ready", to: "pending", checks: [] },
];

@Table({ tableName: "profiles", paranoid: false })
export class Profile extends LoggedModel<Profile> {
  guidPrefix() {
    return "pro";
  }

  @AllowNull(false)
  @Default("pending")
  @Column(DataType.ENUM(...STATES))
  state: typeof STATES[number];

  @Column
  anonymousId: string;

  @HasMany(() => ProfileProperty)
  profileProperties: ProfileProperty[];

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

  @HasMany(() => Event, "profileGuid")
  events: Event[];

  async apiData() {
    const properties = await this.properties();

    return {
      guid: this.guid,
      anonymousId: this.anonymousId,
      state: this.state,
      properties,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  async properties() {
    return ProfileOps.properties(this);
  }

  async addOrUpdateProperty(properties: {
    [key: string]: Array<string | number | boolean | Date>;
  }) {
    return ProfileOps.addOrUpdateProperty(this, properties);
  }

  async addOrUpdateProperties(properties: {
    [key: string]: Array<string | number | boolean | Date>;
  }) {
    return ProfileOps.addOrUpdateProperties(this, properties);
  }

  async removeProperty(key: string) {
    return ProfileOps.removeProperty(this, key);
  }

  async removeProperties(properties: Array<string>) {
    return ProfileOps.removeProperties(this, properties);
  }

  async buildNullProperties() {
    return ProfileOps.buildNullProperties(this);
  }

  async updateGroupMembership() {
    const results = {};
    const groups = await Group.scope("notDraft").findAll();

    for (const i in groups) {
      const group = groups[i];
      const belongs = await group.updateProfileMembership(this);
      results[group.guid] = belongs;
    }

    return results;
  }

  async import(toSave = true, toLock = true) {
    return ProfileOps._import(this, toSave, toLock);
  }

  async export(force = false, oldGroupsOverride?: Group[]) {
    return ProfileOps._export(this, force, oldGroupsOverride);
  }

  async logMessage(verb: "create" | "update" | "destroy") {
    let message = "";

    switch (verb) {
      case "create":
        message = `profile created`;
        break;
      case "update":
        message = `profile updated`;
        break;
      case "destroy":
        message = `profile destroyed`;
        break;
    }

    return message;
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeSave
  static async updateState(instance: Profile) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @AfterDestroy
  static async removeFromDestinations(instance: Profile) {
    await instance.export(false, []);
  }

  @AfterDestroy
  static async destroyProfileProperties(instance: Profile) {
    await ProfileProperty.destroy({
      where: { profileGuid: instance.guid },
    });
  }

  @AfterDestroy
  static async destroyGroupMembers(instance: Profile) {
    await GroupMember.destroy({
      where: { profileGuid: instance.guid },
    });
  }

  @AfterDestroy
  static async destroyEvents(instance: Profile) {
    await task.enqueue("profile:destroyEvents", {
      guid: instance.guid,
    });
  }

  @AfterDestroy
  static async destroyImports(instance: Profile) {
    await Import.destroy({
      where: { profileGuid: instance.guid },
    });
  }

  @AfterDestroy
  static async destroyExports(instance: Profile) {
    await Export.destroy({ where: { profileGuid: instance.guid } });
  }
}
