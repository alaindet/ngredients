import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgredientsComponent } from './ngredients.component';

describe('NgredientsComponent', () => {
  let component: NgredientsComponent;
  let fixture: ComponentFixture<NgredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgredientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
