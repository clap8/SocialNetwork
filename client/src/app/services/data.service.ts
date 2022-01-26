import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { PageProduct } from '@models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Observable<any>;

  constructor(private http: HttpClient) { }

  resolveData() {
    if (!this.data) {
      this.data = this.http.get<any>('/assets/data/data.json');
    }
  }

  getProductPages(): Observable<PageProduct[]> {
    this.resolveData();

    return this.data.pipe(
      map(o => {
        return o.pages;
      })
    );
  }

  getProductPage(slug: string) : Observable<PageProduct> {
    this.resolveData();
  
    return this.data.pipe(
      map(o => {
        return o.pages.filter(page => page.slug == slug)[0];
      })
    );
  }
}
