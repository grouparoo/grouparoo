import { Profile } from "../../models/Profile";
import { ProfileProperty } from "../../models/ProfileProperty";
import { Property } from "../../models/Property";
import { Source } from "../../models/Source";
import { Group } from "../../models/Group";
import { Destination } from "../../models/Destination";
import { Event } from "../../models/Event";
import { Log } from "../../models/Log";
import { api } from "actionhero";
import { Op } from "sequelize";
import { waitForLock } from "../locks";
import { ProfilePropertyOps } from "./profileProperty";
import { CLS } from "../../modules/cls";

export interface ProfilePropertyType {
  [key: string]: {
    guid: ProfileProperty["guid"];
    state: ProfileProperty["state"];
    values: Array<string | number | boolean | Date>;
    type: Property["type"];
    unique: Property["unique"];
    isArray: Property["isArray"];
    identifying: Property["identifying"];
    valueChangedAt: ProfileProperty["valueChangedAt"];
    confirmedAt: ProfileProperty["confirmedAt"];
    stateChangedAt: ProfileProperty["stateChangedAt"];
    createdAt: ProfileProperty["createdAt"];
    updatedAt: ProfileProperty["updatedAt"];
  };
}

export namespace ProfileOps {
  /**
   * Get the Properties of this Profile
   */
  export async function properties(profile: Profile) {
    const profileProperties =
      profile.profileProperties ||
      (await ProfileProperty.scope(null).findAll({
        where: { profileGuid: profile.guid },
        order: [["position", "ASC"]],
      }));

    const properties = await Property.findAll();

    const hash: ProfilePropertyType = {};

    for (const i in profileProperties) {
      const property = properties.find(
        (r) => r.guid === profileProperties[i].propertyGuid
      );
      if (!property) {
        await profileProperties[i].destroy();
        continue;
      }

      const key = property.key;
      if (!hash[key]) {
        hash[key] = {
          guid: profileProperties[i].propertyGuid,
          state: profileProperties[i].state,
          values: [],
          type: property.type,
          unique: property.unique,
          isArray: property.isArray,
          identifying: property.identifying,
          valueChangedAt: profileProperties[i].valueChangedAt,
          confirmedAt: profileProperties[i].confirmedAt,
          stateChangedAt: profileProperties[i].stateChangedAt,
          createdAt: profileProperties[i].createdAt,
          updatedAt: profileProperties[i].updatedAt,
        };
      }

      hash[key].values.push(await profileProperties[i].getValue());

      const timeFields = [
        "valueChangedAt",
        "confirmedAt",
        "stateChangedAt",
        "createdAt",
        "updatedAt",
      ];

      timeFields.forEach((field) => {
        if (hash[key][field] < profileProperties[i][field]) {
          hash[key][field] = profileProperties[i][field];
        }
      });
    }

    return hash;
  }

  /**
   * Add or Update many Properties on this Profile
   */
  export async function addOrUpdateProperty(
    profile: Profile,
    hash: { [key: string]: Array<string | number | boolean | Date> }
  ) {
    const key = Object.keys(hash)[0]; // either the key or guid of the property, preferring the guid
    const values = hash[key];

    // ignore reserved profile property key
    if (key === "_meta") return;

    let property = await Property.findOne({
      where: { guid: key },
    });
    if (!property) {
      property = await Property.findOne({ where: { key } });
    }
    if (!property) {
      throw new Error(`cannot find a property for guid or key \`${key}\``);
    }

    // Note: Lifecycle hooks do not fire on upserts, so we need to manually check if the property exists or not

    if (property.isArray) {
      let profileProperties = await ProfileProperty.findAll({
        where: {
          profileGuid: profile.guid,
          propertyGuid: property.guid,
        },
        order: [["position", "asc"]],
      });

      const existingValues = await Promise.all(
        profileProperties.map((property) => property.getValue())
      );

      if (arraysAreEqual(existingValues, values)) {
        await Promise.all(
          profileProperties.map((property) =>
            property.update({
              state: "ready",
              stateChangedAt: new Date(),
              confirmedAt: new Date(),
            })
          )
        );
      } else {
        await Promise.all(
          profileProperties.map((property) => property.destroy())
        );
        let position = 0;
        for (const i in values) {
          const value = values[i];
          const profileProperty = new ProfileProperty({
            profileGuid: profile.guid,
            propertyGuid: property.guid,
            position,
            state: "ready",
            stateChangedAt: new Date(),
            confirmedAt: new Date(),
            valueChangedAt:
              profileProperties[i] &&
              profileProperties[i].valueChangedAt !== null
                ? profileProperties[i].rawValue !==
                  (await ProfilePropertyOps.buildRawValue(value, property.type))
                  ? new Date()
                  : profileProperties[i].valueChangedAt
                : new Date(),
          });
          await profileProperty.setValue(value);
          await profileProperty.save();
          position++;
        }
      }
    } else {
      if (values.length > 1) {
        throw new Error(
          "cannot set multiple profile properties for a non-array property"
        );
      }
      const value = values[0];
      let changed = false;

      let profileProperty = await ProfileProperty.findOne({
        where: {
          profileGuid: profile.guid,
          propertyGuid: property.guid,
          position: 0,
        },
      });

      if (!profileProperty) {
        changed = true;
        profileProperty = new ProfileProperty({
          profileGuid: profile.guid,
          propertyGuid: property.guid,
        });
      } else if (
        profileProperty.rawValue !==
        (await ProfilePropertyOps.buildRawValue(value, property.type))
      ) {
        changed = true;
      }

      await profileProperty.setValue(value);
      profileProperty.state = "ready";
      profileProperty.stateChangedAt = new Date();
      profileProperty.confirmedAt = new Date();
      if (changed || profileProperty.valueChangedAt === null) {
        profileProperty.valueChangedAt = new Date();
      }

      await profileProperty.save();
      await ProfileProperty.destroy({
        where: {
          profileGuid: profile.guid,
          propertyGuid: property.guid,
          position: { [Op.ne]: 0 },
        },
      });
    }
  }

