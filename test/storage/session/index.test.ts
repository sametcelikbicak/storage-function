import {
  clearSessionStorage,
  fromSessionStorage,
  getAllFromSessionStorage,
  getKeysCountFromSessionStorage,
  getKeysFromSessionStorage,
  removeFromSessionStorage,
  toSessionStorage,
} from '../../../src/storage/session';

beforeEach(() => {
  clearSessionStorage();
});

describe('toSessionStorage', () => {
  it('should be defined', () => {
    expect(toSessionStorage).toBeDefined();
  });

  it('should be adds new item with non existing key', () => {
    const key = 'StorageKey';
    const value = 'Storage Value';

    toSessionStorage(key, value);
    const result = fromSessionStorage(key);

    expect(JSON.parse(result)).toEqual(value);
  });

  it('should be updated existing key value', () => {
    const key = 'StorageKey';
    const value = 'Storage Value';
    const newValue = 'New storage value';
    toSessionStorage(key, value);

    toSessionStorage(key, newValue);
    const result = fromSessionStorage(key);

    expect(JSON.parse(result)).toEqual(newValue);
  });
});

describe('fromSessionStorage', () => {
  it('should be defined', () => {
    expect(fromSessionStorage).toBeDefined();
  });

  it('should be return item when given existing key', () => {
    const key = 'StorageKey';
    const value = 'Storage Value';
    toSessionStorage(key, value);

    const result = fromSessionStorage(key);

    expect(JSON.parse(result)).toEqual(value);
  });

  it('should be return null when given non existing key', () => {
    const key = 'NonStorageKey';

    const result = fromSessionStorage(key);

    expect(result).toBeNull();
  });
});

describe('removeFromSessionStorage', () => {
  it('should be defined', () => {
    expect(removeFromSessionStorage).toBeDefined();
  });

  it('should be remove existing key', () => {
    const key = 'StorageKey';
    const value = 'Storage Value';
    toSessionStorage(key, value);

    removeFromSessionStorage(key);
    const result = fromSessionStorage(key);

    expect(result).toBeNull();
  });

  it('should not be remove non existing key', () => {
    const key = 'NonStorageKey';

    removeFromSessionStorage(key);
    const result = fromSessionStorage(key);

    expect(result).toBeNull();
  });
});

describe('clearSessionStorage', () => {
  it('should be defined', () => {
    expect(clearSessionStorage).toBeDefined();
  });

  it('should be clear all keys from storage', () => {
    const key1 = 'StorageKey-1';
    const value1 = 'Storage Value-1';
    const key2 = 'StorageKey-2';
    const value2 = 'Storage Value-2';
    toSessionStorage(key1, value1);
    toSessionStorage(key2, value2);

    clearSessionStorage();
    const result1 = fromSessionStorage(key1);
    const result2 = fromSessionStorage(key2);

    expect(result1).toBeNull();
    expect(result2).toBeNull();
  });

  it('should be clear all keys from storage without except key', () => {
    const key1 = 'StorageKey-11';
    const value1 = 'Storage Value-11';
    const key2 = 'StorageKey-22';
    const value2 = 'Storage Value-22';
    toSessionStorage(key1, value1);
    toSessionStorage(key2, value2);

    clearSessionStorage(key1);
    const result1 = fromSessionStorage(key1);
    const result2 = fromSessionStorage(key2);

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
    toSessionStorage(key1, value1);
    toSessionStorage(key2, value2);
    toSessionStorage(key3, value3);

    clearSessionStorage([key1, key3]);
    const result1 = fromSessionStorage(key1);
    const result2 = fromSessionStorage(key2);
    const result3 = fromSessionStorage(key3);

    expect(JSON.parse(result1)).toEqual(value1);
    expect(JSON.parse(result3)).toEqual(value3);
    expect(result2).toBeNull();
  });
});

describe('getKeysFromSessionStorage', () => {
  it('should be defined', () => {
    expect(getKeysFromSessionStorage).toBeDefined();
  });

  it('should be return all keys from storage', () => {
    const key1 = 'StorageKey-111';
    const value1 = 'Storage Value-111';
    const key2 = 'StorageKey-222';
    const value2 = 'Storage Value-222';
    const key3 = 'StorageKey-333';
    const value3 = 'Storage Value-333';
    toSessionStorage(key1, value1);
    toSessionStorage(key2, value2);
    toSessionStorage(key3, value3);
    const expectedResult = [key1, key2, key3];

    const result = getKeysFromSessionStorage();

    expect(result).toEqual(expectedResult);
  });
});

describe('getAllFromSessionStorage', () => {
  it('should be defined', () => {
    expect(getAllFromSessionStorage).toBeDefined();
  });

  it('should be return all keys and values from storage', () => {
    const key1 = 'StorageKey-111';
    const value1 = 'Storage Value-111';
    const key2 = 'StorageKey-222';
    const value2 = 'Storage Value-222';
    const key3 = 'StorageKey-333';
    const value3 = 'Storage Value-333';
    toSessionStorage(key1, value1);
    toSessionStorage(key2, value2);
    toSessionStorage(key3, value3);
    const expectedResult = [
      { 'StorageKey-111': JSON.stringify(value1) },
      { 'StorageKey-222': JSON.stringify(value2) },
      { 'StorageKey-333': JSON.stringify(value3) },
    ];

    const result = getAllFromSessionStorage();

    expect(result).toEqual(expectedResult);
  });
});

describe('getKeysCountFromSessionStorage', () => {
  it('should be defined', () => {
    expect(getKeysCountFromSessionStorage).toBeDefined();
  });

  it('should be return all keys count from storage', () => {
    const key1 = 'StorageKey-111';
    const value1 = 'Storage Value-111';
    const key2 = 'StorageKey-222';
    const value2 = 'Storage Value-222';
    const key3 = 'StorageKey-333';
    const value3 = 'Storage Value-333';
    toSessionStorage(key1, value1);
    toSessionStorage(key2, value2);
    toSessionStorage(key3, value3);
    const expectedResult = 3;

    const result = getKeysCountFromSessionStorage();

    expect(result).toEqual(expectedResult);
  });

  it('should be return 0 with empty storage', () => {
    const expectedResult = 0;

    const result = getKeysCountFromSessionStorage();

    expect(result).toEqual(expectedResult);
  });
});
