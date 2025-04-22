import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-directive-docs',
  imports: [],
  templateUrl: './directive-docs.component.html',
  styleUrl: './directive-docs.component.scss',
})
export class DirectiveDocsComponent {
  codeBlock: SafeHtml;
  codeBlock2: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.codeBlock = this.sanitizer.bypassSecurityTrustHtml(`
@Directive({ selector: "[appIf]" })
export class AppIfDirective {
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);
    
  @Input() set appIf(condition: boolean) {
    this.viewContainer.clear();
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}`);

    this.codeBlock2 = this.sanitizer.bypassSecurityTrustHtml(`
import { Directive, ElementRef, inject, input, Input } from "@;angular/core";

@Directive({
  selector: "[appHighlight]",
  host: {
    "(mouseenter)": "onMouseEnter()",
    "(mouseleave)": "onMouseLeave()",
  },
})
export class HighlightDirective {
  private elementRef: ElementRef = inject(ElementRef);
  @Input("appHighlight") highlightColor: string = "";
  
  private onMouseEnter(): void {
    this.elementRef.nativeElement.style.backgroundColor this.highlightColor ||    "lightgray";
  }
  private onMouseLeave(): void {
    this.elementRef.nativeElement.style.backgroundColor "";
  }
}`);
  }
}
