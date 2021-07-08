/**
 * Store value to Session storage
 *
 * @param key - Stored value key
 * @param value - Stored value
 * @returns void
 */
export function toSessionStorage(key: string, value: any): void {
  sessionStorage.setItem(key, JSON.stringify(value));
}

/**
 * Get value from Session storage
 *
 * @param key - Stored value key
 * @returns Stored value
 */
export function fromSessionStorage(key: string): any {
  return sessionStorage.getItem(key);
}

/**
 * Remove value from Session storage
 *
 * @param key - Stored value key
 * @returns void
 */
export function removeFromSessionStorage(key: string): void {
  sessionStorage.removeItem(key);
}

/**
 * Remove all values from Session storage
 *
 * @param except - Except key or key list
 * @returns void
 */
export function clearSessionStorage(except?: string | string[]): void {
  if (except) {
    switch (typeof except) {
      case 'string':
        removeFromStorage(except);
        break;
      case 'object':
        const sessionStorageKeyList: string[] = [];

        for (let i = 0, len = sessionStorage.length; i < len; i++) {
          sessionStorageKeyList.push(sessionStorage.key(i) ?? '');
        }

        sessionStorageKeyList
          .filter((key) => !except.includes(key))
          .forEach((key) => {
            sessionStorage.removeItem(key);
          });

        break;
    }
  } else {
    sessionStorage.clear();
  }
}

/**
 * Get all keys from Session storage
 *
 * @returns Stored keys
 */
export function getKeysFromSessionStorage(): string[] {
  const sessionStorageKeyList: string[] = [];

  for (let i = 0, len = sessionStorage.length; i < len; i++) {
    sessionStorageKeyList.push(sessionStorage.key(i) ?? '');
  }

  return sessionStorageKeyList;
}

/**
 * Get all keys and values from Session storage
 *
 * @returns Stored keys and values
 */
export function getAllFromSessionStorage(): Record<string, any>[] {
  const sessionStorageKeyList: Record<string, any>[] = [];

  for (let i = 0, len = sessionStorage.length; i < len; i++) {
    const keyValue: Record<string, any> = {
      [sessionStorage.key(i) ?? '']: sessionStorage.getItem(sessionStorage.key(i) ?? ''),
    };
    sessionStorageKeyList.push(keyValue);
  }

  return sessionStorageKeyList;
}

function removeFromStorage(except: string) {
  for (let i = 0, len = sessionStorage.length; i < len; i++) {
    const removeableKey = sessionStorage.key(i) ?? '';
    if (!removeableKey.includes(except)) {
      sessionStorage.removeItem(removeableKey);
    }
  }
}
