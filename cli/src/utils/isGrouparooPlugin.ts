import "isomorphic-fetch";

/**
 *
 * @param pkg already has the version appended with @ or `latest`
 */
export async function isGrouparooPlugin(pkg: string) {
  let pkgUrl = `https://registry.npmjs.com`;
  const parts = pkg.split("@");

  if (parts.length === 3) {
    pkgUrl += `/@${parts[1]}/${parts[2]}`;
  } else {
    pkgUrl += `/${parts[0]}/${parts[1]}`;
  }

  const response = await fetch(pkgUrl);
  const packageJson = await response.json();

  // if we can't find this package, the install step will tell us more info (doesn't exist? needs auth?)
  if (packageJson === "Unauthorized" || packageJson.error) return true;

  const deps = [].concat(
    Object.keys(packageJson.dependencies ?? []),
    Object.keys(packageJson.devDependencies ?? []),
    Object.keys(packageJson.peerDependencies ?? [])
  );

  if (deps.includes(`@grouparoo/core`)) return true;
  return false;
}
