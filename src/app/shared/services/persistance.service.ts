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
    try {
      return JSON.parse(key) as T;
    } catch (error) {
      console.log('Error getting data from localStorage', error);
      return null;
    }
  }

  // TODO
}
