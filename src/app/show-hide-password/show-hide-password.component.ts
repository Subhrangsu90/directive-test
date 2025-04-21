import { Component } from '@angular/core';
import { VisibilityDirective } from '../directive/visibility.directive';
import { AutoFocusDirective } from '../directive/auto-focus.directive';

@Component({
  selector: 'app-show-hide-password',
  imports: [VisibilityDirective, AutoFocusDirective],
  templateUrl: './show-hide-password.component.html',
  styleUrl: './show-hide-password.component.scss',
})
export class ShowHidePasswordComponent {}
