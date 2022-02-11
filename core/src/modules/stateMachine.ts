import { Model } from "sequelize-typescript";
import { CommonModel } from "../classes/commonModel";
import { modelName } from "./modelName";

export namespace StateMachine {
  export interface StateTransition {
    from: string;
    to: string;
    checks: ((instance: any) => Promise<any>)[];
  }

  export async function transition<T = any>(
    instance: CommonModel<T> & {
      state: string;
      _previousDataValues?: { state?: string };
      constructor?: { defaultState?: string };
    },
    transitions: StateTransition[]
  ) {
    const klass = modelName<Model>(instance);
    const newState: string = instance["state"];
    const oldState: string = instance["_previousDataValues"]["state"]
      ? instance["_previousDataValues"]["state"]
      : instance.constructor["defaultState"]
      ? instance.constructor["defaultState"]
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
}
