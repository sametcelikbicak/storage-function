import { clearStorage } from './storage';
import { clearLocalStorage, fromLocalStorage, removeFromLocalStorage, toLocalStorage } from './storage/local';
import { clearSessionStorage, fromSessionStorage, removeFromSessionStorage, toSessionStorage } from './storage/session';

export {
  toLocalStorage,
  fromLocalStorage,
  removeFromLocalStorage,
  clearLocalStorage,
  toSessionStorage,
  fromSessionStorage,
  removeFromSessionStorage,
  clearSessionStorage,
  clearStorage,
};
