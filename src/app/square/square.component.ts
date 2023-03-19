import { Component, Input } from '@angular/core';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
  imports: [BoardComponent],
  standalone: true
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

}