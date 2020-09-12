import { runAction } from "./util/runAction";
import { TeamMember, Team } from "@grouparoo/core";

export async function teams() {
  await getAdmin();
}

const ADMIN_EMAIL = "demo@grouparoo.com";

export async function getAdmin() {
  const found = await TeamMember.scope(null).findOne({
    where: { email: ADMIN_EMAIL },
  });
  if (found) {
    return found;
  }
  const team = await Team.scope(null).findOne({
    where: { locked: true, permissionAllRead: true, permissionAllWrite: true },
  });

  const userProperties = {
    firstName: "Demo",
    lastName: "Admin",
    password: "password",
    email: ADMIN_EMAIL,
    subscribe: false,
  };

  if (team) {
    await runAction(
      "teamMember:create",
      Object.assign(userProperties, { teamGuid: team.guid })
    );
  } else {
    // otherwise make the whole first thing
    await runAction("team:initialize", userProperties);
  }

  const made = await TeamMember.scope(null).findOne({
    where: { email: ADMIN_EMAIL },
  });
  if (!made) {
    throw new Error("Admin user not created!");
  }
  return made;
}
