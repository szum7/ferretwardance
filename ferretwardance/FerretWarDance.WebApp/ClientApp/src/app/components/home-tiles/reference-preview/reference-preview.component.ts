import { Component, OnInit, HostListener } from '@angular/core';
import { Grid } from './model/grid.class';
import { Tile } from './model/tile.class';

@Component({
  selector: 'app-reference-preview-component',
  templateUrl: './reference-preview.component.html',
  styleUrls: ['./reference-preview.component.scss']
})
export class ReferencePreviewComponent implements OnInit {
 
  grid: Grid;

  get filter(): string {
    return this.grid == null ? "" : this.grid.filter;
  }

  get columns(): Array<Array<Tile>> {
    return this.grid == null ? [[]] : this.grid.columns;
  }

  constructor() {
  }
  
  ngOnInit(): void {
    let urlBase = "../../../../assets/images/";
    let originalImages = [
      new Tile(urlBase + "001.jpg", "", "photo", 1),
      new Tile(urlBase + "002.jpg", "", "photo", 2),
      new Tile(urlBase + "003.jpg", "", "painting", 3),
      new Tile(urlBase + "004.jpeg", "", "photo", 4),
      new Tile(urlBase + "005.jpg", "", "photo", 5),
      new Tile(urlBase + "006.jfif", "", "painting", 6),
      new Tile(urlBase + "007.jpg", "", "photo", 7),
      new Tile(urlBase + "008.jpg", "", "painting", 8),
      new Tile(urlBase + "009.png", "", "painting", 9)
    ];
    this.grid = new Grid(originalImages);
    this.grid.initTiles();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(window.innerWidth);
  }

  setFilter(newFilter: string): void{
    this.grid.buildTiles(newFilter);    
  }

}
