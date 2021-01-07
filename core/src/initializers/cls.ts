import cls from "cls-hooked";
import Sequelize from "sequelize";
import { Initializer, api, task } from "actionhero";

// Opt Into CLS
// Learn more @ https://sequelize.org/master/manual/transactions.html and https://github.com/Jeff-Lewis/cls-hooked
const namespace = cls.createNamespace("grouparoo-cls");
// @ts-ignore
Sequelize.useCLS(namespace);

declare module "actionhero" {
  export interface Api {
    /**
     * This module is so you can delay the execution of side-effects within a transaction.
     * Say your new Model() creates a task... you don't want to enqueue it until after the transaction settles.
     * Use: `api.cls.enqueueTaskIn(1000, taskName, args)`
     *   If you are in a CLS transaction, it will be un afterwords by CLSTask or CLSAction
     *   If you aren't in a CLS transaction, it will be run now.
     *
     * The more generic usage is `api.cls.afterCommit(() => {})` where you can supply any async function
     */
    cls: {
      namespace: any;
      get: (key: string) => any;
      set: (key: string, data: any) => void;
      active: () => boolean;
      afterCommit: (Function) => Promise<void>;
      enqueueTask: (
        taskName: string,
        args: { [key: string]: any },
        queue?: string
      ) => Promise<void>;
      enqueueTaskIn: (
        delay: number,
        taskName: string,
        args: { [key: string]: any },
        queue?: string
      ) => Promise<void>;
    };
  }
}

export class CLS extends Initializer {
  constructor() {
    super();
    this.name = "cls";
    this.loadPriority = 10;
  }

  async initialize() {
    api.cls = {
      namespace,
      get: (key: string) => {
        return namespace.get(key);
      },
      set: (key: string, data: any) => {
        return namespace.set(key, data);
      },
      active: () => {
        const transaction = api.cls.get("transaction");
        if (transaction) return true;
        return false;
      },
      afterCommit: async (f) => {
        const active = api.cls.active();

        // If we aren't in a transaction, run it now
        if (!active) return f();

        // otherwise, save the job for later
        const key = "afterCommitJobs";
        const jobs = api.cls.namespace.get(key) || [];
        jobs.push(f);
        api.cls.namespace.set(key, jobs);
      },
      enqueueTask: async (
        taskName: string,
        args: { [key: string]: any },
        queue: string
      ) => {
        await api.cls.afterCommit(async () =>
          task.enqueue(taskName, args, queue)
        );
      },
      enqueueTaskIn: async (
        delay: number,
        taskName: string,
        args: { [key: string]: any },
        queue: string
      ) => {
        await api.cls.afterCommit(async () =>
          task.enqueueIn(delay, taskName, args, queue)
        );
      },
    };
  }
}
