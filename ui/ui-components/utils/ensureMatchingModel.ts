import { ErrorHandler } from "../eventHandlers/errorHandler";

export function ensureMatchingModel(
  objType: string,
  objModel: string,
  expectedModel: string,
  errorHandler?: ErrorHandler
) {
  if (objModel !== expectedModel) {
    const err = new Error(`Cannot find ${objType} in ${expectedModel}`);
    if (errorHandler) {
      errorHandler.set({ message: err });
    } else {
      throw err;
    }
  }
}
