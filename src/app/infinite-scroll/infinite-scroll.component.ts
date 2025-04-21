import { Component, ViewChild } from '@angular/core';
import { LazyScrollDirective } from '../directive/lazy-scroll.directive';

@Component({
  selector: 'app-infinite-scroll',
  imports: [LazyScrollDirective],
  templateUrl: './infinite-scroll.component.html',
  styleUrl: './infinite-scroll.component.scss',
})
export class InfiniteScrollComponent {
  public items: string[] = [];
  public isLoading: boolean = false;

  ngOnInit() {
    this.loadMore();
  }

  public loadMore(): void {
    if (this.isLoading) return;
    this.isLoading = true;
    console.log('loadMore');

    const sampleItem = document.querySelector('.item');
    const itemHeight = sampleItem
      ? (sampleItem as HTMLElement).getBoundingClientRect().height
      : 30;

    const viewportHeight = window.innerHeight;
    const loadCount = Math.max(
      1,
      Math.floor(Math.ceil(viewportHeight / itemHeight) / 2)
    );

    setTimeout(() => {
      const newItems = Array.from(
        { length: loadCount },
        (_, i) => `Item ${this.items.length + i + 1}`
      );
      this.items.push(...newItems);
      this.isLoading = false;
    }, 1000);
  }
}
