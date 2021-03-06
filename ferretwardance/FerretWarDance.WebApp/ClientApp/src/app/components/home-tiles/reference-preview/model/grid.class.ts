import { Tile } from "./tile.class";

export class Grid {
  
  public originalTiles: Array<Tile>;
  private filteredTiles: Array<Tile>;
  public columns: Array<Array<Tile>>;
  public filter: string;
  private readonly THREE_COLUMN_MIN_WIDTH: number = 800;

  constructor(originalTiles: Array<Tile>) {

    this.originalTiles = originalTiles;

    this.resetColumns();
    this.filteredTiles = [];
    this.filter = 'all';
  }

  initTiles(pageWidth: number): void {
    this.buildTiles(this.filter, pageWidth);
  }

  buildTiles(filter: string, pageWidth: number): void {
    this.filter = filter;
    this.resetColumns();
    this.filterTiles();
    this.orderTiles();
    this.spreadTiles(this.filteredTiles, this.columns, pageWidth);
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

  private spreadTiles(source: Array<Tile>, destination: Array<Array<Tile>>, pageWidth: number): void {
    for (let i = 0, o = 0; i < source.length; i++) {

      const el = source[i];

      destination[o].push(new Tile(
        el.url, 
        el.title, 
        el.category,
        el.order)
      );
    
      if (pageWidth < this.THREE_COLUMN_MIN_WIDTH){
        o = (o == 1) ? 0 : o + 1;
      } else {
        o = (o == 2) ? 0 : o + 1;
      }
    }
  }

}