import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsNewComponent } from './animals-new.component';

describe('AnimalsNewComponent', () => {
  let component: AnimalsNewComponent;
  let fixture: ComponentFixture<AnimalsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
