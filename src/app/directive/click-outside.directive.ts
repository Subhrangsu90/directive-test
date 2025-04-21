import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { inject } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
  private elementRef: ElementRef = inject(ElementRef);
  @Output() clickOutside: EventEmitter<void> = new EventEmitter<void>();
  @Input() appClickOutsideEnabled: boolean = true;
  private handler = (event: Event) => {
    if (!this.appClickOutsideEnabled) return;

    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  };

  ngOnInit(): void {
    document.addEventListener('click', this.handler, true);
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.handler, true);
  }
}
