import fs from "fs-extra";
import path from "path";

export namespace Templates {
  export function getTemplatePath(filename: string) {
    return path.join(__dirname, "..", "..", "templates", filename);
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
