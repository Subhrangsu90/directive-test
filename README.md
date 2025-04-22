# Angular Directives: A Complete Guide

## Introduction

Angular directives are one of the core features that allow developers to extend HTML's functionality. They are classes with the `@Directive()` decorator that let you attach custom behavior to elements in the DOM.

---

## Types of Directives

Angular provides three categories of directives:

### 1. Component Directives

- **Definition:** Technically a directive with a template.
- **Purpose:** Create UI elements and control view logic.
- **Decorator:** `@Component()`

### 2. Attribute Directives

- **Definition:** Change the appearance or behavior of an element.
- **Examples:** `ngClass`, `ngStyle`, custom ones like `appHighlight`
- **Decorator:** `@Directive()`

### 3. Structural Directives

- **Definition:** Add or remove elements in the DOM.
- **Examples:** `*ngIf`, `*ngFor`, `*ngSwitch`
- **Decorator:** `@Directive()` with a `*`-prefixed selector (conventionally)

---

## Why Use Directives?

- Promote **code reusability**
- Add **custom behavior** to elements without changing the component
- **Enhance user interactions** dynamically
- Cleanly separate logic from the template

---

## Creating a Custom Attribute Directive

### Example: `appHighlight`

```ts
import { Directive, ElementRef, inject, input, Input } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
  host: {
    // set the host listener to the element
    "(mouseenter)": "onMouseEnter()", // set the event listener to the element
    "(mouseleave)": "onMouseLeave()", // set the event listener to the element
  },
})
export class HighlightDirective {
  private elementRef: ElementRef = inject(ElementRef);
  @Input("appHighlight") highlightColor: string = "";

  private onMouseEnter(): void {
    // console.log('MOUSE ENTER', this.element);
    this.elementRef.nativeElement.style.backgroundColor = this.highlightColor || "lightgray"; // set the background color to the element
  }
  private onMouseLeave(): void {
    // console.log('MOUSE LEAVE', this.element);
    this.elementRef.nativeElement.style.backgroundColor = ""; // reset the background color to the element
  }
}
```

### Usage

```html
<p [appHighlight]="color">Hover over this text to highlight</p>
```

```ts
color = "yellow";
```

### Key Elements:

- `@Directive`: Declares the class as a directive
- `selector`: HTML attribute used to apply directive
- `ElementRef`: Provides access to the DOM element

---

## Creating a Structural Directive

### Example: `*appIf`

```ts
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
}
```

### Usage

```html
<div *appIf="true">This is conditionally rendered</div>
```

### Key Elements:

- `TemplateRef`: Represents the contents inside the directive's host element
- `ViewContainerRef`: Manages view insertion/removal in the DOM

---

## Directive Lifecycle Hooks

- `ngOnInit`: Called once after directive's data-bound properties are initialized
- `ngOnDestroy`: Cleanup logic before directive is destroyed
- `ngAfterViewInit`: When the view is fully initialized

---

## Best Practices

- Use `Renderer2` for DOM manipulation (not direct access via `nativeElement`)
- Keep directive logic focused and modular
- Use `@Input()` to make directives configurable
- Use `@HostBinding()` to bind host element properties
- Name custom directive selectors with a prefix (e.g., `app`, `cdv`) to avoid conflicts

---

## Conclusion

Directives are powerful tools that allow Angular developers to encapsulate and reuse DOM logic, enhance templates, and create dynamic UIs. Mastering attribute and structural directives empowers you to build more modular, interactive, and maintainable applications.

---

## Resources

- [Angular Docs on Directives](https://angular.dev/guide/directives)
- [Angular API Reference for @Directive](https://angular.dev/api/core/Directive)
