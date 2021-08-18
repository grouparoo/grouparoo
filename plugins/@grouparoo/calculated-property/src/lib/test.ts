import { TestPluginMethod } from "@grouparoo/core";
const { NodeVM } = require("vm2");

export const test: TestPluginMethod = async () => {
  const vm = new NodeVM({
    require: {
      console: "inherit",
    },
  });

  let successValue = vm.run(`()=>{return true;}`);
  return { success: successValue };
};
