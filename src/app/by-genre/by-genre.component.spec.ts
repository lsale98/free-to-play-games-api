import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ByGenreComponent } from './by-genre.component';

describe('ByGenreComponent', () => {
  let component: ByGenreComponent;
  let fixture: ComponentFixture<ByGenreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ByGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
