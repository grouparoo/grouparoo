import axios, { AxiosInstance } from "axios";

type ContactSearchParams = "email" | "phone" | "mobile" | "unique_external_id";

export class FreshdeskClient {
  readonly axios: AxiosInstance;

  constructor(readonly domainName: string, apiKey: string) {
    this.axios = axios.create({
      baseURL: domainName,
      auth: { username: apiKey, password: "X" },
    });

    this.axios.interceptors.response.use(
      (value) => {
        return value;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  async getContactBy(key: ContactSearchParams, value: string | number) {
    if (value === undefined) {
      return null;
    }

    const response = await this.axios.get("/api/v2/contacts", {
      params: { [key]: value },
    });
    if (response.data.length === 0) {
      return null;
    }
    return response.data[0];
  }

  async getAllContacts() {
    const response = await this.axios.get("/api/v2/contacts");
    return response.data;
  }

  async getContactById(id: number) {
    const response = await this.axios.get(`/api/v2/contacts/${id}`);
    return response.data;
  }

  async createContact(contact: any) {
    const response = await this.axios.post("/api/v2/contacts", contact);
    return response.data;
  }

  async updateContact(id: number, contact: any) {
    const response = await this.axios.put(`/api/v2/contacts/${id}`, contact);
    return response.data;
  }

  async forceDeleteContact(id: number) {
    const response = await this.axios.delete(
      `/api/v2/contacts/${id}/hard_delete`,
      {
        params: { force: true },
      }
    );
    return response.data;
  }

  async getCompanyByName(name: string) {
    if (!name?.trim()) {
      return null;
    }

    const response = await this.axios.get("/api/v2/companies/autocomplete", {
      params: { name },
    });

    return (
      response.data?.companies?.find(
        (company) => company.name.trim() === name.trim()
      ) ?? null
    );
  }

  async getAllCompanies() {
    const response = await this.axios.get("/api/v2/companies");
    return response.data;
  }

  async getCompanyById(id: number) {
    const response = await this.axios.get(`/api/v2/companies/${id}`);
    return response.data;
  }

  async createCompany(company: any) {
    const response = await this.axios.post("/api/v2/companies", company);
    return response.data;
  }

  async updateCompany(id: number, company: any) {
    const response = await this.axios.put(`/api/v2/companies/${id}`, company);
    return response.data;
  }

  async deleteCompany(id: number) {
    const response = await this.axios.delete(`/api/v2/companies/${id}`);
    return response.data;
  }
}
