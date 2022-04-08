import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  add(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): string {
    return JSON.parse(localStorage.getItem(key) || '');
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  isNull(key: string) {
    return localStorage.getItem(key) == null;
  }
}