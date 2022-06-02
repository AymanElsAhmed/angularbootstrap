import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServsectionComponent } from './servsection.component';

describe('ServsectionComponent', () => {
  let component: ServsectionComponent;
  let fixture: ComponentFixture<ServsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
