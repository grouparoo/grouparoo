import {
  AllowNull,
  BeforeSave,
  DataType,
  Column,
  BeforeValidate,
  BeforeBulkCreate,
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
  @Column(DataType.STRING)
  state: S[number];

  getDefaultSate() {
    const defaultState: T["state"][number] =
      // @ts-expect-error TODO: this is messy
      this.constructor.defaultState ?? "draft";
    return defaultState;
  }

  getStateTransitions() {
    const transitions: StateTransition[] =
      // @ts-expect-error TODO: this is messy
      this.constructor.STATE_TRANSITIONS;
    return transitions;
  }

  @BeforeValidate
  static async applyDefaultState<T extends StateMachineModel<T>>(
    instance: StateMachineModel<T>
  ) {
    // this can't be done via an @Default decorator because we don't have access to the instance, just the Type
    const defaultState = instance.getDefaultSate();
    if (!instance.state) instance.state = defaultState;
  }

  @BeforeBulkCreate
  static async appleDefaultStates<T extends StateMachineModel<T>>(
    instances: StateMachineModel<T>[]
  ) {
    for (const instance of instances) {
      StateMachineModel.applyDefaultState(instance);
    }
  }

  @BeforeSave
  static async confirmStateTransition<T extends StateMachineModel<T>>(
    instance: StateMachineModel<T>
  ) {
    await validateStateTransition<T>(instance);
  }
}

async function validateStateTransition<T extends StateMachineModel<T>>(
  instance: StateMachineModel<T> & {
    _previousDataValues?: { state?: T["state"][number] };
  }
) {
  const klass = modelName(instance);
  const oldState = instance["_previousDataValues"]["state"];
  if (!oldState || instance.state === oldState) return;

  const transitions = instance.getStateTransitions();
  const transition = findTransition(oldState, instance.state, transitions);
  if (!transition) {
    throw new Error(
      `cannot transition ${klass} state from ${oldState} to ${instance.state}`
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
