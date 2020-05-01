import { ProfileProperty } from "../models/ProfileProperty";
import { ProfilePropertyRule } from "../models/ProfilePropertyRule";
import uuid from "uuid/v4";

// we need to use the Model classes from the plugin helper to ensure they've been attache to the core sequelzie instance
import { plugin } from "../index";

export interface EventArgs {
  guid?: string;
  producerGuid?: string;
  profileGuid?: string;
  ipAddress?: string;
  createdAt?: Date;
  updatedAt?: Date;
  occurredAt?: Date;
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
    limit?: number;
    offset?: number;
    order?: string[];
  }) => Promise<EventPrototype[]>;
}

export abstract class EventPrototype {
  constructor(args: EventArgs) {
    Object.assign(this, args);
    this.guid = this.guid || `evt_${uuid()}`;
    return this;
  }

  /**
   * INSTANCE METHODS
   */

  // general methods
  abstract async save(): Promise<EventPrototype>;
  abstract async reload(): Promise<EventPrototype>;
  abstract async destroy(): Promise<boolean>;

  // profile methods
  async associate(primaryIdentifyingProfilePropertyRule: ProfilePropertyRule) {
    const { Profile } = plugin.models();

    if (this.profileGuid) {
      // we are already identified
      return this.getProfile();
    } else if (this.userId) {
      // we have a userId (primaryIdentifyingProfilePropertyRule)
      let profile = await Profile.findOne({
        include: [
          ProfileProperty,
          {
            where: {
              rawValue: this.userId,
              profilePropertyRuleGuid:
                primaryIdentifyingProfilePropertyRule.guid,
            },
          },
        ],
      });
      if (!profile) {
        profile = await Profile.create({ anonymousId: this.anonymousId });
        const profileProperties = {};
        profileProperties[
          primaryIdentifyingProfilePropertyRule.key
        ] = this.userId;
        await profile.addOrUpdateProperties(profileProperties);
      }
      return profile;
    } else if (this.anonymousId) {
      // we have an anonymousId
      const [profile] = await Profile.findOrCreate({
        where: { anonymousId: this.anonymousId },
      });
      return profile;
    } else {
      // we can't identify this event
      throw new Error(
        "cannot associate a profile without profileGuid, userId, or anonymousId"
      );
    }
  }

  async getProfile() {
    const { Profile } = plugin.models();
    return Profile.findByGuid(this.profileGuid);
  }
}

export abstract class EventBackendPrototype {
  // lifecycle hooks
  abstract async start?(): Promise<void>;
  abstract async stop?(): Promise<void>;
}
