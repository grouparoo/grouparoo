// exports
export { plugin } from "./modules/plugin";
export * from "./classes/plugin";
export * from "./classes/configTemplate";
export { AuthenticatedAction } from "./classes/actions/authenticatedAction";
export { OptionallyAuthenticatedAction } from "./classes/actions/optionallyAuthenticatedAction";

export { GrouparooModel } from "./models/GrouparooModel";
export { App, SimpleAppOptions } from "./models/App";
export { ApiKey } from "./models/ApiKey";
export {
  Destination,
  SimpleDestinationOptions,
  DestinationSyncMode,
  DestinationSyncOperations,
} from "./models/Destination";
export { DestinationGroupMembership } from "./models/DestinationGroupMembership";
export { Export } from "./models/Export";
export { ExportProcessor } from "./models/ExportProcessor";
export { Group, GroupRuleWithKey } from "./models/Group";
export { GroupMember } from "./models/GroupMember";
export { GroupRule } from "./models/GroupRule";
export { Import } from "./models/Import";
export { Notification } from "./models/Notification";
export { Mapping } from "./models/Mapping";
export { Option } from "./models/Option";
export { OAuthRequest } from "./models/OAuthRequest";
export { Permission } from "./models/Permission";
export { GrouparooRecord } from "./models/GrouparooRecord";
export { RecordProperty } from "./models/RecordProperty";
export {
  Property,
  PropertyTypes,
  PropertyFiltersWithKey,
  SimplePropertyOptions,
} from "./models/Property";
export { Filter } from "./models/Filter";
export { RecordMultipleAssociationShim } from "./models/RecordMultipleAssociationShim";
export { Run, HighWaterMark } from "./models/Run";
export {
  Schedule,
  SimpleScheduleOptions,
  PluginConnectionScheduleOption,
  ScheduleFiltersWithKey,
} from "./models/Schedule";
export { Session } from "./models/Session";
export { Setting } from "./models/Setting";
export { SetupStep } from "./models/SetupStep";
export { Source, SimpleSourceOptions, SourceMapping } from "./models/Source";
export { Team } from "./models/Team";
export { TeamMember } from "./models/TeamMember";
export { AppRefreshQuery } from "./models/AppRefreshQuery";

export { Status } from "./modules/status";
export { StatusMetric } from "./modules/statusReporters";
export { GrouparooCLI } from "./modules/cli";

export { waitForLock } from "./modules/locks";
export { Errors } from "./modules/errors";
export * from "./modules/cache";
export * from "./modules/tableSpeculation";

export * from "./modules/oAuth";

export type { GrouparooRunMode } from "./modules/runMode";

export type { Action, ParamsFrom } from "actionhero";

// ensure config types are loaded
import "./config/api";
import "./config/batchSize";
import "./config/environment";
import "./config/errors";
import "./config/logger";
import "./config/next";
import "./config/pluginInjection";
import "./config/plugins";
import "./config/redis";
import "./config/routes";
import "./config/sequelize";
import "./config/tasks";
import "./config/telemetry";
import "./config/web";
import "./config/websocket";
import "./initializers/plugins";
import "./initializers/apm";
import "./initializers/codeConfig";
import "./initializers/next";
import "./initializers/notifiers";
import "./initializers/plugins";
import "./initializers/session";
