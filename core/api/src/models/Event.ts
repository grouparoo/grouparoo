import {
  Table,
  Column,
  Index,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  BeforeCreate,
  BelongsTo,
  HasMany,
  AfterCreate,
  AfterDestroy,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { Op } from "sequelize";
import { EventData } from "./EventData";
import { Profile } from "./Profile";
import { ProfileProperty } from "./ProfileProperty";
import {
  ProfilePropertyRule,
  ProfilePropertyRuleFiltersWithKey,
} from "./ProfilePropertyRule";
import * as uuid from "uuid";
import { api, task } from "actionhero";

@Table({ tableName: "events", paranoid: false })
export class Event extends LoggedModel<Event> {
  guidPrefix() {
    return "evt";
  }

  @AllowNull(false)
  @Column
  producerGuid: string;

  @AllowNull(true)
  @Index
  @Column
  profileGuid: string;

  @AllowNull(true)
  @Index
  @Column
  ipAddress: string;

  @AllowNull(false)
  @Index
  @Column
  type: string;

  @AllowNull(true)
  @Column
  userId: string;

  @AllowNull(true)
  @Column
  anonymousId: string;

  @AllowNull(true)
  @Column
  occurredAt: Date;

  @AllowNull(true)
  @Column
  profileAssociatedAt: Date;

  @HasMany(() => EventData, "eventGuid")
  eventData: EventData[];

  @BelongsTo(() => Profile, "profileGuid")
  profile: Profile;

  @BeforeCreate
  static generateGuid(instance: Event) {
    if (!instance.guid) {
      instance.guid = `${instance.guidPrefix()}_${uuid.v4()}`;
    }
  }

  @AfterCreate
  static async enqueueAssociateEvent(instance: Event) {
    await task.enqueue("event:associateProfile", { eventGuid: instance.guid });
  }

  @AfterDestroy
  static async destroyOptions(instance: Event) {
    return EventData.destroy({
      where: {
        eventGuid: instance.guid,
      },
    });
  }

  async getData() {
    const eventData = this.eventData || (await this.$get("eventData"));
    const data = {};
    eventData.forEach((eventData) => {
      data[eventData.key] = eventData.value;
    });
    return data;
  }

  async setData(data: { [key: string]: any }) {
    const transaction = await api.sequelize.transaction();

    for (const key in data) {
      const eventData = new EventData({
        eventGuid: this.guid,
        key,
        value: data[key].toString(),
      });
      await eventData.save({ transaction });
    }

    await transaction.commit();
  }

  async associate(identifyingProfilePropertyRuleGuid: string) {
    // find the cached profile property rule
    const profilePropertyRules = await ProfilePropertyRule.cached();
    const profilePropertyRuleCacheKey = Object.keys(
      profilePropertyRules
    ).filter(
      (key) =>
        profilePropertyRules[key].guid === identifyingProfilePropertyRuleGuid
    )[0];
    const profilePropertyRule =
      profilePropertyRules[profilePropertyRuleCacheKey];

    if (this.profileGuid) {
      // we are already identified
      try {
        const profile = await this.$get("profile");
        await this.updateProfile(profile);
        return profile;
      } catch (error) {
        // the event may have been moved to another profile
        const updatedEvent = await this.reload();
        if (updatedEvent.profileGuid !== this.profileGuid) {
          return updatedEvent.associate(updatedEvent.profileGuid);
        } else {
          throw error;
        }
      }
    } else if (this.userId) {
      // we have a userId (primaryIdentifyingProfilePropertyRule)
      let profile = await Profile.findOne({
        include: [
          {
            model: ProfileProperty,
            where: {
              rawValue: this.userId,
              profilePropertyRuleGuid: profilePropertyRule.guid,
            },
          },
        ],
      });

      if (!profile) {
        [profile] = await Profile.findOrCreate({
          where: { anonymousId: this.anonymousId },
        });
      }

      const profileProperties = {};
      profileProperties[profilePropertyRule.key] = this.userId;
      await profile.addOrUpdateProperties(profileProperties);

      this.profileGuid = profile.guid;
      this.profileAssociatedAt = new Date();
      await this.save();

      const otherProfileWithAnonymousId = await Profile.findOne({
        where: {
          guid: { [Op.ne]: profile.guid },
          anonymousId: this.anonymousId,
        },
      });
      if (!otherProfileWithAnonymousId) {
        await profile.update({ anonymousId: this.anonymousId });
      } else {
        await Profile.merge(profile, otherProfileWithAnonymousId);
      }

      await this.updateProfile(profile);
      return profile;
    } else if (this.anonymousId) {
      // we have an anonymousId

      // can we find the profile by anonymousId?
      let profile = await Profile.findOne({
        where: { anonymousId: this.anonymousId },
      });

      // can we find the profile from other events with the same anonymousId?
      if (!profile) {
        const event = await Event.findOne({
          where: {
            anonymousId: this.anonymousId,
            profileGuid: { [Op.ne]: null },
          },
        });
        if (event) {
          profile = await Profile.findOne({
            where: { guid: event.profileGuid },
          });
        }
      }

      // if we still don't have a profile, make a new one
      if (!profile) {
        [profile] = await Profile.findOrCreate({
          where: { anonymousId: this.anonymousId },
        });
      }

      this.profileGuid = profile.guid;
      this.profileAssociatedAt = new Date();
      await this.save();
      await this.updateProfile(profile);
      return profile;
    } else {
      // we can't identify this event
      throw new Error(
        "cannot associate a profile without profileGuid, userId, or anonymousId"
      );
    }
  }

  async updateProfile(profile: Profile) {
    return task.enqueue("profile:importAndUpdate", { guid: profile.guid });
  }

  async apiData() {
    const data = await this.getData();

    return {
      guid: this.guid,
      type: this.type,
      producerGuid: this.producerGuid,
      profileGuid: this.profileGuid,
      ipAddress: this.ipAddress,
      userId: this.userId,
      anonymousId: this.anonymousId,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      occurredAt: this.occurredAt ? this.occurredAt.getTime() : null,
      profileAssociatedAt: this.profileAssociatedAt
        ? this.profileAssociatedAt.getTime()
        : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
      data,
    };
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) {
      throw new Error(`cannot find ${this.name} ${guid}`);
    }
    return instance;
  }

  static async getTypes(where = {}, limit?, offset?, order?) {
    const events = await Event.findAll({
      attributes: [
        [api.sequelize.fn("DISTINCT", api.sequelize.col("type")), "type"],
      ],
      where,
      limit: limit ? limit : null,
      offset: offset ? offset : null,
      order: order ? order : [["type", "asc"]],
    });

    return events.map((e) => e.type);
  }

  static async dataKeys(type: string) {
    const results = await EventData.findAll({
      attributes: [
        [api.sequelize.fn("DISTINCT", api.sequelize.col("key")), "key"],
      ],
      group: ["key"],
      include: [
        {
          model: Event,
          required: true,
          where: { type },
          attributes: [],
        },
      ],
    });

    return results.map((r) => r.key).sort();
  }

  static async applyProfilePropertyRuleFilters(
    eventWhere: { [key: string]: any },
    eventDataWhere: { [key: string]: any },
    profilePropertyRuleFilters: ProfilePropertyRuleFiltersWithKey[]
  ) {
    for (const i in profilePropertyRuleFilters) {
      const filter = profilePropertyRuleFilters[i];
      let key = filter.key;
      if (key.match(/^\[data\]-/)) {
        key = key.replace(/^\[data\]-/, "");
      }

      let match = filter.match;
      let opSymbol: any; // symbol...
      switch (filter.op) {
        case "equals":
          opSymbol = Op["eq"];
          break;
        case "does not equal":
          opSymbol = Op["ne"];
          break;
        case "contains":
          opSymbol = Op["iLike"];
          match = `%${match.toString().toLowerCase()}%`;
          key = `LOWER("${key}")`;
          break;
        case "does not contain":
          opSymbol = Op["notILike"];
          match = `%${match.toString().toLowerCase()}%`;
          key = `LOWER("${key}")`;
          break;
        case "greater than":
          opSymbol = Op["gt"];
          break;
        case "less than":
          opSymbol = Op["lt"];
          break;
      }

      const localWhere = {};
      if (filter.key.match(/^\[data\]-/)) {
        localWhere[opSymbol] = match;
        eventDataWhere["value"] = localWhere;
      } else {
        localWhere[opSymbol] = match;
        eventWhere[key] = localWhere;
      }
    }
  }
}
