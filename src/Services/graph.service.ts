import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  private apiUrl = "https://localhost:44313/api/Graphs/by-date-range";

  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  getGraphData(startDate: Date, endDate: Date): Observable<any> {
  const start = startDate.toISOString();  
  const end = endDate.toISOString();  

  let params = new HttpParams()
    .set('startDate', start)
    .set('endDate', end);

  return this.http.get<any>(this.apiUrl, { params });
}
}

