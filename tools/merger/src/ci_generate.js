const glob = require("glob");
const fs = require("fs");
const path = require("path");
const Mustache = require("mustache");
const { allPackagePaths, allPluginPaths } = require("../../shared/packages");
const execSync = require("../../shared/exec");

const docker_image = "cimg/node:16.14";

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

const PLUGIN_LETTER_BUCKETS = ["f", "m", "r"];

class Generator {
  constructor(vargs) {
    this.vargs = vargs;
    this.rootPath = path.resolve(path.join(__dirname, "..", "..", ".."));
    this.jobList = [];
    this.caches = null;
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
    this.addUiConfig();
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
    this.addCommand("linter", "cd monorepo && pnpm run lint");
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
      type: "monorepo",
      job_name: `test-monorepo`,
      relative_path: `monorepo`,
      name: "monorepo",
    });

    this.jobList.push({
      type: "core-local",
      job_name: `test-core-local-models`,
      relative_path: `core`,
      name: "models",
    });

    this.jobList.push({
      type: "core-local",
      job_name: `test-core-local-actions`,
      relative_path: `core`,
      name: "actions",
    });

    this.jobList.push({
      type: "core-local",
      job_name: `test-core-local-tasks`,
      relative_path: `core`,
      name: "tasks",
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
      type: "ui-playwright",
      test_section: "ui-enterprise",
      job_name: `test-ui-enterprise`,
      relative_path: `ui`,
      name: "ui",
    });
  }

  addUiConfig() {
    this.jobList.push({
      type: "ui",
      test_section: "ui-config",
      job_name: `test-ui-config`,
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
    const methods = ["restore_cache"];
    for (const method of methods) {
      job[method] = this[method].bind(this);
    }

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

  fullNodeModuleList() {
    const packagePaths = allPackagePaths(glob);
    const relativePaths = [];
    for (const packagePath of packagePaths) {
      const fullPath = path.join(packagePath, "node_modules");
      const relativePath = path.relative(this.rootPath, fullPath);

      relativePaths.push(relativePath);
    }

    return relativePaths.sort();
  }

  restore_cache() {
    const cachePaths = this.getCachePaths();
    const cacheKeys = Object.keys(cachePaths);

    const header = " ".repeat(6) + "- restore_cache:";
    const prefix = " ".repeat(10) + "<<: *";
    return cacheKeys.map((p) => `${header}\n${prefix}${p}`).join("\n");
  }

  save_cache() {
    const cachePaths = this.getCachePaths();
    let out = "";
    for (const cache of Object.keys(cachePaths)) {
      out = out.concat(" ".repeat(6) + "- save_cache:\n");
      out = out.concat(" ".repeat(10) + `<<: *${cache}\n`);
      out = out.concat(" ".repeat(10) + `paths:\n`);
      for (const path of cachePaths[cache]) {
        out = out.concat(" ".repeat(12) + `- ${path}\n`);
      }
    }

    return out;
  }

  cache_keys() {
    const cachePaths = this.getCachePaths();
    let out = "";
    for (const cache of Object.keys(cachePaths)) {
      out = out.concat(" ".repeat(2) + `${cache}: &${cache}\n`);
      out = out.concat(
        " ".repeat(4) + `key: ${cache}-{{ .Branch }}-{{ .Revision }}\n`
      );
    }

    return out;
  }

  addModuleCache(cachePaths) {
    const modules = this.fullNodeModuleList();
    for (const path of modules) {
      let bucket = "module-other";
      const plugin = "plugins/@grouparoo/";
      if (path.startsWith(plugin)) {
        const child = path.slice(plugin.length);
        const first = child[0];
        let index = -1;
        for (let i = 0; i < PLUGIN_LETTER_BUCKETS.length; i++) {
          const letter = PLUGIN_LETTER_BUCKETS[i];
          if (first <= letter) {
            index = i;
            break;
          }
        }
        if (index < 0) {
          index = PLUGIN_LETTER_BUCKETS.length;
        }
        bucket = `plugin-${index + 1}`;
      }

      const cacheKey = `${bucket}-cache`;
      cachePaths[cacheKey] = cachePaths[cacheKey] || [];
      cachePaths[cacheKey].push(path);
    }
  }

  addDistCache(cachePaths) {
    const pluginPaths = allPluginPaths(glob).map((p) =>
      path.relative(this.rootPath, p)
    );
    const pluginDistDirs = pluginPaths.map((p) => `${p}/dist`);
    const cliDistDir = ["cli/dist"];
    const combinedDistDirs = [].concat(pluginDistDirs, cliDistDir).sort();

    for (const dir of combinedDistDirs) {
      let bucket = "module-other";
      const name = dir.replace("plugins/@grouparoo/", "").replace("/dist", "");

      let index = -1;
      for (let i = 0; i < PLUGIN_LETTER_BUCKETS.length; i++) {
        const letter = PLUGIN_LETTER_BUCKETS[i];
        if (name <= letter) {
          index = i;
          break;
        }
      }
      if (index < 0) {
        index = PLUGIN_LETTER_BUCKETS.length;
      }
      bucket = `dist-${index + 1}`;

      const cacheKey = `${bucket}-cache`;
      if (!cachePaths[cacheKey]) cachePaths[cacheKey] = [];
      cachePaths[cacheKey].push(dir);
    }
  }

  addCoreCache(cachePaths) {
    const cacheKey = "core-cache";

    const directories = [
      "core/dist",
      "ui/ui-community/.next",
      "ui/ui-enterprise/.next",
      "ui/ui-config/.next",
    ];

    cachePaths[cacheKey] = directories.sort();
  }

  getCachePaths() {
    if (this.caches) {
      return this.caches;
    }
    // returns list of all plugins with a category

    const cachePaths = {};
    this.addModuleCache(cachePaths);
    this.addDistCache(cachePaths);
    this.addCoreCache(cachePaths);
    this.caches = cachePaths;

    return this.caches;
  }

  renderJob(job, name) {
    const template = readTemplate(name, job.type);
    job.docker_image = docker_image;
    return Mustache.render(template, job);
  }

  jobs() {
    return this.jobList.map((j) => this.renderJob(j, "job")).join("\n");
  }

  workflows() {
    return this.jobList.map((j) => this.renderJob(j, "workflow")).join("\n");
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
    view.docker_image = docker_image;

    const methods = [
      "jobs",
      "workflows",
      "job_name_list",
      "save_cache",
      "cache_keys",
      "restore_cache",
    ];
    for (const method of methods) {
      view[method] = this[method].bind(this);
    }

    const customs = ["cache"];
    for (const section of customs) {
      const method = `custom_${section}`;
      view[method] = function () {
        const template = readTemplate(section, "global", "base");
        return Mustache.render(template, view);
      };
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
