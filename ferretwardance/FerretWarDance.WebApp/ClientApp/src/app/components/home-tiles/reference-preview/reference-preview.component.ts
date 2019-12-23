import { Component, OnInit, HostListener } from '@angular/core';

class Tile {
  url: string;
  title: string;
  category: string;
  order: number;

  constructor(url: string, title: string, category: string, order: number) {
    this.url = url;
    this.title = title;
    this.category = category;
    this.order = order;
  }
}

class Grid {
  
  public originalTiles: Array<Tile>;
  private filteredTiles: Array<Tile>;
  public columns: Array<Array<Tile>>;
  public filter: string;

  constructor() {
    this.resetColumns();
    this.filteredTiles = [];
    this.filter = 'all';
  }

  buildTiles(): void {
    this.resetColumns();
    this.filterTiles();
    this.orderTiles();
    this.spreadTiles(this.filteredTiles, this.columns);
  }

  private resetColumns(): void {
    this.columns = [[], [], []];
  }

  private orderTiles(): void {
    this.filteredTiles.sort((tile1, tile2) => (tile1.order > tile2.order) ? 1 : -1);    
  }

  private filterTiles(): void {
    if (this.filter === 'all') {
      this.filteredTiles = this.originalTiles;
    } else {
      this.filteredTiles = this.originalTiles.filter(tile => tile.category === this.filter);
    }
  }

  private spreadTiles(source: Array<Tile>, destination: Array<Array<Tile>>): void {
    for (let i = 0, o = 0; i < source.length; i++) {

      const el = source[i];

      destination[o].push(new Tile(
        el.url, 
        el.title, 
        el.category,
        el.order)
      );

      o = (o == 2) ? 0 : o + 1;
    }
  }

}

@Component({
  selector: 'app-reference-preview-component',
  templateUrl: './reference-preview.component.html',
  styleUrls: ['./reference-preview.component.scss']
})
export class ReferencePreviewComponent implements OnInit {

  filter: string;

  originalImages: Array<Tile>;
  filteredImages: any;  

  constructor() {
    
    this.filter = "all";

    let urlBase = "../../../../assets/images/";

    this.originalImages = [
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


    this.buildFilteredImages();
  }
  
  ngOnInit(): void {
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(window.innerWidth);
  }

  setFilter(val: string): void{
    this.filter = val;
    this.buildFilteredImages();
  }

  buildFilteredImages(): void {

    this.filteredImages = [[], [], []];

    for (let i = 0, o = 0; i < this.originalImages.length; i++) {

      const el = this.originalImages[i];

      if (this.filter !== "all" && el.category !== this.filter) {
        continue;
      }

      this.filteredImages[o].push(new Tile(
        el.url, 
        el.title, 
        el.category,
        el.order)
      );

      o = (o == 2) ? 0 : o + 1;
    }
  }
  
}
