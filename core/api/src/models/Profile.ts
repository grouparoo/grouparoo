import {
  Table,
  Column,
  HasMany,
  BelongsToMany,
  AfterDestroy,
} from "sequelize-typescript";
import { log, api, task } from "actionhero";
import { LoggedModel } from "../classes/loggedModel";
import { GroupMember } from "./GroupMember";
import { Group } from "./Group";
import { Log } from "./Log";
import { Source } from "./Source";
import { ProfileProperty } from "./ProfileProperty";
import { ProfilePropertyRule } from "./ProfilePropertyRule";
import { Import } from "./Import";
import { Export } from "./Export";
import { Destination } from "./Destination";
import { Event } from "./Event";
import { waitForLock } from "../modules/locks";

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

  async addOrUpdateProperty(hash) {
    const key = Object.keys(hash)[0];
    const value = hash[key];

    // ignore reserved property key
    if (key === "_meta") {
      return;
    }

    const profilePropertyRules = await ProfilePropertyRule.cached();
    const rule = profilePropertyRules[key];

    if (!rule) {
      throw new Error(`cannot find a profile property rule for key ${key}`);
    }

    // Note: Lifecycle hooks do not fire on upserts, so we need to manually check if the property exists or not
    let property = await ProfileProperty.findOne({
      where: { profileGuid: this.guid, profilePropertyRuleGuid: rule.guid },
    });

    if (!property) {
      property = new ProfileProperty({
        profileGuid: this.guid,
        profilePropertyRuleGuid: rule.guid,
      });
    }

    await property.setValue(value);
    await property.save();
    return this;
  }

  async removeProperty(key: string) {
    const profilePropertyRules = await ProfilePropertyRule.cached();
    const rule = profilePropertyRules[key];

    if (!rule) {
      return;
    }

    const property = await ProfileProperty.findOne({
      where: { profileGuid: this.guid, profilePropertyRuleGuid: rule.guid },
    });

    if (property) {
      await property.destroy();
    }
  }

  async addOrUpdateProperties(properties: { [key: string]: any }) {
    await this.save();

    const keys = Object.keys(properties);
    for (const i in keys) {
      if (keys[i] === "guid") {
        continue;
      }

      const h = {};
      h[keys[i]] = properties[keys[i]];
      await this.addOrUpdateProperty(h);
    }

    return this;
  }

  async removeProperties(properties: Array<string>) {
    for (const i in properties) {
      await this.removeProperty(properties[i]);
    }
  }

  async properties(): Promise<{
    [key: string]: {
      guid: string;
      value: any;
      type: string;
      unique: boolean;
      createdAt: Date;
      updatedAt: Date;
    };
  }> {
    const profileProperties =
      this.profileProperties ||
      (await ProfileProperty.findAll({ where: { profileGuid: this.guid } }));

    const hash = {};
    for (const i in profileProperties) {
      try {
        const rule = await profileProperties[i].cachedProfilePropertyRule();
        const key = rule.key;
        hash[key] = {
          guid: profileProperties[i].profilePropertyRuleGuid,
          value: await profileProperties[i].getValue(),
          type: rule.type,
          unique: rule.unique,
          createdAt: profileProperties[i].createdAt,
          updatedAt: profileProperties[i].updatedAt,
        };
      } catch (error) {
        if (
          error
            .toString()
            .match(
              /cached profile property rule not found for this profilePropertyRuleGuid/
            )
        ) {
          // it's ok, we are in the middle of creating or destroying a profile property
          log(error, "info");
        } else {
          throw error;
        }
      }
    }

    return hash;
  }

  async import(toSave = true, toLock = true) {
    let releaseLock: Function;

    if (toLock) {
      const lockObject = await waitForLock(`profile:${this.guid}`);
      releaseLock = lockObject.releaseLock;
    }

    let hash = {};
    const sources = await Source.findAll({ where: { state: "ready" } });
    await Promise.all(
      sources.map((source) =>
        source.import(this).then((data) => (hash = Object.assign(hash, data)))
      )
    );

    if (toSave) {
      await this.addOrUpdateProperties(hash);
      await this.buildNullProperties();
      await this.save();
    }

    if (toLock) {
      releaseLock();
    }

    return this;
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

  async export(force = false, groupsOverride?: Group[]) {
    let oldSimpleProperties = {};
    let oldGroups = [];

    const groups = groupsOverride ? groupsOverride : await this.$get("groups");

    const destinations = await Destination.destinationsForGroups(groups);
    const properties = await this.properties();
    const simpleProperties = {};
    for (const i in properties) {
      simpleProperties[i] = properties[i].value;
    }

    if (!force) {
      const oldProperties = await this.properties();
      oldGroups = groups;

      for (const i in oldProperties) {
        oldSimpleProperties[i] = oldProperties[i].value;
      }
    }

    await Promise.all(
      destinations.map((destination) =>
        destination.exportProfile(
          this,
          null,
          [],
          oldSimpleProperties,
          simpleProperties,
          oldGroups,
          groups,
          true
        )
      )
    );
  }

  /**
   * The method you'll be using to create profiles with arbitrary data.
   * Hash looks like {email: "person@example.com", id: 123}
   */
  static async findOrCreateByUniqueProfileProperties(hash: {
    [key: string]: any;
  }) {
    let profile: Profile;
    let isNew: boolean;
    let profileProperty: ProfileProperty;
    const rules = await ProfilePropertyRule.cached();
    const uniquePropertiesHash = {};

    Object.keys(rules).forEach((key) => {
      if (rules[key].unique && hash[key]) {
        uniquePropertiesHash[key] = hash[key];
      }

      // and the case when we are sending a profile guid directly
      if (hash["guid"]) {
        uniquePropertiesHash["guid"] = hash["guid"];
      }
    });

    if (Object.keys(uniquePropertiesHash).length === 0) {
      throw new Error(
        `there are no unique profile properties provided in ${JSON.stringify(
          hash
        )}`
      );
    }

    // special handling when a guid is provided directly
    // for use with internal runs
    if (uniquePropertiesHash["guid"]) {
      profile = await Profile.findOne({
        where: { guid: uniquePropertiesHash["guid"] },
      });

      if (profile) {
        isNew = false;
        return { profile, isNew };
      } else {
        throw new Error(
          `cannot find profile with guid ${uniquePropertiesHash["guid"]}`
        );
      }
    }

    const keys = Object.keys(uniquePropertiesHash);
    const lockReleases = [];

    for (const i in keys) {
      const key = keys[i];
      const value = uniquePropertiesHash[key];
      const rule = rules[key];

      const { releaseLock } = await waitForLock(`prp:${key}:${value}`);
      lockReleases.push(releaseLock);

      profileProperty = await ProfileProperty.findOne({
        where: {
          profilePropertyRuleGuid: rule.guid,
          rawValue: String(value),
        },
      });

      if (profileProperty) {
        break;
      }
    }

    if (profileProperty) {
      profile = await Profile.findOne({
        where: { guid: profileProperty.profileGuid },
      });
      isNew = false;
    } else {
      profile = await Profile.create();
      await profile.addOrUpdateProperties(uniquePropertiesHash);
      isNew = true;
    }

    await Promise.all(lockReleases.map((release) => release()));

    return { profile, isNew };
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
    if (!instance) {
      throw new Error(`cannot find ${this.name} ${guid}`);
    }
    return instance;
  }

  static async merge(profile: Profile, otherProfile: Profile) {
    const { releaseLock: releaseLockForProfile } = await waitForLock(
      `profile:${profile.guid}`
    );
    const { releaseLock: releaseLockForOtherProfile } = await waitForLock(
      `profile:${otherProfile.guid}`
    );

    // transfer events
    let eventsCount = 1;
    while (eventsCount > 0) {
      const events = await otherProfile.$get("events", { limit: 1000 });
      eventsCount = events.length;
      await Promise.all(
        events.map((event) => {
          event.profileGuid = profile.guid;
          return event.save();
        })
      );
    }

    // transfer properties, keeping the newest values
    const properties = await profile.properties();
    const otherProperties = await otherProfile.properties();
    const newProperties = {};
    for (const key in otherProperties) {
      if (
        !properties[key] ||
        (otherProperties[key]?.updatedAt?.getTime() >
          properties[key]?.updatedAt?.getTime() &&
          otherProperties[key]?.value !== null &&
          otherProperties[key]?.value !== undefined)
      ) {
        newProperties[key] = otherProperties[key].value;
      }
    }

    // delete other profile so unique profile properties will be available
    await otherProfile.destroy();
    await profile.addOrUpdateProperties(newProperties);

    // transfer anonymousId
    if (!profile.anonymousId && otherProfile.anonymousId) {
      await profile.update({ anonymousId: otherProfile.anonymousId });
    }

    // re-import and update groups
    delete profile.profileProperties; // remove any cached values from the instance
    await profile.import(true, false);
    await profile.updateGroupMembership();

    // release locks
    await releaseLockForProfile();
    await releaseLockForOtherProfile();

    return profile;
  }
}
