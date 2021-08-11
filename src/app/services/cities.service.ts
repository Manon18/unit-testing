import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from "../interfaces/city";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) {}

  public getCities(): Observable<City> {
    return this.http.get<any>('https://retoolapi.dev/FUWyt7/data');
  }
}
