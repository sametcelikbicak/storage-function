/**
 * Store value to Session storage
 *
 * @param key - Stored value key
 * @param value - Stored value
 * @returns void
 */
export function toSessionStorage(key: string, value: any): void {
  sessionStorage.setItem(key, value);
}

/**
 * Get value from Session storage
 *
 * @param key - Stored value key
 * @returns Stored value
 */
export function fromSessionStorage(key: string): any {
  sessionStorage.getItem(key);
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
        sessionStorage.removeItem(except);
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
