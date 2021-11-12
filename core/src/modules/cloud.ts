import os from "os";
import path from "path";
import tar from "tar";
import fs from "fs";
import FormData from "form-data";
import fetch from "isomorphic-fetch";
import { mkdtemp, copy, remove } from "fs-extra";

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
  baseUrl: string;
  token: string;
  projectId: string;

  constructor(projectId: string, token: string) {
    this.projectId = projectId;
    this.token = token;
    this.baseUrl =
      process.env.GROUPAROO_CLOUD_API_URL ?? "https://cloud.grouparoo.com";
  }

  async request(url: string, options?: RequestInit) {
    const fetchUrl = new URL(url, this.baseUrl);
    fetchUrl.searchParams.append("apiToken", this.token);

    const res = await fetch(fetchUrl.toString(), options);
    const data = await res.json();

    if (res.status !== 200) {
      if (data.error) throw new CloudError(data.error);
      throw new Error(await res.text());
    }

    return data;
  }

  async createConfiguration(
    tarballPath: string,
    toApply: boolean,
    message?: string,
    externalUrl?: string
  ) {
    const formData = new FormData();
    formData.append("_file", fs.createReadStream(tarballPath));
    formData.append("projectId", this.projectId);
    formData.append("toApply", toApply.toString());

    if (message) formData.append("message", message);
    if (externalUrl) formData.append("externalUrl", externalUrl);

    const data: { configuration: ConfigurationApiData } = await this.request(
      "/api/v1/configuration",
      {
        method: "POST",
        //@ts-ignore typings are incorrectly not allowing FormData to be set as body
        body: formData,
        headers: formData.getHeaders(),
      }
    );
    return data.configuration;
  }

  async getConfiguration(configurationId: string) {
    const data: { configuration: ConfigurationApiData } = await this.request(
      `/api/v1/configuration/${configurationId}`
    );
    return data.configuration;
  }

  async getJob(jobId: string) {
    const data: { job: JobApiData } = await this.request(
      `/api/v1/job/${jobId}`
    );
    return data.job;
  }
}
