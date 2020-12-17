import {
  Table,
  Column,
  AllowNull,
  Default,
  Length,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { SetupStepOps } from "../modules/ops/setupSteps";
import { Transaction } from "sequelize";

@Table({ tableName: "setupSteps", paranoid: false })
export class SetupStep extends LoggedModel<SetupStep> {
  guidPrefix() {
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
    const outcome = await this.getOutcome(ssd);

    return {
      guid: this.guid,
      position: this.position,
      key: this.key,
      title,
      description,
      href,
      cta,
      outcome,
      skipped: this.skipped,
      complete: this.complete,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
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

  static async findByGuid(guid: string, transaction?: Transaction) {
    const instance = await this.scope(null).findOne({
      where: { guid },
      transaction,
    });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }
}
