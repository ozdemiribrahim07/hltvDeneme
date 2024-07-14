import { Component, OnInit } from '@angular/core';
import { HltvService, Ranking } from './services/hltv.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  rankings: Ranking[] = [];
  filteredRankings: Ranking[] = [];
  constructor(private hltvService : HltvService) { }


  ngOnInit(): void {
    this.hltvService.getRanking().subscribe(data => {
      this.rankings = data;
      this.filteredRankings = data;
      console.log(this.rankings);
    })
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    if (filterValue) {
      this.filteredRankings = this.rankings.filter(ranking =>
        ranking.teamName.toLowerCase().includes(filterValue) ||
        ranking.rank.toString().includes(filterValue) ||
        ranking.points.toLowerCase().includes(filterValue)
      );
    } else {
      this.filteredRankings = this.rankings;
    }
  }


}
