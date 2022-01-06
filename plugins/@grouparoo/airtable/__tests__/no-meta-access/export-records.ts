import { testExportRecords } from "../utils/export-records";
import { helper } from "@grouparoo/spec-helper";
import { getUpdater } from "../utils/nockHelper";

helper.useNock(__filename, getUpdater("BASIC"));
testExportRecords("BASIC");
