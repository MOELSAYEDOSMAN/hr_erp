import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetilesComponent } from './employee-detiles.component';

describe('EmployeeDetilesComponent', () => {
  let component: EmployeeDetilesComponent;
  let fixture: ComponentFixture<EmployeeDetilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDetilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDetilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
