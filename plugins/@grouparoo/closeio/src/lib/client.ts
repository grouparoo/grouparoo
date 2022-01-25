import { AxiosInstance } from "axios";
import Closeio from "close.io";

export class CloseioClient {
  closeio: Closeio;

  constructor(apiKey: string) {
    this.closeio = new Closeio(apiKey);
  }

  async getCurrentUser() {
    return await this.closeio._get("/me");
  }

  async findLeadIdByName(name: string) {
    const response = await this.closeio.lead.search({ name });

    if (response.data.length === 0) {
      return null;
    }

    return response.data[0].id;
  }

  async findContactIdByName(name: string) {
    const response = await this.closeio.contact.search({ name });

    if (response.data.length === 0) {
      return null;
    }

    return response.data[0].id;
  }
}
