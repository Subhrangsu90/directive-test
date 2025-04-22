import { Component } from '@angular/core';
import { TooltipDirective } from '../directive/tooltip.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tooltip',
  imports: [TooltipDirective, FormsModule],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
})
export class TooltipComponent {
  position: 'top' | 'bottom' | 'left' | 'right' = 'top';
}
