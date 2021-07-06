import {
  clearLocalStorage,
  fromLocalStorage,
  removeFromLocalStorage,
  toLocalStorage,
} from '../../../src/storage/local';

describe('toLocalStorage', () => {
  it('should be defined', () => {
    expect(toLocalStorage).toBeDefined();
  });

  it('should be adds new item with non existing key', () => {
    const key = 'StorageKey';
    const value = 'Storage Value';

    toLocalStorage(key, value);
    const result = fromLocalStorage(key);

    expect(JSON.parse(result)).toEqual(value);
  });

  it('should be updated existing key value', () => {
    const key = 'StorageKey';
    const value = 'Storage Value';
    const newValue = 'New storage value';
    toLocalStorage(key, value);

    toLocalStorage(key, newValue);
    const result = fromLocalStorage(key);

    expect(JSON.parse(result)).toEqual(newValue);
  });
});

describe('fromLocalStorage', () => {
  it('should be defined', () => {
    expect(fromLocalStorage).toBeDefined();
  });

  it('should be return item when given existing key', () => {
    const key = 'StorageKey';
    const value = 'Storage Value';
    toLocalStorage(key, value);

    const result = fromLocalStorage(key);

    expect(JSON.parse(result)).toEqual(value);
  });

  it('should be return null when given non existing key', () => {
    const key = 'NonStorageKey';

    const result = fromLocalStorage(key);

    expect(result).toBeNull();
  });
});

describe('removeFromLocalStorage', () => {
  it('should be defined', () => {
    expect(removeFromLocalStorage).toBeDefined();
  });
});

describe('clearLocalStorage', () => {
  it('should be defined', () => {
    expect(clearLocalStorage).toBeDefined();
  });
});

// Mock localStorage
interface IStorage {
  [key: string]: string;
}

const localStorageMock = (() => {
  let store: IStorage = {};

  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: any) {
      store[key] = value;
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});
