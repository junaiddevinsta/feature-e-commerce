import { Component } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-recomended-for-you',
  templateUrl: './recomended-for-you.component.html',
  styleUrls: ['./recomended-for-you.component.scss']
})
export class RecomendedForYouComponent {
constructor(private alert:AlertService){}
getAlert(){
  this.alert.alert();
}
}
