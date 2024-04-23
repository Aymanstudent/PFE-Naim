import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactorComponent } from './add-contactor.component';

describe('AddContactorComponent', () => {
  let component: AddContactorComponent;
  let fixture: ComponentFixture<AddContactorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddContactorComponent]
    });
    fixture = TestBed.createComponent(AddContactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
