import { Event } from "../../models/Event";
import { Profile } from "../../models/Profile";
import { ProfileProperty } from "../../models/ProfileProperty";
import { Property } from "../../models/Property";
import { ProfileOps } from "../ops/profile";
import { Op } from "sequelize";
import { utils } from "actionhero";
import { waitForLock } from "../locks";

export namespace EventOps {
  /**
   * Associate this Event to a Profile, creating the Profile if needed
   */
  export async function associate(
    event: Event,
    identifyingPropertyGuid: string,
    isRetry = false
  ): Promise<Profile> {
    const property = await Property.findOne({
      where: { guid: identifyingPropertyGuid },
    });
    if (!property) {
      throw new Error(
        `cannot find Property for identifyingPropertyGuid ${identifyingPropertyGuid}`
      );
    }

    let profile: Profile;
    try {
      if (event.profileGuid) {
        profile = await associateEventWithProfileGuid(event, property);
      } else if (event.userId) {
        profile = await associateEventWithUserId(event, property);
      } else if (event.anonymousId) {
        profile = await associateEventWithAnonymousId(event, property);
      } else {
        throw new Error(
          "cannot associate a profile without profileGuid, userId, or anonymousId"
        );
      }

      await profile.markPending();
      return profile;
    } catch (error) {
      // It's possible that 2 events for the same profile are getting processed at the same time, which would create a conflicting profile.
      // In these cases, retry one more time
      if (
        isRetry === false &&
        error.toString().match(/SequelizeUniqueConstraintError/)
      ) {
        await utils.sleep(100);
        return associate(event, identifyingPropertyGuid, true);
      } else {
        throw error;
      }
    }
  }

  async function associateEventWithProfileGuid(
    event: Event,
    property: Property
  ) {
    // we are already identified
    try {
      const profile = await event.$get("profile");
      await event.updateProfile(profile);
      return profile;
    } catch (error) {
      // the event may have been moved to another profile
      const updatedEvent = await event.reload();
      if (updatedEvent.profileGuid !== event.profileGuid) {
        return updatedEvent.associate(updatedEvent.profileGuid);
      } else {
        throw error;
      }
    }
  }

  async function associateEventWithUserId(event: Event, property: Property) {
    // we have a userId (primaryIdentifyingProperty)
    let profile = await Profile.findOne({
      include: [
        {
          model: ProfileProperty,
          where: {
            rawValue: event.userId,
            propertyGuid: property.guid,
          },
        },
      ],
    });

    if (!profile) {
      profile = await createProfileFromAnonymousId(event.anonymousId);
    }

    const profileProperties = {};
    profileProperties[property.guid] = event.userId;

    try {
      await profile.addOrUpdateProperties(profileProperties);
    } catch (error) {
      // the profile was created in the middle of this task; try again!
      if (error.toString().match(/Another profile already has the value/)) {
        return associateEventWithUserId(event, property);
      } else {
        throw error;
      }
    }

    event.profileGuid = profile.guid;
    event.profileAssociatedAt = new Date();
    await event.save();

    const otherProfileWithAnonymousId = await Profile.findOne({
      where: {
        guid: { [Op.ne]: profile.guid },
        anonymousId: event.anonymousId,
      },
    });
    if (!otherProfileWithAnonymousId) {
      await profile.update({ anonymousId: event.anonymousId });
    } else {
      await ProfileOps.merge(profile, otherProfileWithAnonymousId);
    }

    await event.updateProfile(profile);
    return profile;
  }

  async function associateEventWithAnonymousId(
    event: Event,
    property: Property
  ) {
    // can we find the profile by anonymousId?
    let profile = await Profile.findOne({
      where: { anonymousId: event.anonymousId },
    });

    // can we find the profile from other events with the same anonymousId?
    if (!profile) {
      const otherEvent = await Event.findOne({
        where: {
          anonymousId: event.anonymousId,
          profileGuid: { [Op.ne]: null },
        },
      });
      if (otherEvent) {
        profile = await Profile.findOne({
          where: { guid: otherEvent.profileGuid },
        });
      }
    }

    // if we still don't have a profile, make a new one
    if (!profile) {
      profile = await createProfileFromAnonymousId(event.anonymousId);
    }

    event.profileGuid = profile.guid;
    event.profileAssociatedAt = new Date();
    await event.save();
    await event.updateProfile(profile);
    return profile;
  }

  async function createProfileFromAnonymousId(
    anonymousId: string
  ): Promise<Profile> {
    const { releaseLock } = await waitForLock(
      `profiles:anonymousCreate:${anonymousId}`
    );
    try {
      let profile = await Profile.findOne({ where: { anonymousId } });
      if (!profile) profile = await Profile.create({ anonymousId });
      return profile;
    } finally {
      await releaseLock();
    }
  }
}
