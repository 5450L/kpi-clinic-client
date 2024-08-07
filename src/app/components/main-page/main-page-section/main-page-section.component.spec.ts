import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSectionComponent } from './main-page-section.component';

describe('MainPageSectionComponent', () => {
  let component: MainPageSectionComponent;
  let fixture: ComponentFixture<MainPageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
