import { api, utils } from "actionhero";
import * as uuid from "uuid";

const RETRY_SLEEP = 100;
const MAX_ATTEMPTS = 300;
const LOCK_DURATION_MS = RETRY_SLEEP * MAX_ATTEMPTS + 1; //30 seconds

export async function waitForLock(
  key: string,
  requestId: string = uuid.v4(),
  ttl = LOCK_DURATION_MS,
  attempts = 0,
  sleepTime = RETRY_SLEEP
): Promise<{
  releaseLock: Function;
  attempts: number;
}> {
  const client = api.redis.clients.client;
  const lockKey = `grouparoo:lock:${key}`;

  attempts++;
  if (attempts > MAX_ATTEMPTS) {
    throw new Error(
      `could not obtain a lock for ${lockKey} after ${MAX_ATTEMPTS} attempts`
    );
  }

  const set = await client.setnx(lockKey, requestId);
  const checkValue = await client.get(lockKey);

  if (!set || checkValue !== requestId) {
    await utils.sleep(sleepTime);
    return waitForLock(key, requestId, ttl, attempts, sleepTime);
  }

  await client.expire(lockKey, Math.ceil(ttl / 1000));

  async function releaseLock() {
    await client.del(lockKey);
  }

  return { releaseLock, attempts };
}

export async function getLock(key: string, ttl = LOCK_DURATION_MS) {
  const client = api.redis.clients.client;
  const lockKey = `grouparoo:lock:${key}`;
  let releaseLock: typeof client.del = null;

  const set = await client.setnx(lockKey, new Date().getTime());

  if (set) {
    await client.expire(lockKey, Math.ceil(ttl / 1000));
    releaseLock = async () => {
      return client.del(lockKey);
    };
  }

  return releaseLock;
}
