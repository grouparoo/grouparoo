import {
  Table,
  Column,
  HasMany,
  BelongsToMany,
  AfterDestroy,
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
import { ProfileOps } from "../modules/ops/profile";

@Table({ tableName: "profiles", paranoid: false })
export class Profile extends LoggedModel<Profile> {
  guidPrefix() {
    return "pro";
  }

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
      properties,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  async properties() {
    return ProfileOps.properties(this);
  }

  async addOrUpdateProperty(properties: { [key: string]: any }) {
    return ProfileOps.addOrUpdateProperty(this, properties);
  }

  async addOrUpdateProperties(properties: { [key: string]: any }) {
    return ProfileOps.addOrUpdateProperties(this, properties);
  }

  async removeProperty(key: string) {
    return ProfileOps.removeProperty(this, key);
  }

  async removeProperties(properties: Array<string>) {
    return ProfileOps.removeProperties(this, properties);
  }

  async buildNullProperties() {
    const properties = await this.properties();
    const rules = await ProfilePropertyRule.cached();
    let newPropertiesCount = 0;
    for (const key in rules) {
      if (!properties[key]) {
        await ProfileProperty.create({
          profileGuid: this.guid,
          profilePropertyRuleGuid: rules[key].guid,
        });
        newPropertiesCount++;
      }
    }

    return newPropertiesCount;
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

  async export(force = false, groupsOverride?: Group[]) {
    return ProfileOps._export(this, force, groupsOverride);
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
    let _exports = await instance.$get("exports");
    while (_exports.length > 0) {
      // need to loop 1-by-1 to afterDestroy hooks delete related importExport records
      await Promise.all(_exports.map((_export) => _export.destroy()));
      _exports = await instance.$get("exports");
    }
  }
}
