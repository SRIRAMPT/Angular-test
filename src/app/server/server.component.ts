import { Component } from '@angular/core';
import { GetService } from '../newService.service';

@Component({
    selector: '.app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {

    name: string;

    constructor(private getService: GetService) {
    }

  onService() {
    console.log('appComponent');
    this.getService.newEvent.emit(this.name);
    }
}
