import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDevisRequestComponent } from './add-devis-request.component';

describe('AddDevisRequestComponent', () => {
  let component: AddDevisRequestComponent;
  let fixture: ComponentFixture<AddDevisRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDevisRequestComponent]
    });
    fixture = TestBed.createComponent(AddDevisRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
