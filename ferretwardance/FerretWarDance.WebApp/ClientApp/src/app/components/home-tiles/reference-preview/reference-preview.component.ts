import { Component, OnInit } from '@angular/core';

class Tile {
  url: string;
  title: string;
  category: string;  
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

  constructor() {
    this.urlBase = "../../../../assets/images/";
    this.filter = "instagram";
    this.images = [
      [
        {url: this.urlBase + "001.jpg", title: "Kép1"},
        {url: this.urlBase + "002.jpg", title: "Kép2"}
      ],
      [
        {url: this.urlBase + "003.jpg", title: "Kép3"}
      ],
      [        
        {url: this.urlBase + "004.jpeg", title: "Kép4"},
      ]
    ];
    this.imageList = [
      {url: this.urlBase + "001.jpg", title: "Kép1"},
      {url: this.urlBase + "002.jpg", title: "Kép2"},
      {url: this.urlBase + "003.jpg", title: "Kép3"},
      {url: this.urlBase + "004.jpeg", title: "Kép4"}
    ];
  }
  
  ngOnInit(): void {
  }

  setFilter(val: string): void{
    this.filter = val;
  }

}
