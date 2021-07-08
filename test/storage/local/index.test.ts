import {
  clearLocalStorage,
  fromLocalStorage,
  getAllFromLocalStorage,
  getKeysFromLocalStorage,
  removeFromLocalStorage,
  toLocalStorage,
} from '../../../src/storage/local';

beforeEach(() => {
  clearLocalStorage();
});

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

  it('should be remove existing key', () => {
    const key = 'StorageKey';
    const value = 'Storage Value';
    toLocalStorage(key, value);

    removeFromLocalStorage(key);
    const result = fromLocalStorage(key);

    expect(result).toBeNull();
  });

  it('should not be remove non existing key', () => {
    const key = 'NonStorageKey';

    removeFromLocalStorage(key);
    const result = fromLocalStorage(key);

    expect(result).toBeNull();
  });
});

describe('clearLocalStorage', () => {
  it('should be defined', () => {
    expect(clearLocalStorage).toBeDefined();
  });

  it('should be clear all keys from storage', () => {
    const key1 = 'StorageKey-1';
    const value1 = 'Storage Value-1';
    const key2 = 'StorageKey-2';
    const value2 = 'Storage Value-2';
    toLocalStorage(key1, value1);
    toLocalStorage(key2, value2);

    clearLocalStorage();
    const result1 = fromLocalStorage(key1);
    const result2 = fromLocalStorage(key2);

    expect(result1).toBeNull();
    expect(result2).toBeNull();
  });

  it('should be clear all keys from storage without except key', () => {
    const key1 = 'StorageKey-11';
    const value1 = 'Storage Value-11';
    const key2 = 'StorageKey-22';
    const value2 = 'Storage Value-22';
    toLocalStorage(key1, value1);
    toLocalStorage(key2, value2);

    clearLocalStorage(key1);
    const result1 = fromLocalStorage(key1);
    const result2 = fromLocalStorage(key2);

    expect(JSON.parse(result1)).toEqual(value1);
    expect(result2).toBeNull();
  });

  it('should be clear all keys from storage without except keys', () => {
    const key1 = 'StorageKey-111';
    const value1 = 'Storage Value-111';
    const key2 = 'StorageKey-222';
    const value2 = 'Storage Value-222';
    const key3 = 'StorageKey-333';
    const value3 = 'Storage Value-333';
    toLocalStorage(key1, value1);
    toLocalStorage(key2, value2);
    toLocalStorage(key3, value3);

    clearLocalStorage([key1, key3]);
    const result1 = fromLocalStorage(key1);
    const result2 = fromLocalStorage(key2);
    const result3 = fromLocalStorage(key3);

    expect(JSON.parse(result1)).toEqual(value1);
    expect(JSON.parse(result3)).toEqual(value3);
    expect(result2).toBeNull();
  });
});

describe('getKeysFromLocalStorage', () => {
  it('should be defined', () => {
    expect(getKeysFromLocalStorage).toBeDefined();
  });

  it('should be return all keys from storage', () => {
    const key1 = 'StorageKey-111';
    const value1 = 'Storage Value-111';
    const key2 = 'StorageKey-222';
    const value2 = 'Storage Value-222';
    const key3 = 'StorageKey-333';
    const value3 = 'Storage Value-333';
    toLocalStorage(key1, value1);
    toLocalStorage(key2, value2);
    toLocalStorage(key3, value3);
    const expectedResult = [key1, key2, key3];

    const result = getKeysFromLocalStorage();

    expect(result).toEqual(expectedResult);
  });
});

describe('getAllFromLocalStorage', () => {
  it('should be defined', () => {
    expect(getAllFromLocalStorage).toBeDefined();
  });

  it('should be return all keys and values from storage', () => {
    const key1 = 'StorageKey-111';
    const value1 = 'Storage Value-111';
    const key2 = 'StorageKey-222';
    const value2 = 'Storage Value-222';
    const key3 = 'StorageKey-333';
    const value3 = 'Storage Value-333';
    toLocalStorage(key1, value1);
    toLocalStorage(key2, value2);
    toLocalStorage(key3, value3);
    const expectedResult = [
      { 'StorageKey-111': JSON.stringify(value1) },
      { 'StorageKey-222': JSON.stringify(value2) },
      { 'StorageKey-333': JSON.stringify(value3) },
    ];

    const result = getAllFromLocalStorage();

    expect(result).toEqual(expectedResult);
  });
});
