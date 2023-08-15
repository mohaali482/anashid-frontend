import { MemoryStorage, buildMemoryStorage } from "axios-cache-interceptor";

export function buildCustomMemoryStorage() {
  let storage: CustomMemoryStorage;

  storage = {
    ...buildMemoryStorage(),

    removeByGroup: (group: string) => {
      const keys = storage.getKeysByGroup(group);
      keys.forEach((key) => storage.remove(key));
    },

    getKeysByGroup: (group: string) => {
      const keys = Object.keys(storage.data);
      return keys.filter((key) => key.endsWith(group));
    },
  };

  return storage;
}

export interface CustomMemoryStorage extends MemoryStorage {
  removeByGroup: (group: string) => void;
  getKeysByGroup: (group: string) => string[];
}
