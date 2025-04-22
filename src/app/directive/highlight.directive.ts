import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]', // selector is the name of the directive and type of the directive is attribute
  host: {
    // set the host listener to the element
    '(mouseenter)': 'onMouseEnter()', // set the event listener to the element
    '(mouseleave)': 'onMouseLeave()', // set the event listener to the element
  },
})
export class HighlightDirective {
  private elementRef: ElementRef = inject(ElementRef);
  readonly highlightColor = input<string>('', { alias: 'appHighlight' }); // set the default value to the input

  private onMouseEnter(): void {
    // console.log('MOUSE ENTER', this.element);
    this.elementRef.nativeElement.style.backgroundColor =
      this.highlightColor() || 'lightgray'; // set the background color to the element
    this.elementRef.nativeElement.style.color = 'black'; // set the color to the element
  }
  private onMouseLeave(): void {
    // console.log('MOUSE LEAVE', this.element);
    this.elementRef.nativeElement.style.backgroundColor = ''; // reset the background color to the element
    this.elementRef.nativeElement.style.color = ''; // reset the color to the element
  }
}
