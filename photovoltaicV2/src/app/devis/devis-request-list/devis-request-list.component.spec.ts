import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisRequestListComponent } from './devis-request-list.component';

describe('DevisRequestListComponent', () => {
  let component: DevisRequestListComponent;
  let fixture: ComponentFixture<DevisRequestListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevisRequestListComponent]
    });
    fixture = TestBed.createComponent(DevisRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
