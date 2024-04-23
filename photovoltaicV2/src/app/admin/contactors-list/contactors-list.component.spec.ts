import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactorsListComponent } from './contactors-list.component';

describe('ContactorsListComponent', () => {
  let component: ContactorsListComponent;
  let fixture: ComponentFixture<ContactorsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactorsListComponent]
    });
    fixture = TestBed.createComponent(ContactorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
