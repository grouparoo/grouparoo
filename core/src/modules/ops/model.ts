import { GrouparooModel } from "../../models/GrouparooModel";

export namespace ModelOps {
  export async function prepare() {
    const modelsCount = await GrouparooModel.count();
    if (modelsCount > 0) return;

    // Note: it is important to keep this synchronized with the default value in migration #000083
    await GrouparooModel.create({
      id: "mod_profiles",
      name: "Profiles",
      type: "profile",
    });
  }
}
