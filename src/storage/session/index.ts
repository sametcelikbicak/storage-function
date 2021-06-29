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
 * @returns void
 */
export function clearSessionStorage(): void {
  sessionStorage.clear();
}
