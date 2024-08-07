import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUnitListItemComponent } from './service-unit-list-item.component';

describe('ServiceUnitListItemComponent', () => {
  let component: ServiceUnitListItemComponent;
  let fixture: ComponentFixture<ServiceUnitListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceUnitListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceUnitListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
