import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alert() {
    Swal.fire('Successfully Done!', 'Added to wishlist', 'success');
  }
  constructor() { }
}
