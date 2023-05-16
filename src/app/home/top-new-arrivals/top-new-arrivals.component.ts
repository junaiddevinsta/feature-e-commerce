import { Component } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-top-new-arrivals',
  templateUrl: './top-new-arrivals.component.html',
  styleUrls: ['./top-new-arrivals.component.scss']
})
export class TopNewArrivalsComponent {
  constructor(private alert:AlertService){

  }
getAlert(){
  this.alert.alert();
}
}
