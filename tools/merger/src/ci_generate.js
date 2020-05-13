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
    this.addCores();
    this.addPlugins();

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
    this.addCommand("linter", "npm run lint");
  }

  addCore(name) {
    this.jobList.push({
      type: "core",
      job_name: `test-core-${name}`,
      relative_path: `core/${name}`,
      name,
    });
  }
  addCores(name) {
    this.addCore("api");
    this.addCore("web");
  }

  getPlugin(fullPath) {
    const relative_path = path.relative(this.rootPath, fullPath);
    const name = path.basename(fullPath);
    return {
      type: "plugin",
      job_name: `test-plugin-${name}`,
      name,
      relative_path,
    };
  }
  addPlugins(name) {
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

  node_module_list() {
    const indent = 12;
    const packagePaths = allPackagePaths(glob);
    const relativePaths = [];
    for (const packagePath of packagePaths) {
      const fullPath = path.join(packagePath, "node_modules");
      const relativePath = path.relative(this.rootPath, fullPath);
      relativePaths.push(relativePath);
    }

    const prefix = " ".repeat(12) + "- ";
    return relativePaths
      .map((p) => `${prefix}${p}`)
      .sort()
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
    const indent = 12;
    const prefix = " ".repeat(12) + "- ";
    const coreJobList = this.jobList.filter((j) => j.type === "core");
    return coreJobList.map((j) => `${prefix}${j.job_name}`).join("\n");
  }

  job_name_list() {
    const indent = 12;
    const prefix = " ".repeat(12) + "- ";
    return this.jobList.map((j) => `${prefix}${j.job_name}`).join("\n");
  }

  baseView() {
    const view = {};
    // these get passed through
    view[".Branch"] = "{{ .Branch }}";
    view[".Revision"] = "{{ .Revision }}";
    view['checksum "combined_package_lock"'] =
      '{{ checksum "combined_package_lock" }}';

    const methods = ["node_module_list", "jobs", "workflows", "job_name_list"];
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

    const internalPackages = allPluginPaths(glob).filter((p) =>
      p.match(/@grouparoo-inc/)
    );
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
