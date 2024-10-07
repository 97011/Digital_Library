import { Injectable } from '@angular/core';
import { isArray } from 'chart.js/dist/helpers/helpers.core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  setItem(key: string, value: any, typ: string) {
    if (typ === "ADD") {
      if (window.localStorage[key]) {
        let val1 = JSON.parse(window.localStorage[key])
        if (Array.isArray(val1)) {
          val1.push(value)
        }
        else {
          val1 = [val1, value]
        }
        window.localStorage.setItem(key, JSON.stringify(val1))
      }
      else {
        window.localStorage.setItem(key, JSON.stringify(value))
      }
    }
    else {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }
  getItem(key: string) {
    let item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : []
  }
  removeItem(key: string) {
    window.localStorage.removeItem(key)
  }
  clear() {
    window.localStorage.clear()
  }
}
