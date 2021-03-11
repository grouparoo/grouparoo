import {
  Table,
  Column,
  AllowNull,
  Default,
  Length,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { SetupStepOps } from "../modules/ops/setupSteps";
import { APIData } from "../modules/apiData";

@Table({ tableName: "setupSteps", paranoid: false })
export class SetupStep extends LoggedModel<SetupStep> {
  idPrefix() {
    return "sus";
  }

  @AllowNull(false)
  @Column
  position: number;

  @AllowNull(false)
  @Length({ min: 3, max: 191 })
  @Column
  key: string;

  @AllowNull(false)
  @Default(false)
  @Column
  skipped: boolean;

  @AllowNull(false)
  @Default(false)
  @Column
  complete: boolean;

  async apiData() {
    const ssd = this.getSetupStepDescription();
    const title = this.getTitle(ssd);
    const description = this.getDescription(ssd);
    const href = this.getHref(ssd);
    const cta = this.getCta(ssd);
    const helpLink = this.getHelpLink(ssd);
    const showCtaOnCommunity = this.getShowCtaOnCommunity(ssd);
    const outcome = await this.getOutcome(ssd);

    return {
      id: this.id,
      position: this.position,
      key: this.key,
      title,
      description,
      href,
      cta,
      helpLink,
      showCtaOnCommunity,
      outcome,
      skipped: this.skipped,
      complete: this.complete,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  getTitle(ssd?: SetupStepOps.setupStepDescription) {
    if (!ssd) ssd = this.getSetupStepDescription();
    return ssd.title;
  }

  getDescription(ssd?: SetupStepOps.setupStepDescription) {
    if (!ssd) ssd = this.getSetupStepDescription();
    return ssd.description;
  }

  getHref(ssd?: SetupStepOps.setupStepDescription) {
    if (!ssd) ssd = this.getSetupStepDescription();
    return ssd.href;
  }

  getCta(ssd?: SetupStepOps.setupStepDescription) {
    if (!ssd) ssd = this.getSetupStepDescription();
    return ssd.cta;
  }

  getHelpLink(ssd?: SetupStepOps.setupStepDescription) {
    if (!ssd) ssd = this.getSetupStepDescription();
    return ssd.helpLink;
  }

  getShowCtaOnCommunity(ssd?: SetupStepOps.setupStepDescription) {
    if (!ssd) ssd = this.getSetupStepDescription();
    return ssd.showCtaOnCommunity || false;
  }

  async performCheck(ssd?: SetupStepOps.setupStepDescription) {
    if (this.complete) return true;

    if (!ssd) ssd = this.getSetupStepDescription();
    if (ssd.check) {
      const check = await ssd.check();
      if (check) await this.update({ complete: true });
      return check;
    } else {
      return null;
    }
  }

  async getOutcome(ssd?: SetupStepOps.setupStepDescription) {
    if (!ssd) ssd = this.getSetupStepDescription();
    if (ssd.outcome) return ssd.outcome();
    return null;
  }

  getSetupStepDescription() {
    const ssdFilteredArray = SetupStepOps.setupStepDescriptions.filter(
      (ssd) => ssd.key === this.key
    );

    if (ssdFilteredArray.length === 1) return ssdFilteredArray[0];

    throw new Error(`Cannot find Setup Step Description for key ${this.key}`);
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }
}
