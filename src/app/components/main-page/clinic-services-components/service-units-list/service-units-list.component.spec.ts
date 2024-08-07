import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUnitsListComponent } from './service-units-list.component';

describe('ServiceUnitsListComponent', () => {
  let component: ServiceUnitsListComponent;
  let fixture: ComponentFixture<ServiceUnitsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceUnitsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceUnitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
