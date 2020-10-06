/**
 * While there are many more robust ways to validate an email, we have seen our customers use long domains or suffixes to map to internal tools, deactivated users, etc.
 * We will only be validating that 1) there is an @ and 2) there is a . after the @.
 *
 * We cannot use import isEmail from "validator/lib/isEmail" until https://github.com/validatorjs/validator.js/pull/1435 is merged in.
 */
export default function isEmail(string: string) {
  if (string.match(/^\S+@\S+\.\S+$/)) return true;
  return false;
}
