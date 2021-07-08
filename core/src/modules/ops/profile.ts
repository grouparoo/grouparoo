import { Profile } from "../../models/Profile";
import { ProfileProperty } from "../../models/ProfileProperty";
import { Property } from "../../models/Property";
import { Source } from "../../models/Source";
import { Group } from "../../models/Group";
import { Destination } from "../../models/Destination";
import { Export } from "../../models/Export";
import { GroupMember } from "../../models/GroupMember";
import { Log } from "../../models/Log";
import { api } from "actionhero";
import { Op, OrderItem, WhereAttributeHash, QueryTypes } from "sequelize";
import { waitForLock } from "../locks";
import { ProfilePropertyOps } from "./profileProperty";
import { CLS } from "../../modules/cls";
import { GroupRule } from "../../models/GroupRule";
import { Import } from "../../models/Import";

export interface ProfilePropertyType {
  [key: string]: {
    id: ProfileProperty["id"];
    state: ProfileProperty["state"];
    values: Array<string | number | boolean | Date>;
    configId: ReturnType<Property["getConfigId"]>;
    type: Property["type"];
    unique: Property["unique"];
    directlyMapped: Property["directlyMapped"];
    isArray: Property["isArray"];
    identifying: Property["identifying"];
    valueChangedAt: ProfileProperty["valueChangedAt"];
    confirmedAt: ProfileProperty["confirmedAt"];
    stateChangedAt: ProfileProperty["stateChangedAt"];
    startedAt: ProfileProperty["startedAt"];
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
        where: { profileId: profile.id },
        order: [["position", "ASC"]],
      }));

    const properties = await Property.findAllWithCache();

    const hash: ProfilePropertyType = {};

    for (const i in profileProperties) {
      const property = properties.find(
        (r) => r.id === profileProperties[i].propertyId
      );
      if (!property) {
        await profileProperties[i].destroy();
        continue;
      }

      const key = property.key;
      if (!hash[key]) {
        hash[key] = {
          id: profileProperties[i].propertyId,
          state: profileProperties[i].state,
          values: [],
          configId: property.getConfigId(),
          type: property.type,
          unique: property.unique,
          directlyMapped: property.directlyMapped,
          isArray: property.isArray,
          identifying: property.identifying,
          valueChangedAt: profileProperties[i].valueChangedAt,
          confirmedAt: profileProperties[i].confirmedAt,
          stateChangedAt: profileProperties[i].stateChangedAt,
          startedAt: profileProperties[i].startedAt,
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
   * Search & List Profiles
   */
  export async function search({
    limit,
    offset,
    state,
    groupId,
    searchKey,
    searchValue,
    order,
    caseSensitive,
  }: {
    limit?: number;
    offset?: number;
    state?: string;
    groupId?: string;
    searchKey?: string | number;
    searchValue?: string;
    order?: OrderItem[];
    caseSensitive?: boolean;
  }) {
    if (!limit) limit = 100;
    if (!offset) offset = 0;
    if (!order) order = [["createdAt", "asc"]];
    if (caseSensitive === undefined || caseSensitive === null)
      caseSensitive = true;

    const ands: WhereAttributeHash[] = [];
    const include: Array<any> = [];
    let countRequiresIncludes = false;

    // Are we searching for Profiles in a specific state?
    if (state) ands.push({ state });

    // Are we searching for a specific ProfileProperty?
    if (searchKey && searchValue) {
      countRequiresIncludes = true;
      include.push(ProfileProperty);
      countRequiresIncludes = true;

      const property = await Property.findOneWithCache(`${searchKey}`, "key");
      if (!property) throw new Error(`cannot find a property for ${searchKey}`);

      ands.push(
        api.sequelize.where(
          api.sequelize.col("profileProperties.propertyId"),
          property.id
        )
      );
      if (searchValue.toLowerCase() === "null" || searchValue === "") {
        ands.push(
          api.sequelize.where(api.sequelize.col("profileProperties.rawValue"), {
            [Op.eq]: null,
          })
        );
      } else {
        const op = searchValue.includes("%") ? Op.like : Op.eq;
        ands.push(
          api.sequelize.where(
            !caseSensitive
              ? api.sequelize.fn(
                  "LOWER",
                  api.sequelize.col("profileProperties.rawValue")
                )
              : api.sequelize.col("profileProperties.rawValue"),
            {
              [op]: !caseSensitive
                ? api.sequelize.fn("LOWER", searchValue)
                : searchValue,
            }
          )
        );
      }
    }

    // Are we limiting the search for only members of a Specific Group?
    if (groupId) {
      countRequiresIncludes = true;
      include.push(GroupMember);
      ands.push(
        api.sequelize.where(api.sequelize.col("groupMembers.groupId"), groupId)
      );
    }

    // Load the profiles in full now that we know the relevant profiles
    const profileIds = (
      await Profile.findAll({
        attributes: ["id"],
        include,
        where: { [Op.and]: ands },
        limit,
        offset,
        order,
        subQuery: false,
      })
    ).map((p) => p.id);

    const profiles = await Profile.findAll({
      where: { id: profileIds },
      order,
      include: [ProfileProperty],
    });

    const total = await Profile.count({
      include: countRequiresIncludes ? include : undefined,
      where: { [Op.and]: ands },
      distinct: true,
    });

    return { profiles, total };
  }

  /**
   * Add or Update a Property on Profiles
   */
  export async function addOrUpdateProperties(
    profiles: Profile[],
    profileProperties: {
      [key: string]: Array<string | number | boolean | Date> | any;
    }[],
    toLock = true
  ) {
    if (profiles.length === 0) return;
    if (profiles.length !== profileProperties.length) {
      throw new Error(
        "Profiles and ProfileProperty arrays are not the same length"
      );
    }

    const releaseLocks: Function[] = [];
    const bulkCreates = [];
    const bulkDeletes = { where: { [Op.or]: [] } };
    const properties = await Property.findAllWithCache();
    const now = new Date();

    // load existing profile properties
    const existingProfileProperties = await ProfileProperty.findAll({
      where: { profileId: { [Op.in]: profiles.map((p) => p.id) } },
    });

    try {
      let profileOffset = 0;
      checkProfiles: for (const profile of profiles) {
        if (toLock) {
          const response = await waitForLock(`profile:${profile.id}`);
          releaseLocks.push(response.releaseLock);
        }

        if (profile.isNewRecord) await profile.save();

        const keys = Object.keys(profileProperties[profileOffset]);
        checkKeys: for (const key of keys) {
          if (key === "id") continue checkKeys; // TODO check this out, do we need this?
          if (key === "_meta") continue checkKeys;

          const h: { [key: string]: Array<string | number | boolean | Date> } =
            {};
          h[key] = Array.isArray(profileProperties[profileOffset][key])
            ? profileProperties[profileOffset][key]
            : [profileProperties[profileOffset][key]];

          const property =
            properties.find((p) => p.id === key) ??
            properties.find((p) => p.key === key);

          if (!property) {
            throw new Error(`cannot find a property for id or key \`${key}\``);
          }

          // add new Profile Properties to batch
          let position = 0;
          console.log("check key", key);
          buildQueries: for (const value of h[key]) {
            console.log("buildQueries", key, value);
            if (position > 0 && !property.isArray) {
              throw new Error(
                "cannot set multiple profile properties for a non-array property"
              );
            }

            const existingProfileProperty = existingProfileProperties.find(
              (p) =>
                p.profileId === profile.id &&
                p.propertyId === property.id &&
                p.position === position
            );
            const rawValue = await ProfilePropertyOps.buildRawValue(
              value,
              property.type
            );

            bulkCreates.push({
              id: existingProfileProperty
                ? existingProfileProperty.id
                : undefined,
              profileId: profile.id,
              propertyId: property.id,
              position,
              rawValue,
              state: "ready",
              stateChangedAt: now,
              confirmedAt: now,
              valueChangedAt:
                !existingProfileProperty ||
                !existingProfileProperty.valueChangedAt ||
                !existingProfileProperty.rawValue ||
                rawValue !== existingProfileProperty.rawValue
                  ? now
                  : existingProfileProperty.valueChangedAt,
              unique: property.unique,
            });

            position++;
          }

          // delete old properties we didn't update
          bulkDeletes.where[Op.or].push({
            profileId: profile.id,
            propertyId: property.id,
            position: { [Op.gte]: position },
          });
        }

        console.log(keys);
        // const missingExistingProps = existingProfileProperties.filter(
        //   (p) =>
        //     p.profileId === profile.id &&
        //     !keys.includes(properties.find((pr) => pr.id === p.propertyId).key)
        // );
        // console.log(
        //   "missing",
        //   missingExistingProps.map((p) => p.propertyId)
        // );
        for (let existingProp of existingProfileProperties) {
          if (existingProp.profileId !== profile.id) continue;
          if (keys.includes(existingProp.propertyId)) continue;

          bulkDeletes.where[Op.or].push({
            profileId: profile.id,
            propertyId: existingProp.propertyId,
          });
        }

        profileOffset++;
      }

      console.log("bulkCreate", bulkCreates);
      console.log("bulkDeletes", bulkDeletes.where[Op.or]);

      if (bulkCreates.length > 0) {
        await ProfileProperty.bulkCreate(bulkCreates, {
          updateOnDuplicate: [
            "state",
            "unique",
            "stateChangedAt",
            "confirmedAt",
            "valueChangedAt",
            "rawValue",
            "updatedAt",
          ],
        });
      }
      if (bulkDeletes.where[Op.or].length > 0) {
        await ProfileProperty.destroy(bulkDeletes);
      }
    } finally {
      for (const releaseLock of releaseLocks) await releaseLock();
    }
  }

  /**
   * Remove a Property on this Profile
   */
  export async function removeProperty(profile: Profile, key: string) {
    const property = await Property.findOne({ where: { key } });
    if (!property) return;

    return ProfileProperty.destroy({
      where: { profileId: profile.id, propertyId: property.id },
    });
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

  export async function buildNullProperties(
    profiles: Profile[],
    state = "pending"
  ) {
    const properties = await Property.findAllWithCache();

    const bulkArgs = [];
    const now = new Date();

    for (const profile of profiles) {
      const profileProperties = await profile.properties();

      for (const key in properties) {
        const property = properties[key];
        if (!profileProperties[property.key]) {
          bulkArgs.push({
            profileId: profile.id,
            propertyId: property.id,
            state,
            stateChangedAt: now,
            valueChangedAt: now,
            confirmedAt: now,
          });
        }
      }
    }

    console.log("build nulls", bulkArgs);

    if (bulkArgs.length > 0) await ProfileProperty.bulkCreate(bulkArgs);

    return bulkArgs.length;
  }

  export async function updateGroupMemberships(profiles: Profile[]) {
    const results: { [profileId: string]: { [groupId: string]: boolean } } = {};
    const groups = await Group.scope("notDraft").findAll({
      include: [GroupRule],
    });

    for (const profile of profiles) results[profile.id] = {};

    for (const group of groups) {
      const belongs = await group.updateProfilesMembership(profiles);
      for (const profileId of Object.keys(belongs)) {
        results[profileId][group.id] = belongs[profileId];
      }
    }

    return results;
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
      const lockObject = await waitForLock(`profile:${profile.id}`);
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

      console.log("import", hash);

      if (toSave) {
        await addOrUpdateProperties([profile], [hash], false);
        await buildNullProperties([profile]);

        await profile.save();
        await ProfileProperty.update(
          { state: "ready" },
          { where: { profileId: profile.id } }
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
    oldGroups: Group[] = [],
    saveExports = true
  ) {
    const groups = await profile.$get("groups");

    const destinations = await Destination.destinationsForGroups([
      ...oldGroups,
      ...groups,
    ]);

    // We want to find destinations which aren't in the above set and already have an Export for this Profile.
    // That's a sign that the Profile is about to get a toDelete export
    const existingExportNotDeleted: { destinationId: string }[] =
      await api.sequelize.query(
        `
    SELECT * from "exports"
    JOIN (
      SELECT "destinationId", MAX("createdAt") as "createdAt"
      FROM "exports"
      WHERE "profileId" = '${profile.id}'
      GROUP BY "destinationId"
    ) AS "latest"
    ON "latest"."destinationId" = "exports"."destinationId" AND "latest"."createdAt" = "exports"."createdAt"
    WHERE "profileId" = '${profile.id}'
    AND "toDelete" = false
    ;
    `,
        {
          type: QueryTypes.SELECT,
          model: Export,
        }
      );

    for (const _export of existingExportNotDeleted) {
      if (!destinations.map((d) => d.id).includes(_export.destinationId)) {
        const destination = await Destination.findById(_export.destinationId);
        destinations.push(destination);
      }
    }

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
  export async function sync(profile: Profile, force = true, toExport = true) {
    const oldGroups = await profile.$get("groups");

    await profile.markPending();
    await profile.import();
    await profile.updateGroupMembership();
    await profile.update({ state: "ready" });
    return ProfileOps._export(profile, force, oldGroups, toExport);
  }

  /**
   * The method you'll be using to create profiles with arbitrary data.
   * Hash looks like {email: "person@example.com", id: 123}
   */
  export async function findOrCreateByUniqueProfileProperties(hash: {
    [key: string]: Array<string | number | boolean | Date>;
  }) {
    let profile: Profile;
    let isNew = false;
    let profileProperty: ProfileProperty;
    const uniqueProperties = (await Property.findAllWithCache()).filter(
      (p) => p.unique === true
    );
    const uniquePropertiesHash = {};

    uniqueProperties.forEach((rule) => {
      if (hash[rule.key] !== null && hash[rule.key] !== undefined) {
        uniquePropertiesHash[rule.id] = hash[rule.key];
      } else if (hash[rule.id] !== null && hash[rule.id] !== undefined) {
        uniquePropertiesHash[rule.id] = hash[rule.id];
      }
    });

    // and the case when we are sending a profile id directly
    if (hash["id"]) uniquePropertiesHash["id"] = hash["id"];

    if (Object.keys(uniquePropertiesHash).length === 0) {
      throw new Error(
        `there are no unique profile properties provided in ${JSON.stringify(
          hash
        )}`
      );
    }

    // special handling when a id is provided directly
    // for use with internal runs
    if (uniquePropertiesHash["id"]) {
      profile = await Profile.findOne({
        where: { id: uniquePropertiesHash["id"] },
      });

      if (profile) {
        return { profile, isNew };
      } else {
        throw new Error(
          `cannot find profile with id ${uniquePropertiesHash["id"]}`
        );
      }
    }

    const keys = Object.keys(uniquePropertiesHash);
    const lockReleases = [];

    try {
      for (const i in keys) {
        const id = keys[i];
        const value = uniquePropertiesHash[id];
        const property = uniqueProperties.find((r) => r.id === id);

        const { releaseLock } = await waitForLock(
          `profileProperty:${id}:${value}`
        );
        lockReleases.push(releaseLock);

        profileProperty = await ProfileProperty.findOne({
          where: {
            propertyId: property.id,
            rawValue: String(value),
          },
        });

        if (profileProperty) break;
      }

      if (profileProperty) {
        profile = await Profile.findOne({
          where: { id: profileProperty.profileId },
        });
      } else {
        profile = await Profile.create();
        profile = await profile.reload();
        const { releaseLock } = await waitForLock(`profile:${profile.id}`);
        lockReleases.push(releaseLock);
        await addOrUpdateProperties([profile], [uniquePropertiesHash], false);
        await buildNullProperties([profile]);

        isNew = true;
      }

      return { profile, isNew };
    } finally {
      await Promise.all(lockReleases.map((releaseLock) => releaseLock()));
    }
  }

  /**
   * Mark many Profiles and all of their properties as pending
   */
  export async function markPendingByIds(
    profileIds: string[],
    includeProperties = true
  ) {
    const nonDirectlyMappedRules = (await Property.findAllWithCache()).filter(
      (p) => p.directlyMapped === false //true // get errrbody in here
    );

    console.log(
      "properties to mark pedning",
      nonDirectlyMappedRules.map((r) => r.key)
    );

    if (includeProperties && nonDirectlyMappedRules.length > 0) {
      await ProfileProperty.update(
        { state: "pending", startedAt: null },
        {
          where: {
            profileId: { [Op.in]: profileIds },
            propertyId: {
              [Op.in]: nonDirectlyMappedRules.map((r) => r.id),
            },
          },
        }
      );
    }

    await Profile.update(
      { state: "pending" },
      { where: { id: { [Op.in]: profileIds } } }
    );
  }

  /**
   * Merge 2 Profiles, favoring the first Profile
   */
  export async function merge(profile: Profile, otherProfile: Profile) {
    const { releaseLock: releaseLockForProfile } = await waitForLock(
      `profile:${profile.id}`
    );
    const { releaseLock: releaseLockForOtherProfile } = await waitForLock(
      `profile:${otherProfile.id}`
    );

    try {
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
      await addOrUpdateProperties([profile], [newProperties], false);

      // log the merge
      await Log.create({
        topic: "profile",
        verb: "merge",
        message: `merged with profile ${otherProfile.id}`,
        ownerId: profile.id,
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
   * Then, process the related imports.
   */
  export async function makeReadyAndCompleteImports(
    limit = 100,
    toExport = true
  ) {
    let profiles: Profile[] = await api.sequelize.query(
      `
    SELECT "id" from "profiles" where "state" = 'pending'
    EXCEPT
    SELECT DISTINCT("profileId") FROM "profileProperties" WHERE "state" = 'pending'
    LIMIT ${limit}
    ;
    `,
      {
        type: QueryTypes.SELECT,
        model: Profile,
      }
    );

    const updateResponse = await Profile.update(
      { state: "ready" },
      {
        where: {
          id: { [Op.in]: profiles.map((p) => p.id) },
          state: "pending",
        },
      }
    );

    // For postgres only: we can update our result set with the rows that were updated, filtering out those which are no longer state=pending
    // in SQLite this isn't possible, but contention is far less likely
    if (updateResponse[1]) profiles = updateResponse[1];

    if (profiles.length === 0) return [];

    await completeProfileImports(
      profiles.map((p) => p.id),
      toExport
    );

    return profiles;
  }

  async function completeProfileImports(
    profileIds: string[],
    toExport: boolean
  ) {
    const properties = await Property.findAllWithCache();
    const profiles = await Profile.findAll({
      where: {
        id: { [Op.in]: profileIds },
      },
      include: [
        { model: ProfileProperty, required: true },
        { model: Import, required: false, where: { profileUpdatedAt: null } },
      ],
    });
    if (profiles.length === 0) return;

    for (const profile of profiles) {
      const mergedValues = {};
      const imports = profile.imports;

      for (const _import of imports.sort(
        (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
      )) {
        const data = _import.data;
        for (const key in data) {
          // only if we still have property
          if (properties.find((r) => r.key === key)) {
            mergedValues[key] = data[key];
          }
        }
      }

      if (Object.keys(mergedValues).length > 0) {
        await profile.addOrUpdateProperties(mergedValues);
        delete profile.profileProperties; // will be reloaded
      }
    }

    const memberships = await ProfileOps.updateGroupMemberships(profiles);
    const now = new Date();

    for (const profile of profiles) {
      const imports = profile.imports;
      if (imports.length > 0) {
        const newProfileProperties = await profile.simplifiedProperties();
        const newGroupIds = Object.keys(memberships[profile.id]).filter(
          (groupId) => memberships[profile.id][groupId] === true
        );

        await Import.update(
          {
            newProfileProperties: newProfileProperties,
            profileUpdatedAt: now,
            newGroupIds: newGroupIds,
            groupsUpdatedAt: now,
            exportedAt: toExport ? undefined : now, // we want to indicate that the import's lifecycle is complete
          },
          {
            where: { id: { [Op.in]: imports.map((i) => i.id) } },
          }
        );
      }
    }
  }
}
