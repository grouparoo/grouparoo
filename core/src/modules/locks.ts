import { api } from "actionhero";
import * as uuid from "uuid";

const RETRY_SLEEP = 100;
const MAX_ATTEMPTS = 300;
const LOCK_DURATION_MS = RETRY_SLEEP * MAX_ATTEMPTS + 1;

async function sleep(sleepTime: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, sleepTime);
  });
}

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
    console.log("sleeping", { set, checkValue, requestId, sleepTime });
    await sleep(sleepTime);
    return waitForLock(key, requestId, ttl, attempts, sleepTime);
  }
  console.log("acquired", { set, checkValue, requestId, sleepTime });

  await client.expire(lockKey, Math.ceil(ttl / 1000));

  async function releaseLock() {
    await client.del(lockKey);
  }

  return { releaseLock, attempts };
}
