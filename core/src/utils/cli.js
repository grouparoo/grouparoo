const path = require("path");
const glob = require("glob");

function enumerateCLICommands() {
  return [].concat(loadStaticCommands(), loadCommands());
}

function loadStaticCommands() {
  // the commands from the CLI package itself aren't in the same format
  return [
    {
      name: "init <path>",
      description:
        'Initialize a new Grouparoo project.  Use "." for this directory.',
      example: "",
      inputs: {
        force: {
          letter: "f",
          description: "overwrite the generated files if they already exist",
          default: "false",
        },
      },
    },
    {
      name: "update",
      description: "Upgrade the NPM packages in this Grouparoo project",
      example: "",
      inputs: {},
    },
    {
      name: "install [package]",
      description:
        "Install a grouparoo plugin (via npm install) and enable it.  Use package@version for a specific version or tag",
      example: "",
      inputs: {},
    },
  ];
}

function loadCommands() {
  const files = glob.sync(path.join(__dirname, "..", "bin/**/*.js"));
  return files.map((f) => buildCLIInstance(f)).map((k) => getCLIArgs(k));
}

function buildCLIInstance(file) {
  const package = require(file);
  const klass = Object.values(package)[0];
  return new klass();
}

function getCLIArgs(command) {
  return {
    name: command.name,
    description: command.description,
    example: command.example,
    inputs: command.inputs,
  };
}

exports.enumerateCLICommands = enumerateCLICommands;
