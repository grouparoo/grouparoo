/**
 * Sometimes you *really* need to decouple a child object form a parent in a react useState method
 * TODO: Why is this require to break the object chain to rules?
 */
export function makeLocal(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}
