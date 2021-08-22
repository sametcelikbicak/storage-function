import { clearStorage, getAll, getKeys } from './storage';
import {
  clearLocalStorage,
  fromLocalStorage,
  getAllFromLocalStorage,
  getKeysFromLocalStorage,
  removeFromLocalStorage,
  toLocalStorage,
} from './storage/local';
import {
  clearSessionStorage,
  fromSessionStorage,
  getAllFromSessionStorage,
  getKeysFromSessionStorage,
  removeFromSessionStorage,
  toSessionStorage,
} from './storage/session';

export const storageFunction = Object.freeze({
  toLocalStorage,
  fromLocalStorage,
  getAllFromLocalStorage,
  getKeysFromLocalStorage,
  removeFromLocalStorage,
  clearLocalStorage,
  toSessionStorage,
  fromSessionStorage,
  getAllFromSessionStorage,
  getKeysFromSessionStorage,
  removeFromSessionStorage,
  clearSessionStorage,
  clearStorage,
  getAll,
  getKeys,
});