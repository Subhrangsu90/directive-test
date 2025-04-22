import { Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';

export const routes: Routes = [
  { path: '', redirectTo: 'directives', pathMatch: 'full' },
  {
    path: 'directives',
    component: ContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'directive-docs',
        pathMatch: 'full',
      },
      {
        path: 'directive-docs',
        loadComponent: () =>
          import('./directive-docs/directive-docs.component').then(
            (m) => m.DirectiveDocsComponent
          ),
      },
      {
        path: 'highlight',
        loadComponent: () =>
          import('./highlight/highlight.component').then(
            (m) => m.HighlightComponent
          ),
      },
      {
        path: 'text-case',
        loadComponent: () =>
          import('./text-case/text-case.component').then(
            (m) => m.TextCaseComponent
          ),
      },
      {
        path: 'show-hide-password',
        loadComponent: () =>
          import('./show-hide-password/show-hide-password.component').then(
            (m) => m.ShowHidePasswordComponent
          ),
      },
      {
        path: 'click-outside',
        loadComponent: () =>
          import('./click-outside/click-outside.component').then(
            (m) => m.ClickOutsideComponent
          ),
      },
      {
        path: 'permission-check',
        loadComponent: () =>
          import('./permission-check/permission-check.component').then(
            (m) => m.PermissionCheckComponent
          ),
      },
      {
        path: 'lazy-load',
        loadComponent: () =>
          import('./lazy-load/lazy-load.component').then(
            (m) => m.LazyLoadComponent
          ),
      },
      {
        path: 'tooltip',
        loadComponent: () =>
          import('./tooltip/tooltip.component').then((m) => m.TooltipComponent),
      },
      {
        path: 'infinite-scroll',
        loadComponent: () =>
          import('./infinite-scroll/infinite-scroll.component').then(
            (m) => m.InfiniteScrollComponent
          ),
      },
    ],
  },
];
