import Mixpanel from "./mixpanel";
import Profile from "./profile";

export default class Query {
  client: Mixpanel;
  profile: Profile;

  constructor(client: Mixpanel) {
    this.client = client;
    this.profile = new Profile(client, "https://api.mixpanel.com");
  }
}
