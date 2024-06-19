// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://dog.ceo/api/';

  constructor(private http: HttpClient) {
    console.log('ApiService initialized'); // Debug log
  }

  getRandomDog(): Observable<any> {
    console.log('ApiService.getRandomDog called'); 
    return this.http.get<any>(`${this.baseUrl}breeds/image/random`);
  }

  postData(data: any): Observable<any> {
    console.log('ApiService.postData called');
    return this.http.post<any>(`${this.baseUrl}your-endpoint`, data);
  }

  test() : void { 
    alert('Are you ready');
  }

  // Add other methods to interact with the Dog API as needed
}