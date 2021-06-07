export class EventDispatcher {
  subscriptions: {
    [key: string]: Function;
  };

  constructor() {
    this.subscriptions = {};
  }

  set(data) {
    this.publish(data);
  }

  async publish(data) {
    if (typeof this.beforePublish === "function") {
      await this.beforePublish(data);
    }

    const subscriptionKeys = Object.keys(this.subscriptions);
    for (const i in subscriptionKeys) {
      const key = subscriptionKeys[i];
      await this.subscriptions[key](data);
    }

    if (typeof this.afterPublish === "function") {
      await this.afterPublish(data);
    }
  }

  async beforePublish(data) {}
  async afterPublish(data) {}

  async subscribe(name: string, handler: Function, matcher?: any) {
    if (typeof this.beforeSubscribe === "function") {
      await this.beforeSubscribe(name, handler);
    }

    this.subscriptions[name] = handler;

    if (typeof this.afterSubscribe === "function") {
      await this.afterSubscribe(name, handler);
    }
  }

  async beforeSubscribe(name, handler) {}
  async afterSubscribe(name, handler) {}

  unsubscribe(name) {
    delete this.subscriptions[name];
  }
}
