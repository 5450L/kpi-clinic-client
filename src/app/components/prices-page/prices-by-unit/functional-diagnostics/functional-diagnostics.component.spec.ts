import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalDiagnosticsComponent } from './functional-diagnostics.component';

describe('FunctionalDiagnosticsComponent', () => {
  let component: FunctionalDiagnosticsComponent;
  let fixture: ComponentFixture<FunctionalDiagnosticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionalDiagnosticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalDiagnosticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
