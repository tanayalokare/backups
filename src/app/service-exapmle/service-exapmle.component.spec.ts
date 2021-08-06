import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceExapmleComponent } from './service-exapmle.component';

describe('ServiceExapmleComponent', () => {
  let component: ServiceExapmleComponent;
  let fixture: ComponentFixture<ServiceExapmleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceExapmleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceExapmleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
