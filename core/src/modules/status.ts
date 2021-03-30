import { api, config } from "actionhero";

export namespace Status {
  export const maxSamples = 100;
  export const sampleFrequencyMS = 1000 * 5;
  export const cachePrefix = `${config.general.cachePrefix}status:samples:`;

  export interface StatusObject {
    timestamp: number;
    samples: StatusObjectTopic[];
  }

  export interface StatusObjectTopic {
    [topic: string]: {
      [key: string]: number;
    };
  }

  export async function get() {
    const redis = getRedis();
    const values = (await redis.mget(`${cachePrefix}*`))
      .slice(0, maxSamples)
      .map((v) => (JSON.stringify(v) as unknown) as StatusObject)
      .sort((a, b) => {
        return b.timestamp - a.timestamp;
      });

    return values;
  }

  export async function set(samples: StatusObjectTopic[]) {
    const now = new Date();
    const status: StatusObject = {
      timestamp: now.getTime(),
      samples,
    };

    const redis = getRedis();
    const key = `${cachePrefix}${now.getTime()}`;
    await redis.set(key, JSON.stringify(status));
    const ttl = Math.ceil((sampleFrequencyMS / 1000) * maxSamples * 2);
    await redis.expire(key, ttl);
  }

  function getRedis() {
    return api.redis.clients.client;
  }
}
