import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public removeFromSessionStorage(key: string): void {
    window.sessionStorage.removeItem(key); 
  }
 
  public upsertSessionStorage(key: string, value: unknown): void {
    const currentValue = this.getFromSessionStorage(key);
    if(!!currentValue) {
      this.removeFromSessionStorage(key);
    }

    window.sessionStorage.setItem(key, JSON.stringify(value));
  }

  public getFromSessionStorage(key: string): unknown {
    const value = sessionStorage.getItem(key);
    if (!value) {
      return undefined;
    }

    return JSON.parse(value); 
  }

}


