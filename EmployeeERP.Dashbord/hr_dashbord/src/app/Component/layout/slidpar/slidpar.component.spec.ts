import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidparComponent } from './slidpar.component';

describe('SlidparComponent', () => {
  let component: SlidparComponent;
  let fixture: ComponentFixture<SlidparComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidparComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
