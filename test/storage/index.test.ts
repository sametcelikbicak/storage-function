import { clearStorage } from '../../src/storage';
import { fromLocalStorage, toLocalStorage } from '../../src/storage/local';
import { fromSessionStorage, toSessionStorage } from '../../src/storage/session';

describe('clearStorage', () => {
  it('should be defined', () => {
    expect(clearStorage).toBeDefined();
  });

  // it('should be clear all keys from local and session storage', () => {
  //   const key1 = 'StorageKey-1';
  //   const value1 = 'Storage Value-1';
  //   const key2 = 'StorageKey-2';
  //   const value2 = 'Storage Value-2';
  //   toLocalStorage(key1, value1);
  //   toSessionStorage(key2, value2);

  //   clearStorage();
  //   const result1 = fromLocalStorage(key1);
  //   const result2 = fromSessionStorage(key2);

  //   expect(result1).toBeNull();
  //   expect(result2).toBeNull();
  // });
});
