import { Component } from '@angular/core';
import { UserAccountService } from '../services/user-account.service';

@Component({
  selector: 'app-render-user-account',
  templateUrl: './render-user-account.component.html',
  styleUrls: ['./render-user-account.component.scss']
})
export class RenderUserAccountComponent {
  isButtonClicked = false;
constructor(private userAccount:UserAccountService){}
isActiveComponent(componentName: string) {
  return this.userAccount.activeComponentValue === componentName;
}
onButtonClick() {
  this.isButtonClicked = true;
}
}
