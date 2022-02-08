import {
  Table,
  Column,
  AllowNull,
  Default,
  Length,
} from "sequelize-typescript";
import {
  SetupStepDescription,
  getSetupStepDescriptions,
} from "../modules/ops/setupSteps";
import { APIData } from "../modules/apiData";
import { CommonModel } from "../classes/commonModel";

@Table({ tableName: "setupSteps", paranoid: false })
export class SetupStep extends CommonModel<SetupStep> {
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

  async apiData(modelId?: string) {
    const ssd = this.getSetupStepDescription(modelId);
    const title = this.getTitle(ssd);
    const description = this.getDescription(ssd);
    const href = this.getHref(ssd);
    const cta = this.getCta(ssd);
    const helpLink = this.getHelpLink(ssd);
    const showCtaOnCommunity = this.getShowCtaOnCommunity(ssd);
    const outcome = await this.getOutcome(ssd);
    const disabled = await this.getDisabled(ssd);

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
      disabled,
      skipped: this.skipped,
      complete: this.complete,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  getTitle(ssd?: SetupStepDescription, modelId?: string) {
    if (!ssd) ssd = this.getSetupStepDescription(modelId);
    return ssd.title;
  }

  getDescription(ssd?: SetupStepDescription, modelId?: string) {
    if (!ssd) ssd = this.getSetupStepDescription(modelId);
    return ssd.description;
  }

  getHref(ssd?: SetupStepDescription, modelId?: string) {
    if (!ssd) ssd = this.getSetupStepDescription(modelId);
    return ssd.href;
  }

  getCta(ssd?: SetupStepDescription, modelId?: string) {
    if (!ssd) ssd = this.getSetupStepDescription(modelId);
    return ssd.cta;
  }

  getHelpLink(ssd?: SetupStepDescription, modelId?: string) {
    if (!ssd) ssd = this.getSetupStepDescription(modelId);
    return ssd.helpLink;
  }

  getShowCtaOnCommunity(ssd?: SetupStepDescription, modelId?: string) {
    if (!ssd) ssd = this.getSetupStepDescription(modelId);
    return ssd.showCtaOnCommunity || false;
  }

  async performCheck(ssd?: SetupStepDescription, modelId?: string) {
    if (this.complete) return true;

    if (!ssd) ssd = this.getSetupStepDescription(modelId);
    if (ssd.check) {
      const check = await ssd.check();
      if (check) await this.update({ complete: true });
      return check;
    } else {
      return null;
    }
  }

  async getOutcome(ssd?: SetupStepDescription, modelId?: string) {
    if (!ssd) ssd = this.getSetupStepDescription(modelId);
    if (ssd.outcome) return ssd.outcome();
    return null;
  }

  async getDisabled(ssd?: SetupStepDescription, modelId?: string) {
    if (!ssd) ssd = this.getSetupStepDescription(modelId);
    return ssd.disabled();
  }

  getSetupStepDescription(modelId: string) {
    const setupSteps = getSetupStepDescriptions(modelId);
    const ssdMatch = setupSteps.find((ssd) => ssd.key === this.key);
    if (ssdMatch) return ssdMatch;

    throw new Error(`Cannot find Setup Step Description for key ${this.key}`);
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }
}
