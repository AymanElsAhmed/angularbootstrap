import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaboutmeComponent } from './secondaboutme.component';

describe('SecondaboutmeComponent', () => {
  let component: SecondaboutmeComponent;
  let fixture: ComponentFixture<SecondaboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaboutmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
