interface IStorage {
  [key: string]: string;
}

const storageMock = (() => {
  let store: IStorage = {};

  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: any) {
      store[key] = value;
    },
    removeItem(key: string) {
      delete store[key];
    },
    clear() {
      store = {};
    },
    get length() {
      return Object.keys(store).length;
    },
    key(i: number) {
      const keys = Object.keys(store);
      return keys[i] || null;
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: storageMock,
});
Object.defineProperty(window, 'sessionStorage', {
  value: storageMock,
});
