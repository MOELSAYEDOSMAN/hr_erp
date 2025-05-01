import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostionListComponent } from './postion-list.component';

describe('PostionListComponent', () => {
  let component: PostionListComponent;
  let fixture: ComponentFixture<PostionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
