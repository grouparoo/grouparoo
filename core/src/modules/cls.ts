import { api, task, config, utils } from "actionhero";
import cls from "cls-hooked";
import { Transaction } from "sequelize";

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
  export interface CLSWrapMethod<T = any> {
    (
      f: Function,
      options?: {
        catchError?: boolean;
        write?: boolean;
        priority?: boolean;
      }
    ): Promise<T>;
  }
  export const wrap: CLSWrapMethod = async (f, options = {}) => {
    const { catchError } = options;

    try {
      const runResponse = await wrapInternal(f, options);
      return runResponse;
    } catch (error) {
      if (catchError) return error;
      throw error;
    }
  };

  const wrapInternal: CLSWrapMethod = async (f, options = {}) => {
    const { write, priority } = options;
    let runResponse: any;
    let afterCommitJobs: Function[] = [];

    const transOptions: any = {};
    const dialect = api.sequelize.options.dialect;
    if (dialect === "sqlite") {
      if (write) {
        // if we take out the write lock immediately, then this BEGIN IMMEDIATE TRANSACTION
        // call will be the one that fails if someone else is writing with SQLITE_BUSY
        transOptions.type = "IMMEDIATE";
      }

      const retryLength = 60 * 1000; // give the UI 60 seconds total before error
      const betweenTries = 1; // 1 millisecond
      if (priority) {
        // this will retry based on the default in the config, but for a priority case,
        // we can say to sleep less each time and retry much more often
        const retry = { ...config.sequelize.retry };
        retry.backoffBase = betweenTries;
        retry.backoffExponent = 1; // don't backoff
        retry.max = Math.round(retryLength / betweenTries);
        retry.timeout = retryLength;
        transOptions.retry = retry;
      } else {
        // give a gap for the UI thread to get access
        await utils.sleep(betweenTries + 5);
      }
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
    args: Record<string, any>,
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
    args: Record<string, any>,
    queue?: string
  ) {
    await afterCommit(async () => task.enqueueIn(delay, taskName, args, queue));
  }
}
