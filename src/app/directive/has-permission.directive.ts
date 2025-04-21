import {
  Directive,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appHasPermission]', // Structural directive
})
export class HasPermissionDirective implements OnInit {
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);
  permission: string[] = ['admin', 'editor'];
  @Input() appHasPermission: string = '';

  ngOnInit(): void {
    if (this.permission.includes(this.appHasPermission)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
