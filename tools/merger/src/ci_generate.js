const glob = require("glob");
const fs = require("fs");
const path = require("path");
const Mustache = require("mustache");
const { allPackagePaths, allPluginPaths } = require("../../shared/packages");
const execSync = require("../../shared/exec");

module.exports.cmd = async function (vargs) {
  const instance = new Generator(vargs);
  await instance.generate();
};

const internalPackages = allPluginPaths(glob).filter((p) =>
  p.match(/@grouparoo-inc/)
);

function readTemplate(name, type, sub) {
  const dirPath = path.resolve(path.join(__dirname, "..", "data", "ci"));
  const fileName = `${name}.yml.template`;
  let templatePath;
  if (sub) {
    templatePath = path.join(dirPath, type, sub, fileName);
  } else if (type) {
    templatePath = path.join(dirPath, type, fileName);
  } else {
    templatePath = path.join(dirPath, fileName);
  }
  if (!fs.existsSync(templatePath)) {
    if (sub) {
      // this is ok, not there
      return "";
    } else {
      throw `template not found: ${templatePath}`;
    }
  }
  return fs.readFileSync(templatePath).toString();
}

class Generator {
  constructor(vargs) {
    this.vargs = vargs;
    this.rootPath = path.resolve(path.join(__dirname, "..", "..", ".."));
    this.jobList = [];
  }

  log(level, ...toLog) {
    const wanted = this.vargs.verbose || 0;
    if (wanted >= level) {
      console.log(...toLog);
    }
  }

  compile() {
    this.addCommands();
    this.addCore();
    this.addUiComponents();
    this.addUiCommunity();
    this.addUiEnterprise();
    this.addStagingCommunity();
    this.addStagingEnterprise();
    this.addPlugins();
    this.addCLI();

    this.bindJobMethods();
  }

  addCommand(name, command) {
    this.jobList.push({
      type: "command",
      job_name: name,
      name,
      command,
    });
  }
  addCommands() {
    this.addCommand("license-checker", "./tools/license-checker/check");
    this.addCommand("spell-checker", "./tools/spell-checker/check");
    this.addCommand("linter", "pnpm run lint");
  }

  addCore() {
    const coreTestDir = path.join(__dirname, "../../../core/__tests__");
    const coreDirs = fs.readdirSync(coreTestDir);
    const excludedDirs = ["utils", "fixtures", "data"];
    const testDirs = coreDirs.filter((dir) => !excludedDirs.includes(dir));
    testDirs.map((dir) => {
      this.jobList.push({
        type: `core`,
        test_section: dir,
        job_name: `test-core-api`,
        relative_path: `core`,
        name: "core",
      });
    });

    this.jobList.push({
      type: "core-local",
      job_name: `test-core-local`,
      relative_path: `core`,
      name: "core",
    });
  }

  addUiComponents() {
    this.jobList.push({
      type: "ui",
      test_section: "ui-components",
      job_name: `test-ui-components`,
      relative_path: `ui`,
      name: "ui",
    });
  }

  addUiCommunity() {
    this.jobList.push({
      type: "ui",
      test_section: "ui-community",
      job_name: `test-ui-community`,
      relative_path: `ui`,
      name: "ui",
    });
  }

  addUiEnterprise() {
    this.jobList.push({
      type: "ui",
      test_section: "ui-enterprise",
      job_name: `test-ui-enterprise`,
      relative_path: `ui`,
      name: "ui",
    });
  }

  addStagingCommunity() {
    this.jobList.push({
      type: "apps",
      section: "staging-community",
      job_name: `test-staging-community`,
      relative_path: `apps`,
      name: "staging-community",
    });
  }

  addStagingEnterprise() {
    this.jobList.push({
      type: "apps",
      section: "staging-enterprise",
      job_name: `test-staging-enterprise`,
      relative_path: `apps`,
      name: "staging-enterprise",
    });
  }

  addCLI() {
    this.jobList.push({
      type: "cli",
      job_name: `test-cli`,
      relative_path: `cli`,
      name: "cli",
    });
  }

  getPlugin(fullPath) {
    const relative_path = path.relative(this.rootPath, fullPath);
    const name = path.basename(fullPath);
    const type = relative_path.split(path.sep)[0].replace(/s$/, "");
    return {
      type: type,
      job_name: `test-${type}-${name}`,
      name,
      relative_path,
    };
  }
  addPlugins() {
    const pluginPaths = allPluginPaths(glob);
    let plugins = [];
    for (const fullPath of pluginPaths) {
      plugins.push(this.getPlugin(fullPath));
    }
    plugins.sort((a, b) => a.name.localeCompare(b.name));
    for (const plugin of plugins) {
      this.jobList.push(plugin);
    }
  }

  bindJobMethod(job) {
    job.core_job_name_list = this.core_job_name_list.bind(this);

    const customs = ["docker", "steps", "test"];
    for (const section of customs) {
      const method = `custom_${section}`;
      job[method] = function () {
        const template = readTemplate(section, job.type, job.name);
        return Mustache.render(template, job);
      };
    }
  }
  bindJobMethods() {
    for (const job of this.jobList) {
      this.bindJobMethod(job);
    }
  }

