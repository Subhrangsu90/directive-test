import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appLazyScroll]',
})
export class LazyScrollDirective implements AfterViewInit, OnDestroy {
  @Output() pageScroll = new EventEmitter<void>();
  @Input() isLoading: boolean = false;
  @Input() debounceTime: number = 200;

  private elRef: ElementRef = inject(ElementRef);
  private observer: IntersectionObserver | null = null;
  private debounceTimer: ReturnType<typeof setTimeout> | null = null;

  ngAfterViewInit(): void {
    this.initIntersectionObserver();
  }

  private initIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !this.isLoading) {
          if (this.debounceTimer) clearTimeout(this.debounceTimer);
          this.debounceTimer = setTimeout(() => {
            this.pageScroll.emit();
          }, this.debounceTime);
        }
      },
      {
        root: null, // use viewport; change this if using scrollable container
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% visible
      }
    );

    this.observer.observe(this.elRef.nativeElement);
  }
  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
  }
}