  /**
   * Add or Update a Property on this Profile
   */
  export async function addOrUpdateProperties(
    profile: Profile,
    properties: {
      [key: string]: Array<string | number | boolean | Date> | any;
    },
    toLock = true
  ) {
    let releaseLock: Function;
    if (toLock) {
      const response = await waitForLock(`profile:${profile.guid}`);
      releaseLock = response.releaseLock;
    }

    try {
      await profile.save();

      const keys = Object.keys(properties);
      for (const i in keys) {
        if (keys[i] === "guid") continue;

        const h = {};
        h[keys[i]] = Array.isArray(properties[keys[i]])
          ? properties[keys[i]]
          : [properties[keys[i]]];

        await addOrUpdateProperty(profile, h);
      }

      return profile;
    } finally {
      if (releaseLock) await releaseLock();
    }
  }

  /**
   * Remove a Property on this Profile
   */
  export async function removeProperty(profile: Profile, key: string) {
    const property = await Property.findOne({ where: { key } });
    if (!property) return;

    const properties = await ProfileProperty.findAll({
      where: { profileGuid: profile.guid, propertyGuid: property.guid },
    });

    for (const i in properties) {
      await properties[i].destroy();
    }
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

  export async function buildNullProperties(profile: Profile, state = "ready") {
    const profileProperties = await profile.properties();
    const properties = await Property.findAll();

    let newPropertiesCount = 0;
    for (const i in properties) {
      const property = properties[i];
      if (!profileProperties[property.key]) {
        await ProfileProperty.create({
          profileGuid: profile.guid,
          propertyGuid: property.guid,
          state,
          stateChangedAt: new Date(),
          valueChangedAt: new Date(),
          confirmedAt: new Date(),
        });
        newPropertiesCount++;
      }
    }

    return newPropertiesCount;
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

    try {
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
        await addOrUpdateProperties(profile, hash, false);
        await buildNullProperties(profile);
        await profile.save();
        await ProfileProperty.update(
          { state: "ready" },
          { where: { profileGuid: profile.guid } }
        );
      }

      return profile;
    } catch (error) {
      throw error;
    } finally {
      if (toLock) await releaseLock();
    }
  }

  /**
   * Export this Profile to all relevant Sources
   */
  export async function _export(
    profile: Profile,
    force = false,
    oldGroupsOverride: Group[] = [],
    saveExports = true
  ) {
    const groups = await profile.$get("groups");

    const destinations = await Destination.destinationsForGroups([
      ...groups,
      ...oldGroupsOverride,
    ]);

    return Promise.all(
      destinations.map((destination) =>
        destination.exportProfile(
          profile,
          true, // sync = true -> do the export in-line
          force, // force = true -> do the export even if it looks like the data hasn't changed
          saveExports // saveExports = true -> should we really save these exports, or do we just want examples for the next export?
        )
      )
    );
  }

  /**
   * Fully Import and Export a profile
   */
  export async function sync(
    profile: Profile,
    force = true,
    oldGroupsOverride?: Group[],
    toExport = true
  ) {
    await profile.markPending();
    await profile.import();
    await profile.updateGroupMembership();
    await profile.update({ state: "ready" });
    if (toExport) await profile.export(force, oldGroupsOverride);
  }