  full_node_module_list() {
    const packagePaths = allPackagePaths(glob);
    const relativePaths = [];
    for (const packagePath of packagePaths) {
      const fullPath = path.join(packagePath, "node_modules");
      const relativePath = path.relative(this.rootPath, fullPath);

      if (internalPackages.length > 0) {
        if (relativePath.indexOf(`plugins/@grouparoo/`) < 0) {
          relativePaths.push(relativePath);
        }
      } else {
        relativePaths.push(relativePath);
      }
    }

    const prefix = " ".repeat(12) + "- ";
    return relativePaths.map((p) => `${prefix}${p}`).sort();
  }

  plugin_node_module_list(mode) {
    return this.full_node_module_list()
      .filter((path) => path.includes("plugins/@grouparoo"))
      .filter((item, idx) => {
        if (mode === "even") {
          return idx % 2 === 0;
        } else if (mode === "odd") {
          return idx % 2 !== 0;
        } else {
          return true;
        }
      })
      .join("\n");
  }

  plugin_node_module_list_even() {
    return this.plugin_node_module_list("even");
  }

  plugin_node_module_list_odd() {
    return this.plugin_node_module_list("odd");
  }

  other_node_module_list() {
    return this.full_node_module_list()
      .filter((path) => !path.includes("plugins/@grouparoo"))
      .join("\n");
  }

  dist_list() {
    function filterPlugins(p) {
      if (internalPackages.length > 0) {
        if (p.indexOf(`plugins/@grouparoo/`) < 0) {
          return true;
        }
      } else {
        return true;
      }
    }

    const pluginPaths = allPluginPaths(glob)
      .map((p) => path.relative(this.rootPath, p))
      .filter(filterPlugins);
    const pluginDistDirs = pluginPaths;
    const cliDistDir = ["cli"];

    const prefix = " ".repeat(12) + "- ";
    const combinedDistDirs = []
      .concat(pluginDistDirs, cliDistDir)
      .map((p) => `${prefix}${p}/dist`)
      .sort()
      .join("\n");

    return combinedDistDirs;
  }

  core_cache() {
    const prefix = " ".repeat(12) + "- ";

    if (internalPackages.length > 0) {
      return [];
    }

    return ["core/dist", "ui/ui-community/.next", "ui/ui-enterprise/.next"]
      .map((p) => `${prefix}${p}`)
      .join("\n");
  }

  renderJob(job, name) {
    const template = readTemplate(name, job.type);
    return Mustache.render(template, job);
  }

  jobs() {
    return this.jobList.map((j) => this.renderJob(j, "job")).join("\n");
  }

  workflows() {
    return this.jobList.map((j) => this.renderJob(j, "workflow")).join("\n");
  }

  core_job_name_list() {
    const prefix = " ".repeat(12) + "- ";
    const coreJobList = this.jobList.filter((j) => j.type === "core");
    return coreJobList.map((j) => `${prefix}${j.job_name}`).join("\n");
  }

  job_name_list() {
    const prefix = " ".repeat(12) + "- ";
    return this.jobList
      .map((j) =>
        j.type === "core"
          ? `${prefix}test-${j.type}-${j.test_section}`
          : `${prefix}${j.job_name}`
      )
      .join("\n");
  }

  baseView() {
    const view = {};
    // these get passed through
    view[".Branch"] = "{{ .Branch }}";
    view[".Revision"] = "{{ .Revision }}";

    const methods = [
      "plugin_node_module_list_even",
      "plugin_node_module_list_odd",
      "other_node_module_list",
      "dist_list",
      "jobs",
      "workflows",
      "job_name_list",
      "core_cache",
    ];
    for (const method of methods) {
      view[method] = this[method].bind(this);
    }

    const customs = ["cache"];
    for (const section of customs) {
      const method = `custom_${section}`;
      view[method] = function () {
        const template = readTemplate(section, "global", "base");
        return Mustache.render(template, {});
      };
    }

    if (internalPackages.length === 0) {
      view.publish = readTemplate("core", "publish");
    } else {
      view.publish = readTemplate("internal", "publish");
    }

    return view;
  }

  async generate() {
    this.compile();
    const baseTemplate = readTemplate("base");
    const rendered = Mustache.render(baseTemplate, this.baseView());

    // removes empty lines
    const toWrite = rendered.replace(/^\s*$(?:\r\n?|\n)/gm, "");
    this.log(1, toWrite);

    const ymlPath = path.join(this.rootPath, ".circleci", "config.yml");
    fs.writeFileSync(ymlPath, toWrite);

    // prettier format
    const pCmd = path.join(
      this.rootPath,
      "tools",
      "merger",
      "node_modules",
      ".bin",
      "prettier"
    );
    const pConfig = path.join(this.rootPath, ".prettierrc");
    await execSync(`'${pCmd}' --config '${pConfig}' --write '${ymlPath}'`);
  }
}
