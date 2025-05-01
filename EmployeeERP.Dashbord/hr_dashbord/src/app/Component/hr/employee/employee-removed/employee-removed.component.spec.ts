import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRemovedComponent } from './employee-removed.component';

describe('EmployeeRemovedComponent', () => {
  let component: EmployeeRemovedComponent;
  let fixture: ComponentFixture<EmployeeRemovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeRemovedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRemovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
