import { Component } from '@angular/core';
import { HighlightDirective } from '../directive/highlight.directive';

@Component({
  selector: 'app-highlight',
  imports: [HighlightDirective],
  templateUrl: './highlight.component.html',
  styleUrl: './highlight.component.scss',
})
export class HighlightComponent {
  color = 'yellow';
}
