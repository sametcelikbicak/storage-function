/**
 * Remove all values from Local and Session storage
 *
 * @returns void
 */
export function clearStorage(): void {
  localStorage.clear();
  sessionStorage.clear();
}
