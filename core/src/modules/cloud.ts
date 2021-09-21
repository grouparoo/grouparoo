import os from "os";
import path from "path";
import tar from "tar";
import fs from "fs";
import FormData from "form-data";
import { mkdtemp, copy, remove, readFile } from "fs-extra";
import axios, { AxiosError, AxiosInstance } from "axios";

export class CloudError extends Error {
  code: string;

  constructor({ code, message }: { code: string; message: string }) {
    super(message);
    this.code = code;
  }
}

export async function packageConfig(
  projectPath: string,
  configDirPath: string,
  tarballPath: string
) {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), "grouparoo-pack-"));
  await copy(
    path.join(projectPath, "package.json"),
    path.join(tempDir, "package.json")
  );

  await copy(configDirPath, path.join(tempDir, "config"), {
    filter: (src) => {
      const ext = path.extname(src);
      return !ext || [".json", ".js"].includes(ext);
    },
  });

  await tar.create(
    {
      file: tarballPath,
      cwd: tempDir,
      gzip: true,
      strict: true,
    },
    ["."]
  );

  await remove(tempDir);
  return tarballPath;
}

export interface ConfigurationApiData {
  id: string;
  state: string;
  projectId: string;
  toApply: boolean;
  errorMessage?: string;
  applyJobId?: string;
  validateJobId?: string;
  coreVersion: string;
  processedAt: string;
  validatedAt: string;
  appliedAt: string;
  finishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface JobApiData {
  id: string;
  type: string;
  state: string;
  configurationId: string;
  logs: string;
  completedAt: string;
  createdAt: string;
  updatedAt: string;
}

export class CloudClient {
  request: AxiosInstance;
  projectId: string;

  constructor(projectId: string, token: string) {
    const apiUrl =
      process.env.GROUPAROO_CLOUD_API_URL ?? "https://cloud.grouparoo.com";
    this.projectId = projectId;
    this.request = axios.create({
      baseURL: `${apiUrl}/api/v1`,
      params: {
        apiKey: token,
      },
    });
  }

  async createConfiguration(tarballPath: string, toApply: boolean) {
    const formData = new FormData();
    formData.append("_file", fs.createReadStream(tarballPath));
    formData.append("projectId", this.projectId);
    formData.append("toApply", toApply.toString());

    try {
      const res = await this.request.post("/configuration", formData, {
        headers: formData.getHeaders(),
      });

      const data: {
        configuration: ConfigurationApiData;
        requesterInformation: any;
      } = res.data;
      return data.configuration;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosErr = err as AxiosError;
        const cloudError = axiosErr.response?.data?.error;
        if (cloudError) throw new CloudError(cloudError);
      }
      throw err;
    }
  }

  async getConfiguration(configurationId: string) {
    try {
      const res = await this.request.get(`/configuration/${configurationId}`);
      const data: { configuration: ConfigurationApiData } = res.data;
      return data.configuration;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosErr = err as AxiosError;
        const cloudError = axiosErr.response?.data?.error;
        if (cloudError) throw new CloudError(cloudError);
      }
      throw err;
    }
  }

  async getJob(jobId: string) {
    try {
      const res = await this.request.get(`/job/${jobId}`);
      const data: { job: JobApiData } = res.data;
      return data.job;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosErr = err as AxiosError;
        const cloudError = axiosErr.response?.data?.error;
        if (cloudError) throw new CloudError(cloudError);
      }
      throw err;
    }
  }
}
