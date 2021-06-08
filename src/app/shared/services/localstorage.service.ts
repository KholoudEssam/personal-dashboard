import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  saveItemState(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getItemState(items, key) {
    const itemsInStorage: [] = JSON.parse(localStorage.getItem(key));
    if (!itemsInStorage) return;
    //To Not Mutate the state
    items.length = 0;
    items.push(...itemsInStorage);
    return items;
  }
}
