import fs from "fs-extra";
import path from "path";
import glob from "glob";

/**
 * Utilities for generating the file structure (.env, package.json, etc.) for a new project
 */
export namespace Templates {
  export function getTemplatePath(...filename: string[]) {
    const rootDir = path.join(__dirname, "..", "..", "templates");
    if (!filename || filename.length === 0) return rootDir;
    return path.join(rootDir, ...filename);
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
