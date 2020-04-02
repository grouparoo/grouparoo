import { Model } from "sequelize-typescript";

export namespace StateMachine {
  export interface StateTransition {
    from: string;
    to: string;
    checks: Array<string>;
  }

  export async function transition(
    instance: Model,
    transitions: Array<StateTransition>
  ) {
    const klass = modelName(instance);
    const newState: string = instance["state"];
    const oldState: string = instance["_previousDataValues"]["state"];
    if (!newState || !oldState || newState === oldState) {
      return;
    }

    const transition = findTransition(oldState, newState, transitions);
    if (!transition) {
      throw new Error(
        `cannot transition ${klass} from ${oldState} to ${newState}`
      );
    }

    for (const i in transition.checks) {
      const check = transition.checks[i];
      await instance[check]();
    }
  }

  function findTransition(
    from: string,
    to: string,
    transitions: Array<StateTransition>
  ) {
    return transitions.filter((t) => {
      if (t.from === from && t.to === to) {
        return true;
      } else {
        return false;
      }
    })[0];
  }

  function modelName(instance: Model): string {
    let name = instance.constructor.name;
    name = name[0].toLowerCase() + name.substr(1);
    return name;
  }
}
