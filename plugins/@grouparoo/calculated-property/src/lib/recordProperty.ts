import {
  plugin,
  GrouparooRecord,
  RecordPropertyPluginMethod,
} from "@grouparoo/core";
import { NodeVM } from "vm2";

async function calculateRecordPropertyValue(
  customFunction,
  record: GrouparooRecord,
  propertyName: string
): Promise<string> {
  let populatedFunction;
  try {
    populatedFunction = await plugin.replaceTemplateRecordVariables(
      customFunction,
      record,
      false
    );

    //fail at every level if someone tries to require a library... this should never be allowed to hit vm.run
    const illegalStrings = [`require(`, `process.env`, `async`];
    for (const i in illegalStrings) {
      if (populatedFunction.includes(illegalStrings[i])) {
        populatedFunction = `()=>{ throw Error("cannot use ${illegalStrings[i]} in a calculated property")}`;
      }
    }
    //returns a string of the entire function
  } catch (error) {
    //if we don't have the right properties to build the function, bail
    console.log(error);
    return undefined;
  }
  let calculatedPropertyValue;

  //this works with vm and node vm... using node vm to allow for node modules in v2 of this feature
  const vm = new NodeVM({
    console: "inherit",
    sandbox: {},
    argv: [],
    env: {},
  });

  try {
    calculatedPropertyValue = vm.run(
      `const toRun = ${populatedFunction}; module.exports = toRun();`
    );
    if (calculatedPropertyValue === undefined) {
      throw Error("Calculated property's /`customFunction/` undefined");
    }
  } catch (error) {
    throw Error(`Could not calculate property: ${error}`);
  }

  return calculatedPropertyValue;
}

export const recordProperty: RecordPropertyPluginMethod = async (args) => {
  const recordPropertyValue = await calculateRecordPropertyValue(
    args.propertyOptions.customFunction,
    args.record,
    args.property.id
  );

  return [recordPropertyValue];
};
