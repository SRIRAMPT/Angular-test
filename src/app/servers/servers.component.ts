import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  @Input() confirm1: string;
  @Output() childEvent = new EventEmitter();
  name = '';
  constructor() { }

  ngOnInit() {
  }

  onInput() {
    this.childEvent.emit(this.name);
  }

}
