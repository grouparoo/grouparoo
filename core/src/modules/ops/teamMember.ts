import bcryptjs from "bcryptjs";
import { TeamMember } from "../../models/TeamMember";

const SALT_ROUNDS = 10;

export namespace TeamMemberOps {
  /**
   * Set a Team Member's Password
   */
  export async function updatePassword(
    teamMember: TeamMember,
    password: string
  ) {
    teamMember.passwordHash = bcryptjs.hashSync(
      password,
      bcryptjs.genSaltSync(SALT_ROUNDS)
    );
    await teamMember.save();
    return true;
  }

  /**
   * Check a Team Member's Password
   */
  export async function checkPassword(
    teamMember: TeamMember,
    password: string
  ) {
    if (!teamMember.passwordHash) {
      throw new Error("password not set for this team member");
    }

    const match: boolean = await bcryptjs.compareSync(
      password,
      teamMember.passwordHash
    );
    return match;
  }
}
