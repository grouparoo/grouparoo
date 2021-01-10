import { api, task } from "actionhero";
import cls from "cls-hooked";

/**
 * This module is so you can delay the execution of side-effects within a transaction.
 * Say your new Model() creates a task... you don't want to enqueue it until after the transaction settles.
 * Use: `CLS.enqueueTaskIn(1000, taskName, args)`
 *   If you are in a CLS transaction, it will be un afterwords by CLSTask or CLSAction
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
  export async function wrap(f: Function) {
    let runResponse: any;
    let afterCommitJobs: Array<Function> = [];

    await api.sequelize.transaction(async () => {
      runResponse = await f();
      afterCommitJobs = getNamespace().get("afterCommitJobs");
    });

    for (const i in afterCommitJobs) await afterCommitJobs[i]();

    return runResponse;
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
