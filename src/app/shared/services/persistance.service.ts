import { Injectable } from '@angular/core';

@Injectable()
export class PersistanceService {
  set<T>(key: string, data: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }

  get<T>(key: string): T | null {
    const data: unknown = localStorage.getItem(key);

    if (!data) return null;

    let obj: T | null;
    try {
      obj = JSON.parse(data.toString()) as T;
    } catch (error) {
      obj = null;
    }

    return obj;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
