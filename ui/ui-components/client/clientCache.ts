export interface ClientCacheObject<T = unknown> {
  locked: boolean;
  data: T;
  createdAt: number;
}

export interface ClientCacheGetObject<T = unknown> {
  cacheData: T;
  unlock: (data?: T) => void;
}

export class ClientCache {
  private cache: Record<string, ClientCacheObject> = {};

  constructor(private ttl: number = 5000) {}

  async sleep(wait = 100) {
    return new Promise((resolve) => {
      setTimeout(resolve, wait);
    });
  }

  async get<T = unknown>(key: string): Promise<ClientCacheGetObject<T>> {
    if (!this.cache[key]) {
      this.cache[key] = { locked: false, data: undefined, createdAt: 0 };
    }

    let waitCounter = 0;
    while (this.cache[key]?.locked && waitCounter < 15) {
      await this.sleep(300);
      waitCounter++;
    }

    const now = new Date().getTime();
    if (this.cache[key]?.data) {
      if (this.cache[key].createdAt + this.ttl < now) {
        delete this.cache[key];
        this.cache[key] = { locked: true, data: undefined, createdAt: 0 };
      }
    } else {
      this.cache[key] = { locked: true, data: undefined, createdAt: 0 };
    }

    const unlock = (data?: T) => {
      this.cache[key] = {
        data,
        createdAt: new Date().getTime(),
        locked: false,
      };
    };

    return { cacheData: this.cache[key]?.data as T, unlock };
  }

  clear() {
    this.cache = {};
  }
}
