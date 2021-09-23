import { GrouparooModel } from "../../models/GrouparooModel";

export namespace ModelOps {
  export async function prepare() {
    const modelsCount = await GrouparooModel.count();
    if (modelsCount > 0) return;

    await GrouparooModel.create({
      id: "mod_profiles",
      name: "Profiles",
      type: "profile",
    });
  }
}
