import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildtestComponent } from './childtest.component';

describe('ChildtestComponent', () => {
  let component: ChildtestComponent;
  let fixture: ComponentFixture<ChildtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
