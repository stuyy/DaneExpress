import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APIRequestComponent } from './apirequest.component';

describe('APIRequestComponent', () => {
  let component: APIRequestComponent;
  let fixture: ComponentFixture<APIRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APIRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APIRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
