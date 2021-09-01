import { clearStorage, getAll, getKeys, getKeysCount } from './storage';
import {
  clearLocalStorage,
  fromLocalStorage,
  getAllFromLocalStorage,
  getKeysFromLocalStorage,
  getKeysCountFromLocalStorage,
  removeFromLocalStorage,
  toLocalStorage,
} from './storage/local';
import {
  clearSessionStorage,
  fromSessionStorage,
  getAllFromSessionStorage,
  getKeysFromSessionStorage,
  getKeysCountFromSessionStorage,
  removeFromSessionStorage,
  toSessionStorage,
} from './storage/session';

export const storageFunction = Object.freeze({
  toLocalStorage,
  fromLocalStorage,
  getAllFromLocalStorage,
  getKeysFromLocalStorage,
  getKeysCountFromLocalStorage,
  removeFromLocalStorage,
  clearLocalStorage,
  toSessionStorage,
  fromSessionStorage,
  getAllFromSessionStorage,
  getKeysFromSessionStorage,
  getKeysCountFromSessionStorage,
  removeFromSessionStorage,
  clearSessionStorage,
  clearStorage,
  getAll,
  getKeys,
  getKeysCount,
});
