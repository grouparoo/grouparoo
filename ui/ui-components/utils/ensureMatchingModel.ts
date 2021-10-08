import { ErrorHandler } from "./errorHandler";

export function ensureMatchingModel(
  objType: string,
  objModel: string,
  expectedModel: string,
  errorHandler?: ErrorHandler
) {
  if (objModel !== expectedModel) {
    const err = new Error(`Cannot find ${objType} in ${expectedModel}`);
    if (errorHandler) {
      errorHandler.set({ error: err });
    } else {
      throw err;
    }
  }
}
