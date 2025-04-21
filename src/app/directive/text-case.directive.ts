import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appTextCase]', // attribute selector
})
export class TextCaseDirective implements AfterViewInit {
  private elementRef: ElementRef = inject(ElementRef);
  @Input() appTextCase: string = 'uppercase';

  ngAfterViewInit(): void {
    const el = this.elementRef.nativeElement;
    const originalText = el.textContent;
    if (!originalText) return;

    const mode = this.appTextCase?.toLowerCase() || 'uppercase';
    el.textContent =
      mode === 'uppercase'
        ? originalText.toUpperCase()
        : originalText.toLowerCase();
  }
}
