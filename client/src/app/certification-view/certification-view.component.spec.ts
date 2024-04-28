import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationViewComponent } from './certification-view.component';

describe('CertificationViewComponent', () => {
  let component: CertificationViewComponent;
  let fixture: ComponentFixture<CertificationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
