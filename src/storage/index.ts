/**
 * Remove all values from Local and Session storage
 *
 * @returns void
 */
export function clearStorage(except?: string | string[]): void {
  if (except) {
    switch (typeof except) {
      case 'string':
        removeFromStorage(except);
        break;
      case 'object':
        except.forEach((exceptedKey) => {
          removeFromStorage(exceptedKey);
        });
        break;
    }
  } else {
    localStorage.clear();
    sessionStorage.clear();
  }
}

function removeFromStorage(except: string) {
  for (let i = 0, len = localStorage.length; i < len; i++) {
    const removeableKey = localStorage.key(i) ?? '';
    if (!removeableKey.includes(except)) {
      removeItemFromStorage(localStorage, removeableKey);
    }
  }

  for (let i = 0, len = sessionStorage.length; i < len; i++) {
    const removeableKey = sessionStorage.key(i) ?? '';
    if (!removeableKey.includes(except)) {
      removeItemFromStorage(sessionStorage, removeableKey);
    }
  }
}

function removeItemFromStorage(storage: Storage, key: string): void {
  storage.removeItem(key);
}
