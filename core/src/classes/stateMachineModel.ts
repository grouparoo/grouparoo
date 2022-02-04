import {
  AllowNull,
  BeforeSave,
  DataType,
  Column,
  Default,
} from "sequelize-typescript";
import { NonAbstract } from "sequelize-typescript/dist/shared/types";
import { modelName } from "../modules/modelName";
import { CommonModel } from "./commonModel";

export interface StateTransition<
  S extends readonly string[] = readonly string[]
> {
  from: S[number];
  to: S[number];
  checks: ((instance: any) => Promise<any>)[];
}

export type StateMachineModelStatic<M> = (new () => M) &
  NonAbstract<typeof StateMachineModel>;

export abstract class StateMachineModel<
  T extends StateMachineModel<T, S>,
  S extends readonly string[] = readonly string[]
> extends CommonModel<T> {
  static defaultState: string;
  static STATE_TRANSITIONS: StateTransition[];
  static STATES: readonly string[];

  @AllowNull(false)
  @Default(StateMachineModel.defaultState ?? "draft")
  @Column(DataType.ENUM())
  state: S[number];

  @BeforeSave
  static async confirmStateTransition<T extends StateMachineModel<T>>(
    instance: StateMachineModel<T>
  ) {
    await validateStateTransition<T>(
      instance,
      StateMachineModel.STATE_TRANSITIONS
    );
  }
}

async function validateStateTransition<T extends StateMachineModel<T>>(
  instance: StateMachineModel<T> & {
    _previousDataValues?: { state?: T["state"][number] };
  },
  transitions: StateTransition[]
) {
  const klass = modelName(instance);
  const newState = instance["state"];
  const oldState = instance["_previousDataValues"]["state"]
    ? instance["_previousDataValues"]["state"]
    : StateMachineModel.defaultState
    ? StateMachineModel.defaultState
    : "draft";

  if (!newState || newState === oldState) return;

  const transition = findTransition(oldState, newState, transitions);
  if (!transition) {
    throw new Error(
      `cannot transition ${klass} state from ${oldState} to ${newState}`
    );
  }

  for (const i in transition.checks) {
    const check = transition.checks[i];
    await check(instance);
  }
}

function findTransition(
  from: string,
  to: string,
  transitions: StateTransition[]
) {
  return transitions.find((t) => t.from === from && t.to === to);
}
