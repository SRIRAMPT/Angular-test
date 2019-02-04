import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  display(name: HTMLInputElement) {
    console.log(name.value);
  }
  constructor() { }

  ngOnInit() {
  }


}
