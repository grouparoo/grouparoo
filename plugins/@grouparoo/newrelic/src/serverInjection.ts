process.env.NEW_RELIC_NO_CONFIG_FILE = "true"; // we are only using ENV to manage newrelic

if (process.env.NEW_RELIC_LICENSE_KEY) {
  require("newrelic");
}

export default function main() {
  if (process.env.NEW_RELIC_LICENSE_KEY) {
    console.log("newrelic injected into application");
  } else {
    console.log(
      "not injecting newrelic because NEW_RELIC_LICENSE_KEY is not set"
    );
  }
}
