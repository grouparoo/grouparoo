const fs = require("fs");
const path = require("path");
const Mustache = require("mustache");
const { allPackagePaths, allPluginPaths } = require("../../shared/packages");

module.exports.cmd = async function (vargs) {
  const instance = new Generator(vargs);
  await instance.generate();
};

function readTemplate(name, type) {
  const dirPath = path.resolve(path.join(__dirname, "..", "data", "ci"));
  const fileName = `${name}.yml.template`;
  let templatePath;
  if (type) {
    templatePath = path.join(dirPath, type, fileName);
  } else {
    templatePath = path.join(dirPath, fileName);
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

  addPlugin(fullPath) {
    const relative_path = path.relative(this.rootPath, fullPath);
    const name = path.basename(fullPath);
    this.jobList.push({
      type: "plugin",
      job_name: `test-plugin-${name}`,
      name,
      relative_path,
    });
  }
  addPlugins(name) {
    const pluginPaths = allPluginPaths();
    for (const fullPath of pluginPaths) {
      this.addPlugin(fullPath);
    }
  }

  bindJobMethods() {
    const methods = ["setup_steps", "core_job_name_list"];

    for (const job of this.jobList) {
      for (const method of methods) {
        job[method] = this[method].bind(this, job);
      }
    }
  }
  setup_steps(job) {
    const template = readTemplate("setup_steps");
    return Mustache.render(template, job);
  }

  node_module_list() {
    const indent = 12;
    const packagePaths = allPackagePaths();
    const relativePaths = [];
    for (const packagePath of packagePaths) {
      const fullPath = path.join(packagePath, "node_modules");
      const relativePath = path.relative(this.rootPath, fullPath);
      relativePaths.push(relativePath);
    }

    const prefix = " ".repeat(12) + "- ";
    return relativePaths.map((p) => `${prefix}${p}`).join("\n");
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

    const methods = ["node_module_list", "jobs", "workflows", "job_name_list"];
    for (const method of methods) {
      view[method] = this[method].bind(this);
    }
    return view;
  }

  async generate() {
    this.compile();
    const baseTemplate = readTemplate("base");
    const rendered = Mustache.render(baseTemplate, this.baseView());
    console.log(rendered);
  }
}
