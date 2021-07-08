import { clearStorage } from './storage';
import {
  clearLocalStorage,
  fromLocalStorage,
  getAllFromLocalStorage,
  getKeysFromLocalStorage,
  removeFromLocalStorage,
  toLocalStorage,
} from './storage/local';
import { clearSessionStorage, fromSessionStorage, removeFromSessionStorage, toSessionStorage } from './storage/session';

export {
  toLocalStorage,
  fromLocalStorage,
  getAllFromLocalStorage,
  getKeysFromLocalStorage,
  removeFromLocalStorage,
  clearLocalStorage,
  toSessionStorage,
  fromSessionStorage,
  removeFromSessionStorage,
  clearSessionStorage,
  clearStorage,
};
