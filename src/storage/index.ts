/**
 * Remove all values from Local and Session storage
 * @param except - Except key or key list
 * @returns void
 */
export function clearStorage(except?: string | string[]): void {
  if (except) {
    switch (typeof except) {
      case 'string':
        removeFromStorage(except);
        break;
      case 'object':
        const localStorageKeyList: string[] = [];
        const sessionStorageKeyList: string[] = [];

        for (let i = 0, len = localStorage.length; i < len; i++) {
          localStorageKeyList.push(localStorage.key(i) ?? '');
        }

        for (let i = 0, len = sessionStorage.length; i < len; i++) {
          sessionStorageKeyList.push(sessionStorage.key(i) ?? '');
        }

        localStorageKeyList
          .filter((key) => !except.includes(key))
          .forEach((key) => {
            removeItemFromStorage(localStorage, key);
          });

        sessionStorageKeyList
          .filter((key) => !except.includes(key))
          .forEach((key) => {
            removeItemFromStorage(sessionStorage, key);
          });

        break;
    }
  } else {
    localStorage.clear();
    sessionStorage.clear();
  }
}

/**
 * Get all keys from Local and Session storage
 *
 * @returns Stored keys from Local and Session storage
 */
export function getKeys(): Record<string, string[]> {
  const localStorageKeyList: string[] = [];
  const sessionStorageKeyList: string[] = [];

  for (let i = 0, len = localStorage.length; i < len; i++) {
    localStorageKeyList.push(localStorage.key(i) ?? '');
  }

  for (let i = 0, len = sessionStorage.length; i < len; i++) {
    sessionStorageKeyList.push(sessionStorage.key(i) ?? '');
  }

  return { localStorage: localStorageKeyList, sessionStorage: sessionStorageKeyList };
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
