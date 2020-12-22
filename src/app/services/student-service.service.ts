import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudents } from '../model/students';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private url: string = "/assets/data/students.json";

  constructor(private http: HttpClient) { }

  getStudents() : Observable<IStudents[]>{
    return this.http.get<IStudents[]>(this.url);
  }
}
