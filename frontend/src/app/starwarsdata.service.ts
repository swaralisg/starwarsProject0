import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Starwarsdata} from './starwarsdata.model'
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarwarsdataService {
  starwar: Starwarsdata[];

  // Defining base URL to test various endpoints endpoints 
  readonly baseURL = 'http://localhost:8080/people';
  readonly otherAPIs = 'http://localhost:8080/people/others';

  constructor(private http:HttpClient) { }

  // Function for fetching data for a person  after entering the respective name within the endpoint
  getPeopleByName(name) {
    return this.http.get<Starwarsdata>(this.baseURL + "/name/" + name).pipe(map(res => {
      return res;
    }));
  }

  // Function for fetching data for a person  after entering the respective ID within the endpoint
  getPeopleById(id) {
    return this.http.get<Starwarsdata>(this.baseURL + "/" + id).pipe(map(res => {
      return res;
    }));
  }
  
  // Function for fetching data for all people after entering the respective endpoint 
  getAllPeople(): Observable<Starwarsdata>{
    return this.http.get<Starwarsdata>(this.baseURL).pipe(map(res => {
      return res;
    }));
  }

  // Fetching data from nested APIs
  getDataForAPI(url) {
    return this.http.post<any>(this.otherAPIs, {targetEndpoint: url}).pipe(map(res => {
      return res;
    }));
  }
}
