import { log, task } from "actionhero";
import { App } from "../models/App";
import { Profile } from "../models/Profile";
import { ProfileProperty } from "../models/ProfileProperty";
import { Import } from "../models/Import";
import { ProfilePropertyRule } from "../models/ProfilePropertyRule";
import { Op } from "sequelize";
import * as uuid from "uuid";

export interface EventArgs {
  guid?: string;
  producerGuid?: string;
  profileGuid?: string;
  ipAddress?: string;
  createdAt?: Date;
  updatedAt?: Date;
  occurredAt?: Date;
  profileAssociatedAt?: Date;
  type?: string;
  userId?: string;
  anonymousId?: string;
  data?: { [key: string]: any };
}

export interface EventPrototype extends EventArgs {
  /**
   * CLASS METHODS
   */

  findByGuid: (guid: string) => Promise<Event>;
  findAll: (options: {
    profileGuid?: string;
    ipAddress?: string;
    type?: string;
    data?: { [key: string]: any };
    associated?: boolean;
    limit?: number;
    offset?: number;
    order?: Array<[string, string]>;
  }) => Promise<EventPrototype[]>;
  count: (options: {
    profileGuid?: string;
    ipAddress?: string;
    type?: string;
    associated?: boolean;
    data?: { [key: string]: any };
  }) => Promise<number>;
  types: (options: {
    match?: string;
    limit?: number;
    offset?: number;
    order?: Array<[string, string]>;
  }) => Promise<string[]>;
  dataKeys: (type) => Promise<string[]>;
  countEventData: (options: {
    profileGuid?: string;
    type?: string;
    key: string;
  }) => Promise<number>;
  aggregateEventData: (options: {
    aggregation: "sum" | "min" | "max";
    profileGuid?: string;
    type?: string;
    key: string;
  }) => Promise<number>;
  destroyFor: (options: {
    profileGuid?: string;
    type?: string;
    before?: Date;
  }) => Promise<number>;
}

export abstract class EventPrototype {
  constructor(args: EventArgs) {
    Object.assign(this, args);
    this.guid = this.guid || `evt_${uuid.v4()}`;
    return this;
  }

  /**
   * INSTANCE METHODS
   */

  // general methods
  abstract async save(): Promise<EventPrototype>;
  abstract async reload(): Promise<EventPrototype>;
  abstract async destroy(): Promise<void>;

  // profile methods
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
      const profile = await this.getProfile();
      await this.updateProfile(profile);
      return profile;
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
      const [profile] = await Profile.findOrCreate({
        where: { anonymousId: this.anonymousId },
      });
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
    await task.enqueue("profile:importAndUpdate", { guid: profile.guid });
  }

  async getProfile() {
    return Profile.findByGuid(this.profileGuid);
  }
}

export interface EventDataArgs {
  guid?: string;
  eventGuid: string;
  key: string;
  value: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface EventDataPrototype extends EventDataArgs {}

export abstract class EventDataPrototype {
  constructor(args: EventDataArgs) {
    Object.assign(this, args);
    this.guid = this.guid || `edt_${uuid.v4()}`;
    return this;
  }

  abstract async save(): Promise<EventDataPrototype>;
  abstract async destroy(): Promise<void>;
}

export abstract class EventBackendPrototype {
  // lifecycle hooks
  abstract async start?(): Promise<void>;
  abstract async stop?(): Promise<void>;
}

export async function addEventsApp() {
  let eventsApp = await App.scope(null).findOne({
    where: {
      type: "events",
    },
  });
  if (!eventsApp) {
    eventsApp = App.build({
      type: "events",
      name: "events",
      state: "draft",
    });
    App.generateGuid(eventsApp);
    // @ts-ignore
    await eventsApp.save({ hooks: false });
    log("created events app");
  }
}
