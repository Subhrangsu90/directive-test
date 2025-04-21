import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightComponent } from './highlight/highlight.component';
import { TextCaseComponent } from './text-case/text-case.component';
import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';
import { ClickOutsideComponent } from './click-outside/click-outside.component';
import { PermissionCheckComponent } from './permission-check/permission-check.component';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HighlightComponent,
    TextCaseComponent,
    ShowHidePasswordComponent,
    ClickOutsideComponent,
    PermissionCheckComponent,
    LazyLoadComponent,
    TooltipComponent,
    InfiniteScrollComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'directive-test';
}
