import Klaviyo from "node-klaviyo";
import Public from "node-klaviyo/lib/public";
import Profiles from "node-klaviyo/lib/profiles";
import Lists from "node-klaviyo/lib/lists";
import DataPrivacy from "node-klaviyo/lib/data-privacy";

export class KlaviyoClient extends Klaviyo {
  declare public: Public;
  declare profiles: Profiles;
  declare lists: Lists;
  declare dataPrivacy: DataPrivacy;

  constructor({ privateToken, publicToken }) {
    super({
      privateToken,
      publicToken,
    });
  }

  async findPersonIdByEmail(email: string): Promise<number> {
    if (!email) return null;

    let data;

    try {
      data = await this.profiles.getProfileIdByEmail(email);
    } catch (e) {
      return null;
    }

    return data.id;
  }
}
