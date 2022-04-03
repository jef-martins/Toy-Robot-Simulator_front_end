import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFalseComponent } from './icon-false.component';

describe('IconFalseComponent', () => {
  let component: IconFalseComponent;
  let fixture: ComponentFixture<IconFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconFalseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
