import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTrueComponent } from './icon-true.component';

describe('IconTrueComponent', () => {
  let component: IconTrueComponent;
  let fixture: ComponentFixture<IconTrueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconTrueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
