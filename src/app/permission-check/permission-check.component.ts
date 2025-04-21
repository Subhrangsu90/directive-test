import { Component } from '@angular/core';
import { HasPermissionDirective } from '../directive/has-permission.directive';

@Component({
  selector: 'app-permission-check',
  imports: [HasPermissionDirective],
  templateUrl: './permission-check.component.html',
  styleUrl: './permission-check.component.scss',
})
export class PermissionCheckComponent {}
