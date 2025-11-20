export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

const hasWindow = typeof window !== "undefined";

/**
 * Wrapper around window.localStorage that never throws.
 * Falls back to no-op behavior when storage is unavailable
 * (e.g. private browsing, disabled cookies).
 */
export const safeLocalStorage: StorageLike = {
  getItem(key: string): string | null {
    if (!hasWindow) return null;
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      console.warn("[safeLocalStorage] getItem failed:", error);
      return null;
    }
  },
  setItem(key: string, value: string): void {
    if (!hasWindow) return;
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.warn("[safeLocalStorage] setItem failed:", error);
    }
  },
  removeItem(key: string): void {
    if (!hasWindow) return;
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.warn("[safeLocalStorage] removeItem failed:", error);
    }
  },
};
