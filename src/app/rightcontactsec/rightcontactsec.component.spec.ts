import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightcontactsecComponent } from './rightcontactsec.component';

describe('RightcontactsecComponent', () => {
  let component: RightcontactsecComponent;
  let fixture: ComponentFixture<RightcontactsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightcontactsecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightcontactsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
