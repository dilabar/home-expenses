import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddEarningModalComponent } from './add-earning-modal.component';

describe('AddEarningModalComponent', () => {
  let component: AddEarningModalComponent;
  let fixture: ComponentFixture<AddEarningModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AddEarningModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEarningModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
