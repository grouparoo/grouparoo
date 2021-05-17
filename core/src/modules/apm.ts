import { api } from "actionhero";

export type APMWrap = (
  name: string,
  type: "action" | "task",
  data: any,
  run: Function
) => Promise<any>;

export namespace APM {
  export async function wrap(
    name: string,
    type: "action" | "task",
    data: any,
    run: Function
  ): Promise<void> {
    return api.apm.wrap(name, type, data, run);
  }
}
