import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startEvent = new EventEmitter();
  i = 0;
  intervalId;

  start() {
    console.log(this.i);
    this.intervalId = setInterval(() => {
      this.i++;
      console.log(this.i);
      this.startEvent.emit(this.i);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
  }

  constructor() { }

  ngOnInit() {
  }

}
