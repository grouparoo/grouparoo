import {
  ConfigurationObject,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { log } from "actionhero";
import { Profile } from "../../models/Profile";

export async function loadProfile(
  configObject: ConfigurationObject,
  externallyValidate: boolean,
  validate = false
) {
  const { isNew } = await Profile.findOrCreateByUniqueProfileProperties(
    configObject.properties
  );

  if (isNew) {
    log(
      `[ config ] created Profile ${JSON.stringify(configObject.properties)}`,
      "notice"
    );
  }
}
