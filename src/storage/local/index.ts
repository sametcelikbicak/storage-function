/**
 * Store value to Local storage
 * @param key - Stored value key
 * @param value - Stored value
 * @returns - void
 */
export function toLocalStorage(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Get value from Local storage
 *
 * @param key - Stored value key
 * @returns Stored value
 */
export function fromLocalStorage(key: string): any {
  return localStorage.getItem(key);
}

/**
 * Remove value from Local storage
 *
 * @param key - Stored value key
 * @returns void
 */
export function removeFromLocalStorage(key: string): void {
  localStorage.removeItem(key);
}

/**
 * Remove all values from Local storage
 *
 * @param except - Except key or key list
 * @returns void
 */
export function clearLocalStorage(except?: string | string[]): void {
  if (except) {
    switch (typeof except) {
      case 'string':
        removeFromStorage(except);
        break;
      case 'object':
        const localStorageKeyList: string[] = [];

        for (let i = 0, len = localStorage.length; i < len; i++) {
          localStorageKeyList.push(localStorage.key(i) ?? '');
        }

        localStorageKeyList
          .filter((key) => !except.includes(key))
          .forEach((key) => {
            localStorage.removeItem(key);
          });

        break;
    }
  } else {
    localStorage.clear();
  }
}

/**
 * Get all keys from Local storage
 *
 * @returns Stored keys
 */
export function getKeysFromLocalStorage(): string[] {
  const localStorageKeyList: string[] = [];

  for (let i = 0, len = localStorage.length; i < len; i++) {
    localStorageKeyList.push(localStorage.key(i) ?? '');
  }

  return localStorageKeyList;
}

function removeFromStorage(except: string) {
  for (let i = 0, len = localStorage.length; i < len; i++) {
    const removeableKey = localStorage.key(i) ?? '';
    if (!removeableKey.includes(except)) {
      localStorage.removeItem(removeableKey);
    }
  }
}
