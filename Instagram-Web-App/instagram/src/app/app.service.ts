import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AppService {
  constructor(private readonly http: HttpClient) {}

  getImagesList() {
    return this.http.get('/insta');
  }
}
