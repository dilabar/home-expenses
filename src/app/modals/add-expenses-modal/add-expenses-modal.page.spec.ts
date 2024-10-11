import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddExpensesModalPage } from './add-expenses-modal.page';

describe('AddExpensesModalPage', () => {
  let component: AddExpensesModalPage;
  let fixture: ComponentFixture<AddExpensesModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpensesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
