import fs from "fs-extra";
import path from "path";
import glob from "glob";

export namespace Templates {
  export function getTemplatePath(...filename: string[]) {
    const rootDir = path.join(__dirname, "..", "..", "templates");
    if (!filename || filename.length === 0) return rootDir;
    return path.join(rootDir, ...filename);
  }

  export function getConfigTemplates(): {
    absoluteFilePath: string;
    relativeFilePath: string;
  }[] {
    const templateDir = getTemplatePath();
    return glob
      .sync(`${templateDir}/config/**/*`, { nodir: true })
      .map((filePath) => ({
        absoluteFilePath: filePath,
        relativeFilePath: path.relative(templateDir, filePath),
      }));
  }

  export function replacePlaceholders(
    filename: string,
    replacements: { [key: string]: any }
  ) {
    let contents = fs.readFileSync(filename).toString();
    for (const key in replacements) {
      const match = new RegExp(`~~${key.toUpperCase()}~~`, "g");
      contents = contents.replace(match, replacements[key]);
    }
    fs.writeFileSync(filename, contents);
  }
}
