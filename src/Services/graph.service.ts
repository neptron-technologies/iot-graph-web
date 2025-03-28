import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GraphData } from '../Models/Graph'; 

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  private apiUrl = "https://localhost:44313/api/Graphs";

  constructor( private http: HttpClient) { }

  getGraphData(): Observable<GraphData[]> {
    return this.http.get<GraphData[]>(this.apiUrl);
}
}