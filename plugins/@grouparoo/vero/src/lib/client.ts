import axios, { AxiosInstance } from "axios";

export class VeroClient {
  request: AxiosInstance;
  private authToken: string;

  constructor(authToken: string) {
    this.authToken = authToken;
    this.request = axios.create({
      baseURL: "https://api.getvero.com/api/v2",
    });
  }

  createOrUpdateUser(userInfo: any) {
    return this.request.post("/users/track", {
      ...userInfo,
      auth_token: this.authToken,
    });
  }

  changeUserId(oldID: any, newID: any) {
    return this.request.put("/users/reidentify", {
      id: oldID,
      new_id: newID,
      auth_token: this.authToken,
    });
  }

  deleteUser(userID: any) {
    return this.request.post("/users/delete", {
      id: userID,
      auth_token: this.authToken,
    });
  }

  updateUserTags(
    userID: any,
    addTags: string[] = [],
    removeTags: string[] = []
  ) {
    return this.request.put("/users/tags/edit", {
      id: userID,
      add: addTags,
      remove: removeTags,
      auth_token: this.authToken,
    });
  }
}
