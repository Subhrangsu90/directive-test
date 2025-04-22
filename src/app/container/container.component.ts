import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-container',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {
  showDrawer = false;
  isDesktop = window.innerWidth > 768;

  toggleDrawer() {
    this.showDrawer = !this.showDrawer;
  }

  // Optional: update on resize
  @HostListener('window:resize', [])
  onResize() {
    this.isDesktop = window.innerWidth > 768;
    if (this.isDesktop) {
      this.showDrawer = true;
    }
  }
}
