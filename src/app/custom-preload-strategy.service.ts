import { Injectable } from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router';
import {from, timer, Observable} from 'rxjs';
import {mergeMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadStrategyService implements PreloadingStrategy {

  constructor() {
  }

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      if (route.data['delay']) {
        return load(); // ????
      } else {
        return load();
      }

    } else {
      return from(null);
    }
  }
}
