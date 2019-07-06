import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumSectionComponent } from './forum-section.component';

describe('ForumSectionComponent', () => {
  let component: ForumSectionComponent;
  let fixture: ComponentFixture<ForumSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
