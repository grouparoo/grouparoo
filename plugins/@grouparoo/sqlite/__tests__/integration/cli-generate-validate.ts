import { join } from "path";
import { CLISpecHelper } from "@grouparoo/spec-helper";

CLISpecHelper.validateGenerators(
  "@grouparoo/sqlite",
  join(__dirname, "..", ".."),
  {
    bootstrappedPropertyOptions: {
      column: "id",
      aggregationMethod: "exact",
    },
  }
);
