import { Component } from '@angular/core';
import { TooltipDirective } from '../directive/tooltip.directive';

@Component({
  selector: 'app-tooltip',
  imports: [TooltipDirective],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
})
export class TooltipComponent {}
