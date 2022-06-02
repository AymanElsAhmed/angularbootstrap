import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InskillsecComponent } from './inskillsec.component';

describe('InskillsecComponent', () => {
  let component: InskillsecComponent;
  let fixture: ComponentFixture<InskillsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InskillsecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InskillsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
