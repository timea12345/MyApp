import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  constructor(private http: HttpClient) {} 
  
  personUrl="http://localhost:3000/persons";

  getPersons() {
    return this.http.get(this.personUrl);
  }
}


