import { Initializer, route } from "actionhero";
const packageJSON = require("./../../package.json");

export default class PrometheusInitializer extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }

  async initialize() {
    route.registerRoute(
      "get",
      "/v:apiVersion/prometheus/metrics",
      "prometheus:getMetrics"
    );
  }

  async start() {}

  async stop() {}
}
