import { helper } from "@grouparoo/spec-helper";

module.exports = {
  launch: {
    dumpio: true,
    headless: false,
    args: ["--disable-infobars"],
  },
  browserContext: "default",
};
