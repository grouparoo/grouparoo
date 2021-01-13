import path from "path";
import { ConfigTemplate } from "../classes/configTemplate";

export class TeamMemberTemplate extends ConfigTemplate {
  constructor() {
    super();
    this.class = "teamMember";
    this.name = "team:member";
    this.description = "Config for a Grouparoo Team Member";
    this.rootPath = path.join(
      __dirname,
      "..",
      "..",
      "public",
      "templates",
      "teamMembers"
    );
    this.files = [path.join("*.template")];
    this.inputs = {
      id: {
        required: true,
        description: "The ID of this Team Member, used to determine the guid",
      },
      "team-id": {
        required: true,
        description: "The ID of the team that this Team Member belongs to",
      },
      email: {
        required: true,
        description: "The email address of this Team Member",
      },
      "first-name": {
        required: false,
        description: "The Team Member's first name",
        default: "Team",
      },
      "last-name": {
        required: false,
        description: "The Team Member's last name",
        default: "Member",
      },
      password: {
        required: false,
        description: "The Team Member's password",
        default: "",
      },
    };
  }

  async run({ params }) {
    return this.mustacheAllFiles(params);
  }
}
