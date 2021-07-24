export class EventDispatcher<T> {
  subscriptions: {
    [key: string]: Function;
  };

  constructor() {
    this.subscriptions = {};
  }

  set(data) {
    this.publish(data);
  }

  async publish<T>(data) {
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

  async subscribe(name: string, handler: (arg0: T) => any, matcher?: any) {
    if (typeof this.beforeSubscribe === "function") {
      await this.beforeSubscribe(name, handler, matcher);
    }

    this.subscriptions[name] = handler;

    if (typeof this.afterSubscribe === "function") {
      await this.afterSubscribe(name, handler, matcher);
    }
  }

  async beforeSubscribe(name, handler, matcher) {}
  async afterSubscribe(name, handler, matcher) {}

  unsubscribe(name) {
    delete this.subscriptions[name];
  }
}
