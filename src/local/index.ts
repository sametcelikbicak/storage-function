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
 * @returns void
 */
export function clearLocalStorage(): void {
  localStorage.clear();
}
