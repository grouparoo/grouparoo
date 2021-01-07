import {
  Table,
  Column,
  Index,
  AllowNull,
  BelongsTo,
  HasMany,
  AfterCreate,
  AfterDestroy,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { Op } from "sequelize";
import { EventData } from "./EventData";
import { Profile } from "./Profile";
import { PropertyFiltersWithKey } from "./Property";
import { api, task, config } from "actionhero";
import { EventOps } from "../modules/ops/event";

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

  async getData() {
    const eventData = this.eventData || (await this.$get("eventData"));
    const data = {};
    eventData.forEach((eventData) => {
      data[eventData.key] = eventData.value;
    });
    return data;
  }

  async setData(data: { [key: string]: any }) {
    for (const key in data) {
      await EventData.create({
        eventGuid: this.guid,
        key,
        value: data[key].toString(),
      });
    }
  }

  async associate(identifyingPropertyGuid: string) {
    return EventOps.associate(this, identifyingPropertyGuid);
  }

  async updateProfile(profile: Profile) {
    await profile.markPending();
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
    const instance = await this.scope(null).findOne({
      where: { guid },
    });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @AfterCreate
  static async enqueueAssociateEvent(instance: Event) {
    await api.cls.enqueueTask("event:associateProfile", {
      eventGuid: instance.guid,
    });
  }

  @AfterDestroy
  static async destroyOptions(instance: Event) {
    return EventData.destroy({
      where: {
        eventGuid: instance.guid,
      },
    });
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

  static async applyPropertyFilters(
    eventWhere: { [key: string]: any },
    eventDataWhere: { [key: string]: any },
    propertyFilters: PropertyFiltersWithKey[]
  ) {
    for (const i in propertyFilters) {
      const filter = propertyFilters[i];
      let key = filter.key;
      if (key.match(/^\[data\]-/)) {
        key = key.replace(/^\[data\]-/, "");
      }

      let match = filter.match;
      let opSymbol: symbol;
      switch (filter.op) {
        case "equals":
          opSymbol = Op["eq"];
          break;
        case "does not equal":
          opSymbol = Op["ne"];
          break;
        case "contains":
          opSymbol =
            config.sequelize.dialect === "postgres" ? Op["iLike"] : Op["like"];
          match = `%${match.toString()}%`;
          break;
        case "does not contain":
          opSymbol =
            config.sequelize.dialect === "postgres"
              ? Op["notILike"]
              : Op["notLike"];
          match = `%${match.toString()}%`;
          break;
        case "greater than":
          opSymbol = Op["gt"];
          break;
        case "less than":
          opSymbol = Op["lt"];
          break;
      }

      let localWhere = {};
      if (filter.key.match(/^\[data\]-/)) {
        // we need to check both the value and key in the case of negation matches
        localWhere[opSymbol] = match;
        eventDataWhere["value"] = localWhere;
        eventDataWhere["key"] = key;
      } else if (key === "occurredAt") {
        localWhere[opSymbol] = new Date(parseInt(match.toString()));
        eventWhere[key] = localWhere;
      } else {
        localWhere[opSymbol] = match;
        eventWhere[key] = localWhere;
      }
    }
  }
}
