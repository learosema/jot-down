import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JotFormComponent } from './jot-form.component';

describe('JotFormComponent', () => {
  let component: JotFormComponent;
  let fixture: ComponentFixture<JotFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JotFormComponent]
    });
    fixture = TestBed.createComponent(JotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
