import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appVisibility]',
  host: {
    '(click)': 'toggleVisibility()',
  },
})
export class VisibilityDirective {
  @Input('appVisibility') inputElement!: HTMLInputElement;
  private toggleVisibility(): void {
    if (this.inputElement.type === 'password') {
      this.inputElement.type = 'text';
      this.inputElement.focus();
    } else {
      this.inputElement.type = 'password';
      this.inputElement.focus();
    }
  }
}
