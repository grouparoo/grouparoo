import * as crypto from "crypto";

export function generateMailchimpId(email: string) {
  let hash = crypto
    .createHash("md5")
    .update(email.toLowerCase().trim())
    .digest("hex");
  return hash;
}
