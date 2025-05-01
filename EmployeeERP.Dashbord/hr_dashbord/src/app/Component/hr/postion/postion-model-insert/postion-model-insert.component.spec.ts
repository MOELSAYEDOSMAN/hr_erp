import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostionModelInsertComponent } from './postion-model-insert.component';

describe('PostionModelInsertComponent', () => {
  let component: PostionModelInsertComponent;
  let fixture: ComponentFixture<PostionModelInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostionModelInsertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostionModelInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
