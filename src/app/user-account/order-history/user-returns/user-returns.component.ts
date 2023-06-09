import { Component } from '@angular/core';

@Component({
  selector: 'app-user-returns',
  templateUrl: './user-returns.component.html',
  styleUrls: ['./user-returns.component.scss']
})
export class UserReturnsComponent {
  isModalOpen = false;
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
