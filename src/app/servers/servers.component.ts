import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  // display(name: HTMLInputElement) {
  //   console.log(name.value);
  // }
  name = '';

  @ViewChild('serverName') serverName: ElementRef;

  display() {
    console.log(this.serverName.nativeElement.value);
    this.name = this.serverName.nativeElement.value;
  }

  constructor() { }

  ngOnInit() {
  }


}
