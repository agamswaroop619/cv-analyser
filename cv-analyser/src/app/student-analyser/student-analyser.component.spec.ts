import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAnalyserComponent } from './student-analyser.component';

describe('StudentAnalyserComponent', () => {
  let component: StudentAnalyserComponent;
  let fixture: ComponentFixture<StudentAnalyserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAnalyserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAnalyserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
