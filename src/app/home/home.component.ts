import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tiles: Tile[] = [{ text: 'tile one', cols: 3, rows: 4, color: 'lightblue' },
  { text: 'tile 2', cols: 1, rows: 2, color: 'lightblue' },
  { text: 'tile 3', cols: 1, rows: 1, color: 'lightblue' },
  { text: 'tile 4', cols: 1, rows: 1, color: 'lightblue' }]

  sportTiles: Tile[] = [{ text: 'tile 1', cols: 1, rows: 2, color: 'lightblue' },
  { text: 'tile 2', cols: 2, rows: 4, color: 'lightblue' },
  { text: 'tile 3', cols: 1, rows: 4, color: 'lightblue' },
  { text: 'tile 4', cols: 1, rows: 2, color: 'lightblue' }]
}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
