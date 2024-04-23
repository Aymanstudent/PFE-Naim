import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactorRequestListComponent } from './contactor-request-list.component';

describe('ContactorRequestListComponent', () => {
  let component: ContactorRequestListComponent;
  let fixture: ComponentFixture<ContactorRequestListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactorRequestListComponent]
    });
    fixture = TestBed.createComponent(ContactorRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
