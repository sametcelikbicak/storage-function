import { clearStorage, getAll, getKeys, getKeysCount } from '../../src/storage';
import { fromLocalStorage, toLocalStorage } from '../../src/storage/local';
import { fromSessionStorage, toSessionStorage } from '../../src/storage/session';

beforeEach(() => {
  clearStorage();
});

describe('clearStorage', () => {
  it('should be defined', () => {
    expect(clearStorage).toBeDefined();
  });

  it('should be clear all keys from local and session storage', () => {
    const key1 = 'StorageKey-1';
    const value1 = 'Storage Value-1';
    const key2 = 'StorageKey-2';
    const value2 = 'Storage Value-2';
    toLocalStorage(key1, value1);
    toSessionStorage(key2, value2);

    clearStorage();
    const result1 = fromLocalStorage(key1);
    const result2 = fromSessionStorage(key2);

    expect(result1).toBeNull();
    expect(result2).toBeNull();
  });

  it('should be clear all keys from local and session storage without except key', () => {
    const commonKey = 'CommonStorageKey';
    const commonValue = 'Common Storage Value';
    const key1 = 'StorageKey-11';
    const value1 = 'Storage Value-11';
    const key2 = 'StorageKey-22';
    const value2 = 'Storage Value-22';
    toLocalStorage(commonKey, commonValue);
    toLocalStorage(key1, value1);
    toSessionStorage(commonKey, commonValue);
    toSessionStorage(key2, value2);

    clearStorage(commonKey);
    const result1 = fromLocalStorage(key1);
    const result2 = fromSessionStorage(key2);
    const commonResult1 = fromLocalStorage(commonKey);
    const commonResult2 = fromSessionStorage(commonKey);

    expect(result1).toBeNull();
    expect(result2).toBeNull();
    expect(JSON.parse(commonResult1)).toEqual(commonValue);
    expect(JSON.parse(commonResult2)).toEqual(commonValue);
  });

  it('should be clear all keys from local and session storage without except keys', () => {
    const commonKey1 = 'CommonStorageKey-1';
    const commonValue1 = 'Common Storage Value-1';
    const commonKey2 = 'CommonStorageKey-2';
    const commonValue2 = 'Common Storage Value-2';
    const key1 = 'StorageKey-111';
    const value1 = 'Storage Value-111';
    const key2 = 'StorageKey-222';
    const value2 = 'Storage Value-222';
    toLocalStorage(key1, value1);
    toLocalStorage(commonKey1, commonValue1);
    toLocalStorage(commonKey2, commonValue2);
    toSessionStorage(key2, value2);
    toSessionStorage(commonKey1, commonValue1);
    toSessionStorage(commonKey2, commonValue2);

    clearStorage([commonKey1, commonKey2]);
    const result1 = fromLocalStorage(key1);
    const commonResult1 = fromLocalStorage(commonKey1);
    const commonResult2 = fromLocalStorage(commonKey2);
    const result2 = fromSessionStorage(key2);
    const commonResult11 = fromSessionStorage(commonKey1);
    const commonResult22 = fromSessionStorage(commonKey2);

    expect(JSON.parse(commonResult1)).toEqual(commonValue1);
    expect(JSON.parse(commonResult2)).toEqual(commonValue2);
    expect(JSON.parse(commonResult11)).toEqual(commonValue1);
    expect(JSON.parse(commonResult22)).toEqual(commonValue2);
    expect(result1).toBeNull();
    expect(result2).toBeNull();
  });
});

describe('getKeys', () => {
  it('should be defined', () => {
    expect(getKeys).toBeDefined();
  });

  it('should be get all keys from local and session storage', () => {
    const key1 = 'StorageKey-1';
    const value1 = 'Storage Value-1';
    const key2 = 'StorageKey-2';
    const value2 = 'Storage Value-2';
    toLocalStorage(key1, value1);
    toLocalStorage(key2, value2);
    toSessionStorage(key1, value1);
    toSessionStorage(key2, value2);
    const expectedResult = {
      localStorage: ['StorageKey-1', 'StorageKey-2'],
      sessionStorage: ['StorageKey-1', 'StorageKey-2'],
    };

    const result = getKeys();

    expect(result).toEqual(expectedResult);
  });
});

describe('getAll', () => {
  it('should be defined', () => {
    expect(getAll).toBeDefined();
  });

  it('should be get all keys and values from local and session storage', () => {
    const key1 = 'StorageKey-1';
    const value1 = 'Storage Value-1';
    const key2 = 'StorageKey-2';
    const value2 = 'Storage Value-2';
    toLocalStorage(key1, value1);
    toLocalStorage(key2, value2);
    toSessionStorage(key1, value1);
    toSessionStorage(key2, value2);
    const expectedResult = {
      localStorage: [{ 'StorageKey-1': JSON.stringify(value1) }, { 'StorageKey-2': JSON.stringify(value2) }],
      sessionStorage: [{ 'StorageKey-1': JSON.stringify(value1) }, { 'StorageKey-2': JSON.stringify(value2) }],
    };

    const result = getAll();

    expect(result).toEqual(expectedResult);
  });
});

describe('getKeysCount', () => {
  it('should be defined', () => {
    expect(getKeysCount).toBeDefined();
  });

  it('should be return all keys count from local and session storage', () => {
    const key1 = 'StorageKey-1';
    const value1 = 'Storage Value-1';
    const key2 = 'StorageKey-2';
    const value2 = 'Storage Value-2';
    toLocalStorage(key1, value1);
    toLocalStorage(key2, value2);
    toSessionStorage(key1, value1);
    toSessionStorage(key2, value2);
    const expectedResult = {
      localStorage: 2,
      sessionStorage: 2,
    };

    const result = getKeysCount();

    expect(result).toEqual(expectedResult);
  });

  it('should be return 0 with empty storage', () => {
    const expectedResult = {
      localStorage: 0,
      sessionStorage: 0,
    };

    const result = getKeysCount();

    expect(result).toEqual(expectedResult);
  });
});
