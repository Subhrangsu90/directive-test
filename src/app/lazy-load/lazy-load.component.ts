import { Component } from '@angular/core';
import { LazyLoadDirective } from '../directive/lazy-load.directive';

@Component({
  selector: 'app-lazy-load',
  imports: [LazyLoadDirective],
  templateUrl: './lazy-load.component.html',
  styleUrl: './lazy-load.component.scss',
})
export class LazyLoadComponent {}
