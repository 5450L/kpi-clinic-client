import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertebrologyComponent } from './vertebrology.component';

describe('VertebrologyComponent', () => {
  let component: VertebrologyComponent;
  let fixture: ComponentFixture<VertebrologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VertebrologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VertebrologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
