import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftcontactsecComponent } from './leftcontactsec.component';

describe('LeftcontactsecComponent', () => {
  let component: LeftcontactsecComponent;
  let fixture: ComponentFixture<LeftcontactsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftcontactsecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftcontactsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
