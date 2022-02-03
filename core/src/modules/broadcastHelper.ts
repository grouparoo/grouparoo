import { chatRoom } from "actionhero";
import { CommonModel } from "../classes/commonModel";
import { modelName } from "../modules/modelName";

export async function broadcastModel<T>(
  instance: CommonModel<T>,
  verb = "create"
) {
  try {
    await chatRoom.broadcast({}, `model:${modelName<T>(instance)}`, {
      model: await instance.apiData(),
      verb,
    });
  } catch {}
}
