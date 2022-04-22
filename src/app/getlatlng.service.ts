import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

import { EventPin } from './Map/event.model';

@Injectable({
  providedIn: 'root'
})
export class GetlatlngService {

  baseURL: string = "https://maps.googleapis.com/maps/api/geocode/json?";
 
  constructor(private http: HttpClient) {
  }
 
  getLatLng(address: string): Observable<any> {
    return this.http.get(this.baseURL + 'address=' + address + '&key=AIzaSyCAbS6nTQpOgFSLegRo1yl4sFHmm1FMOLE');
    //API_KEY=AIzaSyCAbS6nTQpOgFSLegRo1yl4sFHmm1FMOLE
  }
}
