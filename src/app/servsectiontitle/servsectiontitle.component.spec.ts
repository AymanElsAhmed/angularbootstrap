import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServsectiontitleComponent } from './servsectiontitle.component';

describe('ServsectiontitleComponent', () => {
  let component: ServsectiontitleComponent;
  let fixture: ComponentFixture<ServsectiontitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServsectiontitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServsectiontitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
