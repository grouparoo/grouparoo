import { TestPluginMethod } from "@grouparoo/core";
const { NodeVM } = require("vm2");

export const test: TestPluginMethod = async () => {
  const vm = new NodeVM({
    require: {
      console: "inherit",
    },
  });

  let successValue = vm.run(`
const returnFn = () => true;
module.exports = returnFn() 
  `);
  return { success: successValue };
};
