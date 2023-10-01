import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsAppliedComponent } from './jobs-applied.component';

describe('JobsAppliedComponent', () => {
  let component: JobsAppliedComponent;
  let fixture: ComponentFixture<JobsAppliedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobsAppliedComponent]
    });
    fixture = TestBed.createComponent(JobsAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
