import { Profile } from "../../models/Profile";
import { ProfileProperty } from "../../models/ProfileProperty";
import { ProfilePropertyRule } from "../../models/ProfilePropertyRule";
import { Source } from "../../models/Source";
import { Group } from "../../models/Group";
import { Destination } from "../../models/Destination";
import { log } from "actionhero";
import { waitForLock } from "../locks";

export namespace ProfileOps {
  /**
   * Get the Properties of this Profile
   */
  export async function properties(
    profile: Profile
  ): Promise<{
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
      profile.profileProperties ||
      (await ProfileProperty.findAll({ where: { profileGuid: profile.guid } }));

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

  /**
   * Add or Update many Properties on this Profile
   */
  export async function addOrUpdateProperty(
    profile: Profile,
    hash: { [key: string]: any }
  ) {
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
      where: { profileGuid: profile.guid, profilePropertyRuleGuid: rule.guid },
    });

    if (!property) {
      property = new ProfileProperty({
        profileGuid: profile.guid,
        profilePropertyRuleGuid: rule.guid,
      });
    }

    await property.setValue(value);
    await property.save();
    return profile;
  }

  /**
   * Remove a Property on this Profile
   */
  export async function removeProperty(profile: Profile, key: string) {
    const profilePropertyRules = await ProfilePropertyRule.cached();
    const rule = profilePropertyRules[key];

    if (!rule) {
      return;
    }

    const property = await ProfileProperty.findOne({
      where: { profileGuid: profile.guid, profilePropertyRuleGuid: rule.guid },
    });

    if (property) {
      await property.destroy();
    }
  }

  /**
   * Add or Update a Property on this Profile
   */
  export async function addOrUpdateProperties(
    profile: Profile,
    properties: { [key: string]: any }
  ) {
    await profile.save();

    const keys = Object.keys(properties);
    for (const i in keys) {
      if (keys[i] === "guid") {
        continue;
      }

      const h = {};
      h[keys[i]] = properties[keys[i]];
      await profile.addOrUpdateProperty(h);
    }

    return profile;
  }

  /**
   * Remove all Properties from this Profile
   */
  export async function removeProperties(
    profile: Profile,
    properties: Array<string>
  ) {
    for (const i in properties) {
      await profile.removeProperty(properties[i]);
    }
  }

  /**
   * Import the properties of this Profile
   */
  export async function _import(
    profile: Profile,
    toSave = true,
    toLock = true
  ) {
    let releaseLock: Function;

    if (toLock) {
      const lockObject = await waitForLock(`profile:${profile.guid}`);
      releaseLock = lockObject.releaseLock;
    }

    let hash = {};
    const sources = await Source.findAll({ where: { state: "ready" } });
    await Promise.all(
      sources.map((source) =>
        source
          .import(profile)
          .then((data) => (hash = Object.assign(hash, data)))
      )
    );

    if (toSave) {
      await profile.addOrUpdateProperties(hash);
      await profile.buildNullProperties();
      await profile.save();
    }

    if (toLock) {
      releaseLock();
    }

    return profile;
  }

  /**
   * Export this Profile to all relevant Sources
   */
  export async function _export(
    profile: Profile,
    force = false,
    groupsOverride?: Group[]
  ) {
    let oldSimpleProperties = {};
    let oldGroups = [];

    const groups = groupsOverride
      ? groupsOverride
      : await profile.$get("groups");

    const destinations = await Destination.destinationsForGroups(groups);
    const properties = await profile.properties();
    const simpleProperties = {};
    for (const i in properties) {
      simpleProperties[i] = properties[i].value;
    }

    if (!force) {
      const oldProperties = await profile.properties();
      oldGroups = groups;

      for (const i in oldProperties) {
        oldSimpleProperties[i] = oldProperties[i].value;
      }
    }

    await Promise.all(
      destinations.map((destination) =>
        destination.exportProfile(
          profile,
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
  export async function findOrCreateByUniqueProfileProperties(hash: {
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

  /**
   * Merge 2 Profiles, favoring the first Profile
   */
  export async function merge(profile: Profile, otherProfile: Profile) {
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
