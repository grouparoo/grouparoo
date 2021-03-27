import { api, task } from "actionhero";
import cls from "cls-hooked";
import { Transaction } from "sequelize";
import { waitForLock } from "./locks";

/**
 * This module is so you can delay the execution of side-effects within a transaction.
 * Say your new Model() creates a task... you don't want to enqueue it until after the transaction settles.
 * Use: `CLS.enqueueTaskIn(1000, taskName, args)`
 *   If you are in a CLS transaction, it will be run afterwards by CLSTask or CLSAction
 *   If you aren't in a CLS transaction, it will be run now.
 *
 * The more generic usage is `CLS.afterCommit(() => {})` where you can supply any async function
 *
 * Learn more @ https://sequelize.org/master/manual/transactions.html and https://github.com/Jeff-Lewis/cls-hooked
 */
export namespace CLS {
  // export const namespace = cls.getNamespace("grouparoo-cls");
  export function getNamespace() {
    return cls.getNamespace("grouparoo-cls");
  }

  export function get(key: string) {
    return getNamespace().get(key);
  }

  export function set(key: string, data: any) {
    return getNamespace().set(key, data);
  }

  /**
   * Wrap an Async function f in such a way that all enqueued afterCommit / enqueueTasks during invocation will be run afterwords
   * Returns the return value of function f
   */
  export interface CLSWrapMethod {
    (
      f: Function,
      options?: {
        catchError?: boolean;
        lock?: boolean;
        write?: boolean;
        priority?: boolean;
      }
    ): Promise<any>;
  }
  export const wrap: CLSWrapMethod = async (f, options = {}) => {
    const { catchError, write, priority } = options;
    let { lock } = options;
    const dialect = api.sequelize.options.dialect;
    if (!lock && dialect === "sqlite" && write) {
      lock = true;
    }
    let releaseLock = null;
    try {
      if (lock) {
        releaseLock = await getLock(priority);
      }
      const runResponse = await wrapInternal(f, options);
      return runResponse;
    } catch (error) {
      if (catchError) return error;
      throw error;
    } finally {
      if (releaseLock) {
        await releaseLock();
      }
    }
  };

  const wrapInternal: CLSWrapMethod = async (f, options = {}) => {
    const { write } = options;
    let runResponse: any;
    let afterCommitJobs: Array<Function> = [];

    const transOptions: any = {};
    const dialect = api.sequelize.options.dialect;
    if (dialect === "sqlite" && write) {
      transOptions.type = "IMMEDIATE";
    }
    await api.sequelize.transaction(transOptions, async (t: Transaction) => {
      runResponse = await f(t);
      afterCommitJobs = getNamespace().get("afterCommitJobs");
    });

    for (const i in afterCommitJobs) {
      await afterCommitJobs[i]();
    }

    return runResponse;
  };

  async function getLock(priority) {
    // check more often in the ui to get the lock
    const longEnough = 30 * 1000; // 30 seconds
    const sleepTime = priority ? 1 : 100; // check more often if it's a priority
    const ttl = longEnough + 1;
    const maxAttempts = 300; // hard-coded in the locks.ts code
    // might have to check more times, so start the count negative to get to 30 seconds
    const attempts = 0 - longEnough / sleepTime + maxAttempts;
    const requestId = undefined; // it will assign it a uuid
    console.log("waiting for lock....", { priority, sleepTime, attempts });
    const now = Date.now();
    // key, requiredId, ttl, attempts, sleepTime
    if (!priority) {
      // the background thread often acquired the lock because of stop/start timing,
      // so slow it down to give the priority one a chance
      await sleep(1);
    }
    const lockObject = await waitForLock(
      "cls",
      requestId,
      ttl,
      attempts,
      sleepTime
    );
    const delta = Date.now() - now;
    console.log(".... waited: ", delta, delta > 3 ? "LONGWAIT" : "", {
      priority,
      sleepTime,
      attempts,
    });
    return lockObject.releaseLock;
  }

  async function sleep(sleepTime: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, sleepTime);
    });
  }

  export function active() {
    const transaction = get("transaction");
    if (transaction) return true;
    return false;
  }

  export async function afterCommit(f: Function) {
    const isActive = active();

    // If we aren't in a transaction, run it now
    if (!isActive) return f();

    // otherwise, save the job for later
    const key = "afterCommitJobs";
    const jobs = getNamespace().get(key) || [];
    jobs.push(f);
    getNamespace().set(key, jobs);
  }

  /**
   * A CLS wrapper around task.enqueue
   */
  export async function enqueueTask(
    taskName: string,
    args: { [key: string]: any },
    queue?: string
  ) {
    await afterCommit(async () => task.enqueue(taskName, args, queue));
  }

  /**
   * A CLS wrapper around task.enqueueIn
   */
  export async function enqueueTaskIn(
    delay: number,
    taskName: string,
    args: { [key: string]: any },
    queue?: string
  ) {
    await afterCommit(async () => task.enqueueIn(delay, taskName, args, queue));
  }
}
