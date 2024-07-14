import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HltvService {

  private apiUrl = 'https://localhost:7245/api/rankings/GetAllRankings';

  constructor(private httpClient : HttpClient) { }

  getRanking() : Observable<Ranking[]>{
    return this.httpClient.get<Ranking[]>(this.apiUrl);
  }

}

export interface Ranking {
  rank: number;
  teamName: string;
  points: string;
  teamLogo: string;
}