import { Component } from '@angular/core';
import { ClickOutsideDirective } from '../directive/click-outside.directive';

@Component({
  selector: 'app-click-outside',
  imports: [ClickOutsideDirective],
  templateUrl: './click-outside.component.html',
  styleUrl: './click-outside.component.scss',
})
export class ClickOutsideComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  onClickOutside() {
    console.log('Clicked outside!');
  }
  closeModal() {
    this.isModalOpen = false;
  }
}
