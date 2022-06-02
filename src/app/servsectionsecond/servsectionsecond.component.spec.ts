import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServsectionsecondComponent } from './servsectionsecond.component';

describe('ServsectionsecondComponent', () => {
  let component: ServsectionsecondComponent;
  let fixture: ComponentFixture<ServsectionsecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServsectionsecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServsectionsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
