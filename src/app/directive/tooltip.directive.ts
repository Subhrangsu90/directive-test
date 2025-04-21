import { Directive, ElementRef, inject, Input, Renderer2 } from '@angular/core';

type Position = {
  top: string;
  bottom: string;
  left: string;
  right: string;
};

@Directive({
  selector: '[appTooltip]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class TooltipDirective {
  private elementRef: ElementRef = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);
  private tooltipElement: HTMLElement | null = null;

  @Input() tooltipText: string = '';
  @Input() tooltipPosition: keyof Position = 'top';

  private onMouseEnter() {
    if (!this.tooltipText) return;
    this.tooltipElement = this.renderer.createElement('div');
    const text = this.renderer.createText(this.tooltipText);
    this.renderer.appendChild(this.tooltipElement, text);
    this.renderer.appendChild(document.body, this.tooltipElement);

    this.setStyle();
  }

  private onMouseLeave() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }

  private setStyle() {
    if (!this.tooltipElement) return;

    const tooltip = this.tooltipElement;

    this.renderer.setStyle(tooltip, 'position', 'absolute');
    this.renderer.setStyle(tooltip, 'zIndex', '1000');
    this.renderer.setStyle(tooltip, 'padding', '4px 8px');
    this.renderer.setStyle(tooltip, 'backgroundColor', '#333');
    this.renderer.setStyle(tooltip, 'color', '#fff');
    this.renderer.setStyle(tooltip, 'borderRadius', '4px');
    this.renderer.setStyle(tooltip, 'fontSize', '14px');
    this.renderer.setStyle(tooltip, 'whiteSpace', 'nowrap');

    requestAnimationFrame(() => {
      const tooltipRect = tooltip.getBoundingClientRect();
      const hostPos = this.elementRef.nativeElement.getBoundingClientRect();
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const scrollX = window.scrollX || document.documentElement.scrollLeft;

      const hasTopSpace = hostPos.top + scrollY > tooltipRect.height + 4;
      const hasBottomSpace =
        window.innerHeight - hostPos.bottom >= tooltipRect.height + 4;
      const hasLeftSpace = hostPos.left >= tooltipRect.width + 4;
      const hasRightSpace =
        window.innerWidth - hostPos.right >= tooltipRect.width + 4;

      let position = this.tooltipPosition;

      // Fallback logic
      if (position === 'top' && !hasTopSpace) {
        position = hasBottomSpace ? 'bottom' : hasRightSpace ? 'right' : 'left';
      } else if (position === 'bottom' && !hasBottomSpace) {
        position = hasTopSpace ? 'top' : hasRightSpace ? 'right' : 'left';
      } else if (position === 'left' && !hasLeftSpace) {
        position = hasRightSpace ? 'right' : hasTopSpace ? 'top' : 'bottom';
      } else if (position === 'right' && !hasRightSpace) {
        position = hasLeftSpace ? 'left' : hasTopSpace ? 'top' : 'bottom';
      }
      switch (position) {
        case 'top':
          this.renderer.setStyle(
            tooltip,
            'top',
            `${hostPos.top + scrollY - tooltipRect.height - 4}px`
          );
          this.renderer.setStyle(
            tooltip,
            'left',
            `${
              hostPos.left + (hostPos.width - tooltipRect.width) / 2 + scrollX
            }px`
          );

          break;
        case 'bottom':
          this.renderer.setStyle(
            tooltip,
            'top',
            `${hostPos.bottom + scrollY + 4}px`
          );
          this.renderer.setStyle(
            tooltip,
            'left',
            `${
              hostPos.left + (hostPos.width - tooltipRect.width) / 2 + scrollX
            }px`
          );
          break;
        case 'left':
          this.renderer.setStyle(
            tooltip,
            'top',
            `${
              hostPos.top +
              scrollY +
              (hostPos.height - tooltipRect.height) / 2 +
              scrollY
            }px`
          );
          this.renderer.setStyle(
            tooltip,
            'left',
            `${hostPos.left + scrollX - tooltipRect.width - 4}px`
          );
          break;
        case 'right':
          this.renderer.setStyle(
            tooltip,
            'top',
            `${
              hostPos.top +
              scrollY +
              (hostPos.height - tooltipRect.height) / 2 +
              scrollY
            }px`
          );
          this.renderer.setStyle(
            tooltip,
            'left',
            `${hostPos.right + 4 + scrollX}px`
          );
          break;
      }
    });
  }
}
