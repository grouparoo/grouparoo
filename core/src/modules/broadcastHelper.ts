import { chatRoom } from "actionhero";
import { CommonModel } from "../classes/commonModel";
import { modelName } from "../modules/modelName";

export const broadcastModel = async (
  instance: CommonModel<any>,
  verb = "create"
) => {
  try {
    await chatRoom.broadcast({}, `model:${modelName(instance)}`, {
      model: await instance.apiData(),
      verb,
    });
  } catch {}
};
