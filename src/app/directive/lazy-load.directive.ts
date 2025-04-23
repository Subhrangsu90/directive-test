import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appLazyLoad]',
})
export class LazyLoadDirective implements AfterViewInit {
  private elementRef: ElementRef = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);
  @Input('appLazyLoad') imageUrl: string = '';
  @Input() loaderUrl: string = 'assets/loader.gif';

  ngAfterViewInit(): void {
    this.setLoaderImage();
    this.createObserver();
  }
  private setLoaderImage() {
    const img = this.elementRef.nativeElement as HTMLImageElement;
    this.renderer.setAttribute(img, 'src', this.loaderUrl);
  }

  private createObserver() {
    const imgElement = this.elementRef.nativeElement as HTMLImageElement;

    const observer = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        const realImg = new Image();
        realImg.src = this.imageUrl;
        realImg.onload = () => {
          imgElement.src = this.imageUrl;
        };
        obs.unobserve(imgElement);
      }
    });
    observer.observe(imgElement);
  }
}
