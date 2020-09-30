import { Event } from "../../models/Event";
import { Profile } from "../../models/Profile";
import { ProfileProperty } from "../../models/ProfileProperty";
import { ProfilePropertyRule } from "../../models/ProfilePropertyRule";
import { ProfileOps } from "../ops/profile";
import { Op } from "sequelize";
import { utils } from "actionhero";

export namespace EventOps {
  /**
   * Associate this Event to a Profile, creating the Profile if needed
   */
  export async function associate(
    event: Event,
    identifyingProfilePropertyRuleGuid: string,
    isRetry = false
  ) {
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

    try {
      if (event.profileGuid) {
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
      } else if (event.userId) {
        // we have a userId (primaryIdentifyingProfilePropertyRule)
        let profile = await Profile.findOne({
          include: [
            {
              model: ProfileProperty,
              where: {
                rawValue: event.userId,
                profilePropertyRuleGuid: profilePropertyRule.guid,
              },
            },
          ],
        });

        if (!profile) {
          [profile] = await Profile.findOrCreate({
            where: { anonymousId: event.anonymousId },
          });
        }

        const profileProperties = {};
        profileProperties[profilePropertyRule.key] = event.userId;
        await profile.addOrUpdateProperties(profileProperties);

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
      } else if (event.anonymousId) {
        // we have an anonymousId

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
          [profile] = await Profile.findOrCreate({
            where: { anonymousId: event.anonymousId },
          });
        }

        event.profileGuid = profile.guid;
        event.profileAssociatedAt = new Date();
        await event.save();
        await event.updateProfile(profile);
        return profile;
      } else {
        // we can't identify this event
        throw new Error(
          "cannot associate a profile without profileGuid, userId, or anonymousId"
        );
      }
    } catch (error) {
      // It's possible that 2 events for the same profile are getting processed at the same time, which would create a conflicting profile.
      // In these cases, retry one more time
      if (
        isRetry === false &&
        error.toString().match(/SequelizeUniqueConstraintError/)
      ) {
        await utils.sleep(100);
        return associate(event, identifyingProfilePropertyRuleGuid, true);
      } else {
        throw error;
      }
    }
  }
}
