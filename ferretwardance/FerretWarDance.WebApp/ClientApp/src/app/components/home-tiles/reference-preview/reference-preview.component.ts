import { Component, OnInit } from '@angular/core';

class Tile {
  url: string;
  title: string;
  category: string;

  constructor(url: string, title: string, category: string) {
    this.url = url;
    this.title = title;
    this.category = category;
  }
}

@Component({
  selector: 'app-reference-preview-component',
  templateUrl: './reference-preview.component.html',
  styleUrls: ['./reference-preview.component.scss']
})
export class ReferencePreviewComponent implements OnInit {

  images: any;
  imageList: Array<any>;
  urlBase: string;
  filter: string;

  originalImages: Array<any>;
  filteredImages: any;

  constructor() {
    
    this.filter = "all";

    this.urlBase = "../../../../assets/images/";

    this.originalImages = [
      new Tile(this.urlBase + "001.jpg", "", "photo"),
      new Tile(this.urlBase + "002.jpg", "", "photo"),
      new Tile(this.urlBase + "003.jpg", "", "painting"),
      new Tile(this.urlBase + "004.jpeg", "", "photo"),
      new Tile(this.urlBase + "005.jpg", "", "photo"),
      new Tile(this.urlBase + "006.jfif", "", "painting"),
      new Tile(this.urlBase + "007.jpg", "", "photo"),
      new Tile(this.urlBase + "008.jpg", "", "painting"),
      new Tile(this.urlBase + "009.png", "", "painting")
    ];


    this.buildFilteredImages();

    // this.images = [
    //   [
    //     new Tile(this.urlBase + "001.jpg", "", "photo"),
    //     new Tile(this.urlBase + "002.jpg", "", "photo")
    //   ],
    //   [
    //     new Tile(this.urlBase + "003.jpg", "", "painting")
    //   ],
    //   [
    //     new Tile(this.urlBase + "004.jpeg", "", "painting")
    //   ]
    // ];
    // this.imageList = [
    //   {url: this.urlBase + "001.jpg", title: "Kép1"},
    //   {url: this.urlBase + "002.jpg", title: "Kép2"},
    //   {url: this.urlBase + "003.jpg", title: "Kép3"},
    //   {url: this.urlBase + "004.jpeg", title: "Kép4"}
    // ];
  }
  
  ngOnInit(): void {
  }

  setFilter(val: string): void{
    this.filter = val;
    this.buildFilteredImages();
  }


  private orderImageList(): void {
    // Check page width -> 2 | 3 columns
    // Order by 'order' property
    // Copy it to property
  }

  buildFilteredImages(): void {

    this.filteredImages = [[], [], []];

    for (let i = 0, o = 0; i < this.originalImages.length; i++) {

      const el = this.originalImages[i];
      console.log(this.filter);

      if (this.filter !== "all" && el.category !== this.filter) {
        continue;
      }

      this.filteredImages[o].push(new Tile(
        el.url, 
        el.title, 
        el.category)
      );

      if (o == 2) {
        o = 0;
      } else {
        o++;
      }
    }

    // Filter
    // Copy to property
  }



}
