import { helper } from "@grouparoo/spec-helper";

module.exports = {
  launch: {
    dumpio: true,
    headless: false,
    args: ["--disable-infobars"],
  },
  browserContext: "default",
  // server: {
  //   command: helper.grouparooTestServerDetached({
  //     port: 12345,
  //     truncate: true,
  //   }),
  //   port: 12345,
  // },
};
