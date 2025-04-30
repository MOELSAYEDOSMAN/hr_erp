import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeModelInsertComponent } from './employee-model-insert.component';

describe('EmployeeModelInsertComponent', () => {
  let component: EmployeeModelInsertComponent;
  let fixture: ComponentFixture<EmployeeModelInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeModelInsertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeModelInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
