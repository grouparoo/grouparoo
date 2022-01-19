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

  const set = await client.setnx(lockKey, requestId); // lock:grouparoo:export-locker:rec_abc:des_efg
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


// option 1: sleep 
 
try {
  const {releaseLock} = await waitForLock('mystring')
  // do stuff like send exports
} finally {
  releaseLock()
}

// option 2: re-enuque job for later

  const {myturn, releaseLock} = await getLock(_export) // use the record and destination id to make a lock string // lock:grouparoo:export-locker:rec_abc:des_efg
  if (myturn) {
    try {
    // do stuff like send exports
    finally {
      releaseLock()
    }
  } else (
    // A) re-enqueue this job
    // B) do nothing, and the export plumbing already knows to try again later << --- WINNER
   //   * If I'm a newer Export, just wit an I'll be retried
         // How do I know what new / old means?  
   //   * If I'm an older Export, cancel me 

  )
} 
