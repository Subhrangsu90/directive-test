import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appLazyLoad]',
})
export class LazyLoadDirective implements AfterViewInit {
  private elementRef: ElementRef = inject(ElementRef);
  private observer!: IntersectionObserver;
  @Input('appLazyLoad') imageUrl: string = '';

  ngAfterViewInit(): void {
    this.createObserver();
  }

  createObserver() {
    const imgElement = this.elementRef.nativeElement as HTMLImageElement;

    const observer = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        imgElement.src = this.imageUrl;
        obs.unobserve(imgElement);
      }
    });
    observer.observe(imgElement);
  }
}
