import { Component } from '@angular/core';
import { TextCaseDirective } from '../directive/text-case.directive';

@Component({
  selector: 'app-text-case',
  imports: [TextCaseDirective],
  templateUrl: './text-case.component.html',
  styleUrl: './text-case.component.scss',
})
export class TextCaseComponent {}
