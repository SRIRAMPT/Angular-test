import { Component, OnInit} from '@angular/core';
import { GetService } from '../newService.service';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  name: string;

  constructor(private getService: GetService) {
    console.log('working');
    this.getService.newEvent.subscribe((data) => {
      this.name = data;
    });
  }


  ngOnInit() {
  }


}
