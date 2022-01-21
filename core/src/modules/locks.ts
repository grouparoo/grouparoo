import { api, utils } from "actionhero";
import { stringify } from "json5";
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

  const set = await client.setnx(lockKey, requestId); // lock:grouparoo:export-locker:rec_abc:des_efg
  const checkValue = await client.get(lockKey);

  //if it couldn't set, sleep and try again
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
  ttl = LOCK_DURATION_MS
): Promise<getLockResponse> {
  const client = api.redis.clients.client;
  const lockKey = `grouparoo:lock:${key}`;

  await client.expire(lockKey, Math.ceil(ttl / 1000));

  const set = await client.setnx(lockKey, requestId);

  const isLocked = !set;

  if (isLocked) {
    // if it couldn't set
    // return no unlock function, isLocked = true, and who locked it,
    const lockValue = await client.get(lockKey);

    return { releaseLock: null, isLocked, lockedBy: lockValue }; //
  } else {
    //if it could set it

    async function releaseLock() {
      await client.del(lockKey);
    }

    //return how to release it, the fact that it was set, and who it was set by
    return { releaseLock, isLocked, lockedBy: requestId };
  }
}
