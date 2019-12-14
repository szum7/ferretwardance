import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetings-component',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss']
})
export class GreetingsComponent implements OnInit {

  public pageHeight: number;

  ngOnInit(): void {
    var body = document.body,
    html = document.documentElement;

    console.log(body.scrollHeight);
    console.log(body.offsetHeight);
    console.log(html.clientHeight);
    console.log(html.scrollHeight);
    console.log(html.offsetHeight);

    //this.pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    this.pageHeight = html.clientHeight - 56;
  }
}
