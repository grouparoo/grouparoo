import { Action, config, api } from "actionhero";
import path from "path";
import { getParentPath, readPackageJson } from "../utils/pluginDetails";
import pluralize from "pluralize";

const SWAGGER_VERSION = "2.0";
const API_VERSION = 1;
const parentPackageJSON = readPackageJson(
  path.join(getParentPath(), "package.json")
);

const responses = {
  200: {
    description: "successful operation",
  },
  400: {
    description: "Invalid input",
  },
  404: {
    description: "Not Fount",
  },
  422: {
    description: "Missing or invalid params",
  },
  500: {
    description: "Server error",
  },
};

export class Swagger extends Action {
  constructor() {
    super();
    this.name = "swagger";
    this.description = "return API documentation";
    this.outputExample = {};
  }

  getLatestAction(route) {
    let matchedAction;
    Object.keys(api.actions.actions).forEach((actionName) => {
      Object.keys(api.actions.actions[actionName]).forEach((version) => {
        const action = api.actions.actions[actionName][version];
        if (action.name === route.action) {
          matchedAction = action;
        }
      });
    });

    return matchedAction;
  }

  buildSwaggerPaths() {
    const swaggerPaths = {};
    const tags = [];

    Object.keys(api.routes.routes).map((method) => {
      api.routes.routes[method].map((route) => {
        const action = this.getLatestAction(route);

        const tag = pluralize.singular(action.name.split(":")[0]);
        const formattedPath = route.path
          .replace("/v:apiVersion", "")
          .replace(/\/:(\w*)/, "/{$1}");

        swaggerPaths[formattedPath] = swaggerPaths[formattedPath] || {};
        swaggerPaths[formattedPath][method] = {
          tags: [tag],
          summary: action.description,
          // description: action.description, // this is redundant
          consumes: ["application/json"],
          produces: ["application/json"],
          parameters: Object.keys(action.inputs)
            .sort()
            .map((inputName) => {
              return {
                in: route.path.includes(`:${inputName}`) ? "path" : "query",
                name: inputName,
                type: "string", // not really true, but helps the swagger validator
                required:
                  action.inputs[inputName].required ||
                  route.path.includes(`:${inputName}`)
                    ? true
                    : false,
                default:
                  action.inputs[inputName].default !== null &&
                  action.inputs[inputName].default !== undefined &&
                  inputName !== "order" // this is a bit too complex to serialize
                    ? typeof action.inputs[inputName].default === "object"
                      ? JSON.stringify(action.inputs[inputName].default)
                      : `${action.inputs[inputName].default}`
                    : undefined,
              };
            }),
          responses,
          security: action.permission
            ? [
                { GrouparooCSRFTokenAndSessionCookie: [] },
                { GrouparooAPIKey: [] },
              ]
            : [],
        };

        if (!tags.includes(tag)) tags.push(tag);
      });
    });

    return { swaggerPaths, tags };
  }

  async run() {
    const url: string =
      process.env.WEB_URL ?? config.servers.web.allowedRequestHosts[0];
    const { swaggerPaths, tags } = this.buildSwaggerPaths();

    return {
      swagger: SWAGGER_VERSION,
      info: {
        description: parentPackageJSON.description,
        version: parentPackageJSON.version,
        title: parentPackageJSON.name,
        license: { name: parentPackageJSON.license },
      },
      host: url.replace("http://", "").replace("https://", ""),
      basePath: `/api/v${API_VERSION}`,
      tags: tags.map((tag) => {
        return { name: tag };
      }),
      schemes: url.includes("https") ? ["https"] : ["http"],
      paths: swaggerPaths,

      securityDefinitions: {
        GrouparooAPIKey: {
          type: "apiKey",
          name: "apiKey",
          in: "query",
        },
        GrouparooCSRFTokenAndSessionCookie: {
          type: "apiKey",
          name: "csrfToken",
          in: "query",
        },
      },
      externalDocs: {
        description: "Learn more about Grouparoo",
        url: "https://www.grouparoo.com",
      },
    };
  }
}
