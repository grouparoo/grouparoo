import bcrypt from "bcrypt";
import { TeamMember } from "../../models/TeamMember";

export namespace TeamMemberOps {
  /**
   * Set a Team Member's Password
   */
  export async function updatePassword(
    teamMember: TeamMember,
    password: string,
    transaction = undefined
  ) {
    teamMember.passwordHash = await bcrypt.hash(
      password,
      teamMember.saltRounds
    );
    await teamMember.save({ transaction });
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

    const match: boolean = await bcrypt.compare(
      password,
      teamMember.passwordHash
    );
    return match;
  }
}
