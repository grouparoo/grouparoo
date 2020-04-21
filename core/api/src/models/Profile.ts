import {
  Table,
  HasMany,
  BelongsToMany,
  AfterDestroy,
} from "sequelize-typescript";
import { log } from "actionhero";
import { LoggedModel } from "../classes/loggedModel";
import { GroupMember } from "./GroupMember";
import { Group } from "./Group";
import { Log } from "./Log";
import { Source } from "./Source";
import { ProfileProperty } from "./ProfileProperty";
import { ProfilePropertyRule } from "./ProfilePropertyRule";
import { Import } from "./Import";
import { Destination } from "./Destination";
import { waitForLock } from "../modules/locks";

@Table({ tableName: "profiles", paranoid: false })
export class Profile extends LoggedModel<Profile> {
  guidPrefix() {
    return "pro";
  }

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

  async apiData() {
    const properties = await this.properties();

    return {
      guid: this.guid,
      properties,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
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

    if (property) {
      await property.setValue(value);
      await property.save();
    } else {
      property = new ProfileProperty({
        profileGuid: this.guid,
        profilePropertyRuleGuid: rule.guid,
      });
      await property.setValue(value);
      await property.save();
    }

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
          log(error, "alert");
        } else {
          throw error;
        }
      }
    }

    return hash;
  }

  async import() {
    let hash = {};
    const sources = await Source.findAll({ where: { state: "ready" } });
    for (const i in sources) {
      hash = Object.assign(hash, await sources[i].import(this));
    }
    await this.addOrUpdateProperties(hash);
    await this.buildNullProperties();
    return this.save();
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

  async export(force = false) {
    let oldSimpleProperties = {};
    let oldGroups = [];

    const groups = await this.$get("groups");

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
          [],
          oldSimpleProperties,
          simpleProperties,
          oldGroups,
          groups
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
}