  /**
   * The method you'll be using to create profiles with arbitrary data.
   * Hash looks like {email: "person@example.com", id: 123}
   */
  export async function findOrCreateByUniqueProfileProperties(hash: {
    [key: string]: Array<string | number | boolean | Date>;
  }) {
    let profile: Profile;
    let isNew: boolean;
    let profileProperty: ProfileProperty;
    const uniqueProperties = await Property.findAll({
      where: { unique: true },
    });
    const uniquePropertiesHash = {};

    uniqueProperties.forEach((rule) => {
      if (hash[rule.key] !== null && hash[rule.key] !== undefined) {
        uniquePropertiesHash[rule.guid] = hash[rule.key];
      }
    });

    // and the case when we are sending a profile guid directly
    if (hash["guid"]) uniquePropertiesHash["guid"] = hash["guid"];

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

    try {
      for (const i in keys) {
        const guid = keys[i];
        const value = uniquePropertiesHash[guid];
        const property = uniqueProperties.find((r) => r.guid === guid);

        const { releaseLock } = await waitForLock(
          `profileProperty:${guid}:${value}`
        );
        lockReleases.push(releaseLock);

        profileProperty = await ProfileProperty.findOne({
          where: {
            propertyGuid: property.guid,
            rawValue: String(value),
          },
        });

        if (profileProperty) break;
      }

      if (profileProperty) {
        profile = await Profile.findOne({
          where: { guid: profileProperty.profileGuid },
        });
        isNew = false;
      } else {
        profile = await Profile.create();
        profile = await profile.reload();
        const { releaseLock } = await waitForLock(`profile:${profile.guid}`);
        lockReleases.push(releaseLock);
        await addOrUpdateProperties(profile, uniquePropertiesHash, false);
        await buildNullProperties(profile);
        isNew = true;
      }

      return { profile, isNew };
    } finally {
      await Promise.all(lockReleases.map((releaseLock) => releaseLock()));
    }
  }

  /**
   * Mark the profile and all of its properties as pending
   */
  export async function markPending(profile: Profile) {
    const nonDirectlyMappedRules = await Property.findAll({
      where: { directlyMapped: false },
    });

    await ProfileProperty.update(
      { state: "pending" },
      {
        where: {
          profileGuid: profile.guid,
          propertyGuid: {
            [Op.in]: nonDirectlyMappedRules.map((r) => r.guid),
          },
        },
      }
    );

    await profile.update({ state: "pending" });
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

    try {
      // transfer events
      await Event.update(
        { profileGuid: profile.guid },
        { where: { profileGuid: otherProfile.guid } }
      );

      // transfer properties, keeping the newest values
      const properties = await profile.properties();
      const otherProperties = await otherProfile.properties();
      const newProperties = {};
      for (const key in otherProperties) {
        if (
          !properties[key] ||
          (otherProperties[key]?.updatedAt?.getTime() >
            properties[key]?.updatedAt?.getTime() &&
            otherProperties[key].values.length > 0 &&
            !(
              otherProperties[key].values.length === 1 &&
              (otherProperties[key].values[0] === null ||
                otherProperties[key].values[0] === undefined)
            ))
        ) {
          newProperties[key] = otherProperties[key].values;
        }
      }

      // delete other profile so unique profile properties will be available
      await otherProfile.destroy();
      await addOrUpdateProperties(profile, newProperties, false);

      // transfer anonymousId
      if (!profile.anonymousId && otherProfile.anonymousId) {
        await profile.update({ anonymousId: otherProfile.anonymousId });
      }

      // log the merge
      await Log.create({
        topic: "profile",
        verb: "merge",
        message: `merged with profile ${otherProfile.guid}`,
        ownerGuid: profile.guid,
        data: { previousProperties: properties, otherProperties },
      });

      // re-import and update groups
      delete profile.profileProperties;
      await profile.buildNullProperties();
      await profile.markPending();

      return profile;
    } finally {
      await releaseLockForProfile();
      await releaseLockForOtherProfile();
    }
  }

  /**
   * Find profiles that are not ready but whose properties are and make them ready.
   * Task `profile:completeImport` will be enqueued for each Profile.
   */
  export async function makeReady(limit = 100) {
    let profiles: Profile[];

    const notInQuery = api.sequelize.dialect.queryGenerator
      .selectQuery("profileProperties", {
        attributes: [
          api.sequelize.fn("DISTINCT", api.sequelize.col("profileGuid")),
        ],
        where: { state: "pending" },
      })
      .slice(0, -1);

    profiles = await Profile.findAll({
      where: {
        state: "pending",
        guid: { [Op.notIn]: api.sequelize.literal(`(${notInQuery})`) },
      },
      limit,
      order: [["guid", "asc"]],
    });

    const updateResponse = await Profile.update(
      { state: "ready" },
      {
        where: {
          guid: { [Op.in]: profiles.map((p) => p.guid) },
          state: "pending",
        },
      }
    );

    // For postgres only: we can update our result set with the rows that were updated, filtering out those which are no longer state=pending
    // in SQLite this isn't possible, but contention is far less likely
    if (updateResponse[1]) profiles = updateResponse[1];

    if (!profiles) return [];

    await Promise.all(
      profiles.map((profile) =>
        CLS.enqueueTask("profile:completeImport", {
          profileGuid: profile.guid,
        })
      )
    );

    return profiles;
  }

  function arraysAreEqual(a: Array<any>, b: Array<any>) {
    return (
      a.length === b.length && a.every((value, index) => value === b[index])
    );
  }
}
