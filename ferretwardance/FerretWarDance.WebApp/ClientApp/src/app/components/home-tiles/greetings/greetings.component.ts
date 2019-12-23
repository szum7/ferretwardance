import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetings-component',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss']
})
export class GreetingsComponent implements OnInit {

  public pageHeight: number;

  ngOnInit(): void {
    let html = document.documentElement;
    this.pageHeight = html.clientHeight - 56;
    
    //var body = document.body,
    //this.pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  }

  toggleVideo(): void {
    let vid = <HTMLVideoElement>document.getElementById("bgVideo");
    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
  }
}
