import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDocsComponent } from './directive-docs.component';

describe('DirectiveDocsComponent', () => {
  let component: DirectiveDocsComponent;
  let fixture: ComponentFixture<DirectiveDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
