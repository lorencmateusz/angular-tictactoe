import { Component, OnInit } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';


@Component({
  selector: 'app-app',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  imports: [SquareComponent, BoardComponent],
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}