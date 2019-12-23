export class Tile {
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