import { api, utils } from "actionhero";
import * as uuid from "uuid";

const RETRY_SLEEP = 100;
const MAX_ATTEMPTS = 300;
const LOCK_DURATION_MS = RETRY_SLEEP * MAX_ATTEMPTS + 1;

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

export type getLockResponse = {
  releaseLock: Function;
  isLocked: boolean;
  lockedBy: string;
};

export async function getLock(
  key: string,
  requestId: string = uuid.v4(), // for exports, this will be the export id, we may have use cases that don't pass a request id though, so we'll assign a default
  ttl = LOCK_DURATION_MS,
  lockType?: string
): Promise<getLockResponse> {
  const client = api.redis.clients.client;
  const lockKey = `grouparoo:lock:${lockType && `${lockType}:`}${key}`;

  const set = await client.setnx(lockKey, requestId);

  await client.expire(lockKey, Math.ceil(ttl / 1000));

  const isLocked = !set;

  async function releaseLock() {
    await client.del(lockKey);
  }

  const lockValue = await client.get(lockKey);

  return { releaseLock, isLocked, lockedBy: lockValue };
}
